"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { signOut } = useAuthActions();
  const router = useRouter();

  const onSignOut = () => {
    signOut().finally(() => router.refresh());
  };

  return (
    <div>
      Logged In!
      <Button onClick={onSignOut}>Sign Out</Button>
    </div>
  );
}
