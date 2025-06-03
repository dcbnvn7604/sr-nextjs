'use client'
import { ReactNode, useState } from 'react';
import { CurrentUser, SetCurrentUser, CurrentUserType } from '@/context/UserContext';


export default function Layout({children}: {children: ReactNode}) {
  const [user, setUser] = useState<CurrentUserType>({id: null})
  return (
    <CurrentUser.Provider value={user}>
      <SetCurrentUser.Provider value={setUser}>
        {children}
      </SetCurrentUser.Provider>
    </CurrentUser.Provider>
  );
}