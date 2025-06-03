"use client"
import { ReactNode, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CurrentUser } from "@/context/UserContext";

export default function RequiredLogin({children}: {children: ReactNode}) {
  const { id } = useContext(CurrentUser)!
  const router = useRouter()

  useEffect(() => {
    if (!id) {
      router.push('/login')
    }
  }, [id, router]);

  return (
    <>
      {id ? children: null}
    </>
  );
}