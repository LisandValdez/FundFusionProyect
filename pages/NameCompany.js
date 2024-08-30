// pages/NameCompany.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/NameCompany.module.css';

const NameCompany = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyType, setCompanyType] = useState('');
  const router = useRouter();

  const handleNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleTypeSelect = (type) => {
    setCompanyType(type);
  };

  const handleNextClick = () => {
    if (companyName && companyType) {
      router.push('/nextPage'); // Cambia '/nextPage' a la página que desees
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  const handleBackClick = () => {
    router.back(); // Regresa a la página anterior
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.backButton}
        onClick={handleBackClick}
      >
        Regresar
      </button>

      <h1 className={styles.title}>¿Cómo se llama tu empresa o equipo?</h1>
      
      <input
        type="text"
        placeholder="Nombre del equipo o espacio"
        value={companyName}
        onChange={handleNameChange}
        className={styles.input}
      />

      <div className={styles.buttonContainer}>
        <button
          className={`${styles.typeButton} ${companyType === 'Espacio de trabajo común' ? styles.active : ''}`}
          onClick={() => handleTypeSelect('Espacio de trabajo común')}
        >
          Espacio de trabajo común
        </button>
        
        <button
          className={`${styles.typeButton} ${companyType === 'Empresa' ? styles.active : ''}`}
          onClick={() => handleTypeSelect('Empresa')}
        >
          Empresa
        </button>
      </div>

      <button
        className={styles.nextButton}
        onClick={handleNextClick}
        disabled={!companyName || !companyType}
      >
        Siguiente
      </button>
    </div>
  );
};

export default NameCompany;
