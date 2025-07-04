"use client";

import React, { useEffect } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

import { auth } from "@/firebase/firebase";

import BasicModal from "./BasicModal";
import { Button } from "../ui/button";
import Subtitle from "../Subtitle";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [sendPasswordResetEmail, error] = useSendPasswordResetEmail(auth);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const success = await sendPasswordResetEmail(email);
      if (success) {
        toast.success("Reset password email was sent", {
          position: "bottom-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : String(error), {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    if (error) {
      toast.error("Error resetting password", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  }, [error]);

  return (
    <BasicModal title="Reset Password">
      <Subtitle text="Enter your email to reset your password" />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-500"
            >
              Your email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              className="
                        border
                        border-slate-300 
                        rounded-md 
                        outline-none bg-white p-2 text-sm text-gray-500 placeholder-gray-400
                        focus:border-blue-500"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pt-2">
            <Button className="w-full" type="submit">
              Reset Password
            </Button>
          </div>
        </div>
      </form>
    </BasicModal>
  );
};
export default ResetPassword;
