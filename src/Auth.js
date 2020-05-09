import React, {useEffect, useState} from 'react';
import firebaseApp from './config/firebase';
import { getCurrentUserInfo } from './modules/firebaseUsage';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {

    const [currentUser, setcurrentUser] = useState(null);   
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged(setcurrentUser);
    }, []);
    
    useEffect(() => {
        if (currentUser) {
            getCurrentUserInfo()
                .then((result) => setUserInfo(result))
        }        
    }, [currentUser])

    return(
        <AuthContext.Provider value={{currentUser, userInfo}}>
            {children}
        </AuthContext.Provider>
    );
};
