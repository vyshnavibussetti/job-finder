import React, { useState, useEffect, createContext} from "react";

export const UserContext = createContext<any>({});
export const UserProvider = (props: any) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [loggedInUserRole, setLoggedUserRole] = useState({});
    const [loggedInUserInfo, setLoggedInUserInfo] = useState({});
    const dispatchUserInfoState = (type: any, newValues: any) => {
        switch(type){
            case "UPDATE_USER_LOGGED_IN_STATUS":
                setIsUserLoggedIn(newValues);
                return
            case "UPDATE_LOGGED_IN_USER_ROLE":
                setLoggedUserRole(newValues);
                return 
            case "UPDATE_LOGGED_IN_USER_INFO":
                localStorage.setItem("logged_in_user_info", newValues);
                setLoggedInUserInfo(newValues);
                return       
            default:
                return;   
        }
    }

    return <UserContext.Provider value={{isUserLoggedIn, loggedInUserRole, loggedInUserInfo, dispatchUserInfoState}} {...props} />
}