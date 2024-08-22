import React, { useState, createContext, useContext } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/authContext';


export default function FormsEmail() {
    const auth = useAuth()
    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    
    const [passwordVisible, setPasswordVisible] = useState(false);
    const handlePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const router = useRouter();
    const handleRegister = (e) => {
        e.preventDefault();
        auth.register(emailRegister, passwordRegister)
        router.push('/ValidEmail');
    };
    const handleBackClick = () => {
        router.push('/Login');
    };

    return (
        <div className="formDiv">
            {/* Botón de regresar, ubicado en la parte superior izquierda */}
            <button className="backButton" onClick={handleBackClick}>
                &lt; Regresar
            </button>

            <div className="formSideLeft">
                <div className="logoContainer">
                    <img src="/images/logo.png" alt="FundFusion Logo" className="formLogo" />
                </div>
            </div>
            <div className="formSideRight">
                <form className="formContainer">
                    <h1 className="formTitle">Ingresar a Fund Fusion</h1>
                    <p className="formSubtitle">Te enviaremos un correo con el que te conectarás al instante.</p>
                    
                    <input type="email" name="email" placeholder="Correo electrónico" 
                        onChange={(e)=> setEmailRegister(e.target.value)} required />
                    <input type="text" placeholder="Nombre" required />
                    <input type="text" placeholder="Apellido" required />
                    <input type="tel" placeholder="Teléfono" />
                    <input type="text" placeholder="País" />
                    <input type="text" placeholder="Dirección" />

                    <div className="passwordContainer">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Contraseña"
                            className="passwordInput"
                            onChange={(e)=> setPasswordRegister(e.target.value)}
                            required
                        />
                        <span
                            className="togglePasswordVisibility"
                            onClick={handlePasswordVisibility}
                        >
                            {passwordVisible ? '🙈' : '👁️'}
                        </span>
                    </div>

                    <div className="formCheckbox">
                        <input type="checkbox" id="marketing" />
                        <label htmlFor="marketing">Quiero recibir mensajes de marketing acerca de FundFusion.</label>
                    </div>

                    <button type="submit" className="formButton" onClick={(e)=>handleRegister(e)}>Siguiente</button>
                </form>
            </div>
        </div>
    );
}
