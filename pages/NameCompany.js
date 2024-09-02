import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/NameCompany.module.css';

const NameCompany = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyType: '',
    legalName: '',
    taxId: '',
    industry: '',
    website: '',
    businessAddress: '',
    domicile: '',
    addressNumber: '',
    postalCode: '',
    description: ''
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleTypeSelect = (type) => {
    setFormData(prevData => ({
      ...prevData,
      companyType: type
    }));
  };

  const handleNextClick = () => {
    if (formData.companyName && formData.companyType) {
      router.push({
        pathname: '/CompanyForms',
        query: { ...formData }
      });
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={handleBackClick}>
        Regresar
      </button>
      <h1 className={styles.title}>¿Cómo se llama tu empresa o equipo?</h1>
      <input
        type="text"
        name="companyName"
        placeholder="Nombre del equipo o espacio"
        value={formData.companyName}
        onChange={handleChange}
        className={styles.input}
      />
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.typeButton} ${formData.companyType === 'Espacio de trabajo común' ? styles.active : ''}`}
          onClick={() => handleTypeSelect('Espacio de trabajo común')}
        >
          Espacio de trabajo común
        </button>
        <button
          className={`${styles.typeButton} ${formData.companyType === 'Empresa' ? styles.active : ''}`}
          onClick={() => handleTypeSelect('Empresa')}
        >
          Empresa
        </button>
      </div>
      <button
        className={styles.nextButton}
        onClick={handleNextClick}
        disabled={!formData.companyName || !formData.companyType}
      >
        Siguiente
      </button>
    </div>
  );
};

export default NameCompany;