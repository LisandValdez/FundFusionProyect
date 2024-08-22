import { AuthProvider, useAuth } from '@/context/authContext'
import { useRouter } from "next/router"


export default function ChatPage() {
    const auth = useAuth();
    const router = useRouter()
    const handleLogout = () => {
        auth.logout();
        router.push('/Login')
    }


        return (
            <>
                Signed in as  <br/>
                <button onClick={()=> handleLogout()}>Sign out</button>
            </>
        )
}