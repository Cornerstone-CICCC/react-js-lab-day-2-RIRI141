import { useState, type ReactNode } from "react";
import { UserContext } from "./UserContext";

export function UserContextProvider({ children } : { children : ReactNode }) {

    const [fullName, setFullName] = useState("")
    const [isLoggedIn, setIsLoggedIn ] = useState(false)

    return (

        <>
        <UserContext.Provider value={{ fullName, setFullName, isLoggedIn, setIsLoggedIn }}>
            {children}
        </UserContext.Provider>   
        </>
    )
}