import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(true);

    function handleTheme() {
        setTheme(!theme);
    }

    return (
        <ThemeContext.Provider value={{ theme, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    )

}