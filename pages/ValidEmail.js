import React from 'react';
import { useRouter } from 'next/router';
import { AuthProvider, useAuth } from '@/context/authContext';

const ValidEmail = () => {
  const auth = useAuth();
  const {email} = auth.user
  const router = useRouter();
  const handleBackClick = () => {
    router.push('/FormsEmail');
  };

  const handleNextClick = () => {
    router.push('/paymentCardsPage');
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
        {email && <p className="emailSubtitle">Para confirmar tu dirección, toca el botón en el correo que enviamos a <strong>{email}</strong></p>}

        {/* Espacio para las imágenes */}
        <div className="emailImageContainer">
          <img src="/images/plane.png" alt="Avión de papel" className="planeImage" />
          <img src="/images/dotted-line.png" alt="Líneas punteadas" className="dottedLineImage" />
        </div>

        {/* Botones centrados */}
        <button className="openEmailButton">
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
