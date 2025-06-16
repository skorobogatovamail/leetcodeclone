"use client";

import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { useAppDispatch } from "@/lib/hooks";
import { AuthModalState, openAuthModal } from "@/lib/features/authModalSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { UserCircle2 } from "lucide-react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [user] = useAuthState(auth);

  const dispatch = useAppDispatch();

  const handleClick = (type: AuthModalState["modalType"]) => {
    dispatch(openAuthModal(type));
  };

  return (
    <div className="flex items-center justify-between px-15 sm:px-20 py-5 border-b">
      <Logo />

      {user ? (
        <div className="relative group">
          <UserCircle2 className="h-8 w-8" />
          <p className="absolute scale-0 group-hover:scale-100 bg-neutral-200 top-10 -translate-x-1/2 left-1/2 p-2 rounded-lg text-orange-500 transition-all duration-200 ease-out text-sm">
            {user?.email}
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-2">
          <Button variant="outline" onClick={() => handleClick("login")}>
            Login
          </Button>
          <Button onClick={() => handleClick("register")}>Sign Up</Button>
        </div>
      )}
    </div>
  );
};
export default Navbar;
