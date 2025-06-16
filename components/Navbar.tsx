"use client";

import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { useAppDispatch } from "@/lib/hooks";
import { AuthModalState, openAuthModal } from "@/lib/features/authModalSlice";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { LogOut, UserCircle2 } from "lucide-react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [user] = useAuthState(auth);
  const [signOut, loading, error] = useSignOut(auth);

  const dispatch = useAppDispatch();

  const handleClick = (type: AuthModalState["modalType"]) => {
    dispatch(openAuthModal(type));
  };

  const handleLogout = async () => {
    try {
      const success = await signOut();
      if (!success) throw new Error("Logout failed")
    } catch (error) {
      alert(error)
    }

  };

  return (
    <div className="flex items-center justify-between px-15 sm:px-20 py-5 border-b">
      <Logo />

      {user ? (
        <div className="flex items-center justify-between gap-2">
          <div className="relative group">
            <UserCircle2 className="h-8 w-8" />
            <p className="absolute scale-0 group-hover:scale-100 bg-neutral-200 top-10 -translate-x-1/2 left-1/2 p-2 rounded-lg text-orange-500 transition-all duration-200 ease-out text-sm">
              {user?.email}
            </p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut />
          </Button>
        </div>

      ) : (
        <div className="flex items-center justify-between gap-2">
          <Button variant="outline" onClick={() => handleClick("login")}>
            Login
          </Button>
          <Button onClick={() => handleClick("register")}>Sign Up</Button>
        </div>
      )
      }
    </div >
  );
};
export default Navbar;
