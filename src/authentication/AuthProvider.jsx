import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import PropTypes from 'prop-types';
import { GoogleAuthProvider } from "firebase/auth";
import { app } from "./FirebaseConfig";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in
    const login = ( email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // log out
    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }


     // observer
     useEffect(()=>{
        const unSubscribe =    onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            console.log(currentUser)
            // if(currentUser){
                // get token from server and store
                // const userInfo = { email: currentUser.email};
                // axios.post('/jwt', userInfo)
                // .then(res=>{
                    // console.log(res.data)
                //    if(res.data.token){
                //     localStorage.setItem('access-token',res.data.token)
                //    } 
                // })
            // }
            // else{
            //     // to do: remove token if stored on client side
            //    localStorage.removeItem('access-token')
            // }
            setLoading(false);
        })
        return unSubscribe;
    }, [])  
   

        
        // google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
      };


    const authInfo ={
        user,
        loading,
        createUser,
        login,
        logout,
        googleLogin,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {   
    children: PropTypes.object,  
}

export default AuthProvider;