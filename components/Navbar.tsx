"use client";

import React from "react";
import { toast } from "react-toastify";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import {
  ChevronLeft,
  ChevronRight,
  List,
  LogOut,
  UserCircle2,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/lib/hooks";
import { auth } from "@/firebase/firebase";
import { AuthModalState, openAuthModal } from "@/lib/features/authModalSlice";

import { Button } from "./ui/button";
import Timer from "./Timer";
import Logo from "./Logo";

type NavbarProps = {
  problemPage?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ problemPage }) => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const dispatch = useAppDispatch();

  const handleClick = (type: AuthModalState["modalType"]) => {
    dispatch(openAuthModal(type));
  };

  const handleLogout = async () => {
    try {
      const success = await signOut();
      if (!success) throw new Error("Logout failed");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : String(error), {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div
      className={cn(
        "flex items-center justify-between border-b py-5",
        problemPage ? "px-10" : "px-15 sm:px-20"
      )}
    >
      <Logo />
      {problemPage && (
        <div className="flex items-center justify-center gap-4 ">
          <div className="flex items-center justify-center rounded h-8 w-8 cursor-pointer text-neutral-500 hover:bg-neutral-200">
            <ChevronLeft />
          </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <List className="text-neutral-500  h-5 w-5 " />
            <span className="hover:text-neutral-500">Problem list</span>
          </div>
          <div className="flex items-center justify-center rounded h-8 w-8 cursor-pointer text-neutral-500 hover:bg-neutral-200">
            <ChevronRight />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between gap-2">
        {user && problemPage && <Timer />}

        {user ? (
          <>
            <div className="relative group cursor-pointer">
              <UserCircle2 className="hover:bg-neutral-200 p-1 rounded h-8 w-8" />
              <p className="tip">{user?.email}</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut />
            </Button>
          </>
        ) : (
          <>
            <Button variant="outline" onClick={() => handleClick("login")}>
              Login
            </Button>
            <Button onClick={() => handleClick("register")}>Sign Up</Button>
          </>
        )}
      </div>
    </div>
  );
};
export default Navbar;
