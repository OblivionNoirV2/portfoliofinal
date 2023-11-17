import React, { createContext, useContext, useState } from "react";

interface ThemeContextValue {
    theme: string; 
    setTheme: (value: string) => void; 
};

export const ThemeContext = createContext<ThemeContextValue>(
    {
        theme: 'sherbet', //default
        setTheme: () => {}

    }
    );

export function ThemeContextProvider({ children }: {children: React.ReactElement}){
    const [theme, setTheme] = useState('sherbet');
    
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )


}