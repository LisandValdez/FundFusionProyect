import { useAuth } from "@/context/authContext";
import { useState } from "react";
import { useRouter } from 'next/router';
import React, {useEffect} from "react";

export default function Loged() {
    const auth = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const { user } = useAuth();
    useEffect(() => {
        if (user) {
          router.push("/chat");
        }
      }, [user, router]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await auth.login(email, password);
            router.push('/chat');
        } catch (error) {
            // Maneja el error y muestra un mensaje al usuario
            setError("Error al iniciar sesión. Verifica tus credenciales e inténtalo de nuevo.");
            console.error("Error al iniciar sesión:", error.message);
        }
    };

    const handleBackClick = () => {
        router.push('/Login');
    };

    return (
        <div>
            <button className="backButton" onClick={handleBackClick}>
                &lt; Regresar
            </button>
            <form className="form" onSubmit={handleLogin}>
                <h3>Login</h3>
                {error && <p className="error-message">{error}</p>}
                <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="email" 
                    type="email" 
                    value={email}
                    placeholder="Correo electrónico"
                    required
                />
                <input 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="password" 
                    type="password" 
                    value={password}
                    placeholder="Contraseña"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
