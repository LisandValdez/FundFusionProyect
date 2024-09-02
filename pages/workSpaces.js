import {useAuth } from '@/context/authContext'
import React, {useEffect} from "react";
import { useRouter } from "next/router";


export default function EspaciosDeTrabajo(){
    const auth = useAuth();
    const { user } = useAuth();
    const router = useRouter();
    useEffect(() => {
        if (!user) {
          router.push("/Login");
        }
      }, [user, router]);
    
    const handleLogout = () => {
        auth.logout();
    }

        return (
            <>
                Signed in as  <br/>
                <button onClick={()=> handleLogout()}>Sign out</button>
            </>
        )
}

