import { ReactNode, useContext, useEffect } from "react";
import RequiredLogin from "./RequiredLogin";
import { CurrentUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

export default function RequiredRole({children, role}: {children: ReactNode, role: string}) {
  return (
    <RequiredLogin>
      <_RequiredRole role={role}>
        {children}
      </_RequiredRole>
    </RequiredLogin>
  );
}

const _RequiredRole = ({children, role}: {children: ReactNode, role: string}) => {
  const user = useContext(CurrentUser)!
  const router = useRouter()
  useEffect(() => {
    if (user['role'] != role) {
      router.push('/login')
    }
  }, [user['role']])
  return (
    <>
      {user['role'] == role ? children: null}
    </>
  )
}