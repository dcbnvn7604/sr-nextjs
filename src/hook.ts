import { useRouter } from "next/navigation"
import { srfetch } from "./util"

export const useFetchWHandle = () => {
  const router = useRouter()
  return async (path: string, data: object) => {
    const response = await srfetch(path, data)
    if (response.status == 401) {
      router.push('/login')
      return
    }
    return response
  }
}