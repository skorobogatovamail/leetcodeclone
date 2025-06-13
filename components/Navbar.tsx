"use client";

import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useAppDispatch } from "@/lib/hooks";
import { AuthModalState, openAuthModal } from "@/lib/features/authModalSlice";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const user = useSelector((state: RootState) => state.user);
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  const dispatch = useAppDispatch();

  const handleClick = (type: AuthModalState["modalType"]) => {
    dispatch(openAuthModal(type));
  };

  return (
    <div className="flex items-center justify-between px-8 py-5 border-b">
      <Logo />
      {isAuthenticated ? (
        <div>Welcome, {user?.user?.name}</div>
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
