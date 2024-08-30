import { auth } from "../firebase/credenciales";
import { createContext, useContext } from "react";
import React, { useState, useEffect } from "react";
import {
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => { 
    const context = useContext(authContext);
    if (!context) {
        console.log("error, sin contexto");
        throw new Error("useAuth debe ser usado dentro de un AuthProvider");
    }
    return context;
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                console.log("no hay usuario");
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const register = async (email, password) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User registered successfully:", response.user);
            return response.user;
        } catch (error) {
            console.error("Error registering user:", error.message);
            throw error;
        }
    };

    const login = async (email, password) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully:", response.user);
            return response.user;
        } catch (error) {
            console.error("Error logging in user:", error.message);
            throw error;
        }
    };

    const loginWithGoogle = async () => {
        try {
            const googleProvider = new GoogleAuthProvider();
            const response = await signInWithPopup(auth, googleProvider);
            console.log("User logged in with Google:", response.user);
            return response.user;
        } catch (error) {
            console.error("Error logging in with Google:", error.message);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            console.log("User logged out successfully");
            setUser(null);
        } catch (error) {
            console.error("Error logging out user:", error.message);
            throw error;
        }
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
    );
}
