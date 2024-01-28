"use client";
import { useAuth } from "./provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
    } else {
      router.push("/upload");
    }
  }, [user, router]);
  return <div>Home Page</div>;
}
