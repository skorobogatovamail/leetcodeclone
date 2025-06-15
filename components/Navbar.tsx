"use client";

import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { useAppDispatch } from "@/lib/hooks";
import { AuthModalState, openAuthModal } from "@/lib/features/authModalSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [user] = useAuthState(auth);
  const dispatch = useAppDispatch();

  const handleClick = (type: AuthModalState["modalType"]) => {
    dispatch(openAuthModal(type));
  };

  return (
    <div className="flex items-center justify-between px-8 py-5 border-b">
      <Logo />
      {user ? (
        <div>{user?.email}</div>
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
