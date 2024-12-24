"use client"

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import GoogleIcon from "../../public/google_icon.svg";
import Image from "next/image";

export default function GoogleSigninButton() {
  return (
    <Button onClick={async () => await signIn('google')} variant="outline" size="icon">
        <Image src={GoogleIcon} alt="google icon" className="w-6 h-6"/>
    </Button>
  );
}