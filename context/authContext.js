import {auth} from "../firebase/credenciales"
import { createContext, useContext } from "react"
import React, {useState, useEffect} from "react"
import {
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth"

export const authContext = createContext()
export const useAuth = ()=> { 
    const context = useContext(authContext)
    if(!context){
        console.log("error, sin contexto")
    }
    return context;
}

export function AuthProvider({children}){
    const [user, setUser] = useState(null)
    useEffect(()=>{
        const suscribed = onAuthStateChanged(auth, (currentUser)=>{
            if(!currentUser){
                console.log("no hay usuario")
                setUser("")
            }else{
                setUser(currentUser)
            }
        })
        return () => suscribed()
    },[])

    const register = async (email, password) =>{
        const response = await createUserWithEmailAndPassword(auth, email, password)
    };
    const login = async (email, password) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            // Maneja la respuesta si es necesario
        } catch (error) {
            console.error("Error logging in user:", error);
            // Maneja el error según sea necesario
        }
    };
    const loginWithGoogle = async () =>{
        const responseGoogle = new GoogleAuthProvider()
        return signInWithPopup(auth, responseGoogle)
    }
    const logout = async () => {
        const response = await signOut(auth);
        console.log(user)
      };


    return (
        <authContext.Provider value={{
            register,
            login,
            loginWithGoogle,
            logout,
            user,
        }}>
            {children}
        </authContext.Provider>
    )
}
