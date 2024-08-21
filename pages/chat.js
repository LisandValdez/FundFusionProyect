import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function ChatPage() {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/")
        }
    }, [status, router])

    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br/>
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }

    return null
}