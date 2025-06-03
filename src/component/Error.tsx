import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export const SetErrorContext = createContext<Dispatch<SetStateAction<string>>|undefined>(undefined)

export default function Error({children}: {children: ReactNode}) {
  const [errorMessage, setErrorMessage] = useState("")

  return (
    <>
      { errorMessage ? (<h2 data-testid="error">{errorMessage}</h2>) : null }
      <SetErrorContext.Provider value={setErrorMessage}>{children}</SetErrorContext.Provider>
    </>
  )
}