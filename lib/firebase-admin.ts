import { cert, initializeApp, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

import serviceAccount from "./firebase-admin-credentials";

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount as Record<string, string>),
  });
}

export const adminAuth = getAuth();
