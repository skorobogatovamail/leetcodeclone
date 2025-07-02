"use client";

import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

import {
  AuthModalState,
  closeAuthModal,
  openAuthModal,
} from "@/lib/features/authModalSlice";
import { useAppDispatch } from "@/lib/hooks";

import BasicModal from "./BasicModal";
import { Button } from "../ui/button";

import { useRegister } from "@/hooks/useRegister";


const Signup: React.FC = () => {
  const { register, loading } = useRegister()
  const dispatch = useAppDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleClick = useCallback((type: AuthModalState["modalType"]) => {
    dispatch(openAuthModal(type));
  }, [dispatch])


  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.name || !inputs.email || !inputs.password) {
      toast.error("Please fill all fields", { position: 'bottom-right', autoClose: 3000 })
    };
    try {
      toast.loading("Creating your account", { position: "bottom-right", autoClose: 3000, toastId: 'registeringToast' });
      await register(inputs)
      dispatch(closeAuthModal());

    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : String(err), { position: 'bottom-right', autoClose: 3000 })
    } finally {
      toast.dismiss('registeringToast')
    }
  };


  return (
    <BasicModal title="Create an account">
      <form onSubmit={handleRegister}>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-500">
              Your name
            </label>
            <input
              name="name"
              id="name"
              type="text"
              className="
                        border
                        border-slate-300 
                        rounded-md 
                        outline-none bg-white p-2 text-sm text-gray-500 placeholder-gray-400
                        focus:border-blue-500"
              placeholder="John Doe"
              value={inputs.name}
              onChange={handleChangeInput}
            />
          </div>

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
                Registering
              </Button>
            ) : (
              <Button className="w-full" type="submit">
                Register
              </Button>
            )}
          </div>
          <div className="pt-2 text-sm flex gap-2 items-center">
            <span>Already have an account?</span>
            <Button
              onClick={() => handleClick("login")}
              variant="link"
              className="text-blue-500 hover:underline p-0"
            >
              Log In
            </Button>
          </div>
        </div>
      </form>
    </BasicModal>
  );
};
export default Signup;
