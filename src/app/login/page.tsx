'use client'

import { SetCurrentUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { srfetch } from "@/util";

export default function Page() {
  const router = useRouter()
  const setUser = useContext(SetCurrentUser)!
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const response = await srfetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify({username, password})
    })
    const result = await response.json()
    setUser({id: result['id']})
    router.push('/')
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input data-testid="username" id="username" type="text" value={username} onChange={handleUsername}></input>
        <input data-testid="password" id="password" type="text" value={password} onChange={handlePassword}></input>
        <button data-testid="submit" type="submit">Login</button>
      </form>
    </div>
  );
}