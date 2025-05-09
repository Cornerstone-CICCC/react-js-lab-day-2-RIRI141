import { createContext } from "react";
// import type { User } from "../../types/Users";


export type UserContextProps = {
    fullName: string,
    setFullName: React.Dispatch<React.SetStateAction<string>>,
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserContext = createContext<UserContextProps>({
  fullName:"",
  setFullName: () => {},
  isLoggedIn:false,
  setIsLoggedIn: () => {}
})