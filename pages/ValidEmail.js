// pages/ValidEmail.js
import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/authContext';

const ValidEmail = () => {
  const auth = useAuth();
  const router = useRouter();

  // Verifica si el usuario está autenticado
  if (!auth.user) {
    // Puedes redirigir a una página de error o mostrar un mensaje adecuado
    return <p>No estás autenticado</p>;
  }

  const { email } = auth.user;

  const handleBackClick = () => {
    router.back(); // Regresa a la página anterior
  };

  const handleNextClick = () => {
    router.push('/paymentCardsPage');
  };

  const handleOpenEmailClick = () => {
    // Intenta abrir la aplicación de correo predeterminada
    window.location.href = `mailto:${email}`;
    // Después, redirige a Outlook.com como una alternativa
    setTimeout(() => {
      window.open('https://outlook.com', '_blank');
    }, 500);
  };

  return (
    <div className="validEmailContainer">
      {/* Botón de regresar, ubicado en la parte superior izquierda */}
      <button className="backButton" onClick={handleBackClick}>
        &lt; Regresar
      </button>

      {/* Contenido central */}
      <div className="emailContent">
        {/* Título */}
        <h1 className="emailTitle">¡REVISA TU CORREO!</h1>

        {/* Subtítulo con el correo */}
        {email && (
          <p className="emailSubtitle">
            Para confirmar tu dirección, toca el botón en el correo que enviamos a <strong>{email}</strong>
          </p>
        )}

        {/* Espacio para las imágenes */}
        <div className="emailImageContainer">
          <img src="/images/plane.png" alt="Avión de papel" className="planeImage" />
          <img src="/images/dotted-line.png" alt="Líneas punteadas" className="dottedLineImage" />
        </div>

        {/* Botones centrados */}
        <button className="openEmailButton" onClick={handleOpenEmailClick}>
          Abrir la aplicación de correo electrónico
        </button>

        <button className="nextButton" onClick={handleNextClick}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ValidEmail;
