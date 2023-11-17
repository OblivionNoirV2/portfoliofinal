import React, { createContext, useContext, useState } from "react";

interface themeContextValue {
    theme: string; 
    setTheme: (value: string) => void; 
};

export const themeContext = createContext<themeContextValue>(
    {
        theme: 'sherbet', //default
        setTheme: () => {}

    }
    );

export function themeContextProvider({ children }: {children: React.ReactElement}){
    const [theme, setTheme] = useState('sherbet');

    
    return(
        <themeContext.Provider value={{theme, setTheme}}>
            {children}
        </themeContext.Provider>
    )


}