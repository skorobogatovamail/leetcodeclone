"use client";

import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useAuthState } from "react-firebase-hooks/auth";

import Features from "@/components/Features";
import Login from "@/components/Modals/Login";
import ResetPassword from "@/components/Modals/ResetPassword";
import Signup from "@/components/Modals/Signup";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { RootState } from "@/lib/store";
import { auth } from "@/firebase/firebase";

export default function Home() {
  const [user] = useAuthState(auth);
  console.log("user", user);
  const router = useRouter();
  if (user) router.push("/tasks");

  const isOpened = useSelector((state: RootState) => state.authModal.isOpened);
  const modalType = useSelector(
    (state: RootState) => state.authModal.modalType
  );

  return (
    <div className="px-8 sm:px-20 bg-gradient-to-b from-slate-50 to-white">
      <main className="px-15">
        <section className="py-20 flex flex-col gap-5 px-4">
          <Title
            className="max-w-[600px]"
            text="Master coding interviews with confidence"
          />
          <Subtitle
            className="max-w-[600px]"
            text="Our platform is tailored to help you prepare for coding interviews smoothly. 
          Developed by interviewers from top tech companies."
          />
          <Link href="/questions">
            <Button size="lg" className="gap-1">
              <span>Browse Questions</span>
              <ArrowRight />
            </Button>
          </Link>
        </section>
        <section className="py-12 px-4">
          <Features />
        </section>
        {isOpened && modalType === "login" && <Login />}
        {isOpened && modalType === "register" && <Signup />}
        {isOpened && modalType === "resetPassword" && <ResetPassword />}
      </main>
    </div>
  );
}
