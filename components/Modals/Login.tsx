"use client";

import React, { useEffect, useState } from "react";
import BasicModal from "./BasicModal";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/lib/hooks";
import {
  AuthModalState,
  closeAuthModal,
  openAuthModal,
} from "@/lib/features/authModalSlice";
import { useRouter } from "next/navigation";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleClick = (type: AuthModalState["modalType"]) => {
    dispatch(openAuthModal(type));
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newUser = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
      dispatch(closeAuthModal());
      router.push("/tasks");
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err instanceof Error ? err.message : String(err), {
          position: "bottom-right",
          autoClose: 3000,
        });
      }
    }
  };

  useEffect(() => {
    if (error) {
      toast.error("Login Failed", {
        position: "bottom-right",
        autoClose: 3000,
      });
      console.log("error", error);
    }
  }, [error]);

  return (
    <BasicModal title="Login to Leetcodeclone">
      <form onSubmit={handleLogin}>
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
              value={inputs.email}
              onChange={handleChangeInput}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-500"
            >
              Your password
            </label>
            <input
              name="password"
              id="password"
              type="password"
              className="
                        border
                        border-slate-300 
                        rounded-md 
                        outline-none bg-white p-2 text-sm text-gray-500 placeholder-gray-400
                        focus:border-blue-500"
              placeholder="*******"
              value={inputs.password}
              onChange={handleChangeInput}
            />
          </div>
          <div className="pt-2">
            {loading ? (
              <Button className="w-full" type="submit" disabled>
                Logging in
              </Button>
            ) : (
              <Button className="w-full" type="submit">
                Login
              </Button>
            )}
          </div>
          <div className="pt-2 text-sm flex gap-2 items-center">
            <span>Not registered yet?</span>
            <Button
              variant="link"
              className="text-blue-500 hover:underline p-0"
              onClick={() => handleClick("register")}
            >
              Create account
            </Button>
          </div>
          <div className="pt-2">
            <Button
              variant="link"
              className="text-gray-500 text-sm hover:underline p-0"
              onClick={() => handleClick("resetPassword")}
            >
              Forgot your password?
            </Button>
          </div>
        </div>
      </form>
    </BasicModal>
  );
};
export default Login;
