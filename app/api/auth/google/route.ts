import { doc, runTransaction } from "firebase/firestore";
import { OAuth2Client } from "google-auth-library";
import { NextResponse } from "next/server";

import { firestore } from "@/firebase/firebase";
import { adminAuth } from "@/lib/firebase-admin";

const client = new OAuth2Client(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ error: "Token is required" }, { status: 400 });
    }

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    if (!payload?.email || !payload.sub) {
      return NextResponse.json(
        { error: "Invalid Google token payload" },
        { status: 401 }
      );
    }

    // 2. Подготовка данных пользователя
    const userData = {
      name: payload.name || payload.email.split("@")[0],
      uid: payload.sub,
      email: payload.email,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      likedProblems: [],
      dislikedProblems: [],
      solvedProblems: [],
      starredProblems: [],
      photoURL: payload.picture || "",
      emailVerified: payload.email_verified || false,
      provider: "google",
    };

    // 3. Создание/обновление пользователя в Firestore
    await runTransaction(firestore, async (transaction) => {
      const userRef = doc(firestore, "users", userData.uid);
      const userDoc = await transaction.get(userRef);

      if (!userDoc.exists()) {
        transaction.set(userRef, userData);
      } else {
        transaction.update(userRef, {
          name: userData.name,
          updatedAt: userData.updatedAt,
          photoURL: userData.photoURL,
          emailVerified: userData.emailVerified,
        });
      }
    });

    // Генерация кастомного токена
    const customToken = await adminAuth.createCustomToken(userData.uid, {
      email: userData.email,
      name: userData.name,
      picture: userData.photoURL,
    });

    return NextResponse.json({
      success: true,
      user: {
        uid: userData.uid,
        email: userData.email,
        name: userData.name,
        photoURL: userData.photoURL,
      },
      token: customToken,
    });
  } catch (error) {
    console.error("Google auth error:", error);
    return NextResponse.json(
      {
        error: "Authentication failed",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
