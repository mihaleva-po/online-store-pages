import React, {createContext, ReactNode, useContext, useState} from "react";

interface LangCon {
    currentLang: string,
    changeLang: (newLang: string) => void
}

export const LangContext = createContext<LangCon | undefined>(undefined);

export const useLang = () => {
    const context = useContext(LangContext);

    if (!context) {
        throw new Error('context error');
    }

    return context;
}

interface LangProviderProps {
    children: ReactNode
}

export const LangProvider = ({children}: LangProviderProps) => {
    const [currentLang, setCurrentLang] = useState('ru');

    const changeLang = (newLang: string) => {
        setCurrentLang(newLang);
    }

    return <LangContext.Provider value={{currentLang, changeLang}}>
        {children}
    </LangContext.Provider>
}



