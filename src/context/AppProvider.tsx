import React, { useState, createContext} from "react";

export const AppContext = createContext<any>({});
export const AppProvider = (props: any) => {
    const [activeRoute, setActiveRoute] = useState("/jobs");
    const dispatchAppState = (type: any, newValues: any) => {
        switch(type){
            case "UPDATE_ACTIVE_ROUTE":
                setActiveRoute(newValues);
                return
            default:
                return;   
        }
    }

    return <AppContext.Provider value={{activeRoute, dispatchAppState}} {...props} />
}