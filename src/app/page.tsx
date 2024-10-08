"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";

export default function Home() {
  const { signOut } = useAuthActions();

  const onSignOut = () => {
    signOut().finally(() => window.location.replace("/auth"));
  };

  return (
    <div>
      Logged In!
      <Button onClick={onSignOut}>Sign Out</Button>
    </div>
  );
}
