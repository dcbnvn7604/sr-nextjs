import Link from 'next/link'
import { useEffect, useState } from 'react'
 
export default function Page() {
  const [users, setUsers] = useState<{username: string}[]>([])
  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3000/api/users')
      const result = await response.json()
      setUsers(result)
    })()
  },[])
  return (
    <div>
      <h2>User list</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.username}</li>
        ))}
      </ul>
    </div>
  )
}