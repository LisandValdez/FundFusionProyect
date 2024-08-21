import React from 'react';
import { useRouter } from 'next/router';

export default function PaymentCards() {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/ValidEmail');
  };

  return (
    <>
      <div className="paymentCardsContainer">
        {/* Botón de regresar, ubicado en la parte superior izquierda */}
        <button className="backButton" onClick={handleBackClick}>
          &lt; Regresar
        </button>

        <div className="CardsConteiner">
          <div className="Cards">
            <div className="CardTittle">
              <div><h2>INDIVIDUAL</h2></div>
              <div><h2><span>$5</span></h2></div>
            </div>
            <div className="CardInfo">
              <p>Empieza tu viaje financiero creando tu billetera digital y gestionando tu dinero de forma segura y eficiente.</p>
              <ul>
                <li>Tarjeta de débito común</li>
                <li>Billetera virtual</li>
                <li>Gestión de billetera</li>
                <li>Contactos</li>
                <li>Beneficios semanales</li>
              </ul>
            </div>
            <div>
              <button className="CardButton">Crear mi billetera</button>
            </div>
          </div>

          <div className="Cards">
            <div className="CardTittle">
              <div><h2>MIEMBRO</h2></div>
              <div><h2><span>$10</span></h2></div>
            </div>
            <div className="CardInfo">
              <p>Únete a un espacio de trabajo colaborativo, disfrutando de un entorno dinámico para interactuar y trabajar con otros miembros.</p>
              <ul>
                <li>Espacio de Trabajo</li>
                <li>Nivelacion gamificada</li>
                <li>Todo lo del Plan Individual</li>
              </ul>
            </div>
            <div>
              <button className="CardButton">Ingresar en un espacio de trabajo</button>
            </div>
          </div>

          <div className="Cards">
            <div className="CardTittle">
              <div><h2>EMPRESARIAL</h2></div>
              <div><h2><span>$15</span></h2></div>
            </div>
            <div className="CardInfo">
              <p>Establece tu propio espacio de trabajo, facilitando la colaboración y la gestión de tu equipo con herramientas básicas.</p>
              <ul>
                <li>Todo lo del Plan Miembro</li>
                <li>Creación de espacios de Trabajo</li>
                <li>Unir miembros</li>
              </ul>
            </div>
            <div>
              <button className="CardButton">Crear un espacio de trabajo</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
