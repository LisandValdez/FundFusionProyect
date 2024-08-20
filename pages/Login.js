import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react';
import { useRouter } from 'next/router';



export default function Login() {
    const {data: session} = useSession()
    if(session) {
        return <>
        Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
    }
    
    const router = useRouter();

    const handleEmailClick = () => {
        router.push('/FormsEmail');
    };

    return (
        <div className='loginDiv'>
            <div className='loginGrid'>
                <div className="loginIcon">
                    {/* SVG y otros elementos */}
                </div>
                <div className='loginText'>
                    <h1 className='loginTitle'>FUND FUSION</h1>
                    <h2 className='loginSubTittle'>Gestiona tu dinero y trabajo</h2>
                </div>
                <div className="loginButtons">
                    <button className="loginGoogle" onClick={() => signIn('google')}><GoogleIcon fontSize='medium'/>Seguir con Google</button>
                    <button className="loginEmail" onClick={handleEmailClick}><EmailIcon fontSize='medium'/>Registrate</button>
                    <p className='loginAccount'>Ya tengo cuenta en FundFusion</p>

                </div>
            </div>
        </div>
    )
}
