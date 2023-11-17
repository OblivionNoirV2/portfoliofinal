import React, { createContext, useContext } from "react";

interface ThemeContextValue {
    Theme: string; 
    setTheme: (value: string) => void; 
};

export const ThemeContext = createContext<ThemeContextValue>(
    {
        Theme: 'sherbet', //default
        setTheme: () => {}

    }
    );

