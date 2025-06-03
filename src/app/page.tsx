import Link from 'next/link'
import RequiredLogin from '@/component/RequiredLogin'
import { useFetchWHandle } from '@/hook'
import { useEffect } from 'react'
 
export default function Page() {
  return (
    <RequiredLogin>
      <Home/>
    </RequiredLogin>
  )
}

const Home = () => {
  const fetchWH = useFetchWHandle()

  useEffect(() => {
    (async () => {
      await fetchWH('/api/users', {})
    })();
  }, [])
  return (
    <>
      <h2>Home</h2>
    </>
  )
}