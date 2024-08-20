import React from 'react';
import { useRouter } from 'next/router';

const ValidEmail = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/FormsEmail');
  };

  const handleOpenEmailAppClick = () => {
    window.location.href = 'https://outlook.live.com/';
  };

  return (
    <div className="validEmailContainer">
      <button className="backButton" onClick={handleBackClick}>
        &lt; Regresar
      </button>
      <div className="emailContent">
        <h1 className="emailTitle">¡REVISA TU CORREO!</h1>
        <p className="emailSubtitle">
          Para confirmar tu dirección, toca el botón en el correo que enviamos a <strong>usuariousuario2017@gmail.com</strong>
        </p>
        <div className="emailIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="100"
            height="100"
            fill="#48CAE4"
          >
            <path d="M12 0a12 12 0 0 0 0 24 12 12 0 0 0 0-24zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-15h2v7h-2zm1 12a1.5 1.5 0 0 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        </div>
        <button className="openEmailButton" onClick={handleOpenEmailAppClick}>
          Abrir la aplicación de correo electrónico
        </button>
      </div>
    </div>
  );
};

export default ValidEmail;
