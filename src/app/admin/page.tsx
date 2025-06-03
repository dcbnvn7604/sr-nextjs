'use client'
import RequiredRole from "@/component/RequiredRole";
import { useFetchWHandle } from "@/hook";
import { useEffect } from "react";

export default function Page() {
  return (
    <RequiredRole role="admin">
      <Admin/>
    </RequiredRole>
  )
}

const Admin = () => {
  const fetchWH = useFetchWHandle()
  useEffect(() => {
    (async () => {
      await fetchWH('api/admin/user', {})
    })()
  }, [])

  return (
    <>
      <h2>Admin</h2>
    </>
  )
}