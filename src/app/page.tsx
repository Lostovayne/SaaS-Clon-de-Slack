"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";

export default function Home() {
  const { signOut } = useAuthActions();

  const onSignOut = () => {
    signOut().then(() => {
      window.location.reload();
    });
  };

  return (
    <div>
      Logged In!
      <Button onClick={onSignOut}>Sign Out</Button>
    </div>
  );
}
