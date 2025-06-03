import { useRouter } from "next/navigation"
import { srfetch } from "./util"
import { useContext } from "react"
import { SetErrorContext } from "./component/Error"

export const useFetchWHandle = () => {
  const router = useRouter()
  const setErrorMessage = useContext(SetErrorContext)!
  return async (path: string, data: object) => {
    const response = await srfetch(path, data)
    if (response.status == 401) {
      router.push('/login')
      return
    }
    if (!response.ok) {
      setErrorMessage("Server error")
      return
    }
    return response
  }
}