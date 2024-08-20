import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function FormsEmail() {
    const router = useRouter();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handlePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push('/ValidEmail'); 
    };

    return (
        <div className="formDiv">
            <div className="formSideLeft">
                <div className="logoContainer">
                    <img src="/images/logo.png" alt="FundFusion Logo" className="formLogo" />
                </div>
            </div>
            <div className="formSideRight">
                <form onSubmit={handleSubmit} className="formContainer">
                    <h1 className="formTitle">Ingresar a Fund Fusion</h1>
                    <p className="formSubtitle">Te enviaremos un correo con el que te conectarás al instante.</p>
                    
                    <input type="email" placeholder="Correo electrónico" required />
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

                    <button type="submit" className="formButton">Siguiente</button>
                </form>
            </div>
        </div>
    );
}
