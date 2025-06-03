'use client'
import { createContext, Dispatch, SetStateAction } from "react";

export interface CurrentUserType {
  id:number|null
}
export const CurrentUser = createContext<CurrentUserType|undefined>(undefined);
export const SetCurrentUser = createContext<Dispatch<SetStateAction<CurrentUserType>>|undefined>(undefined)