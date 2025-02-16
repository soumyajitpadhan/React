import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(false);

    function handleLogin() {
        setLogin(!login);
    }

    return (
        <AuthContext.Provider value={{ login, handleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}