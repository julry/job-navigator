import { createContext, useContext } from "react";

export const AppContext = createContext({wrapperRef: null});

export function useProgress() {
    return useContext(AppContext)
}

