// pages/RegisterUser.js
import { useState } from 'react';
import styles from '../styles/RegisterUser.module.css';
import { useRouter } from 'next/router';

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    idNumber: '',
    phoneNumber: '',
    nationality: '',
    city: '',
    address: '',
    addressNumber: '',
  });

  const [isValid, setIsValid] = useState(true); // Estado para controlar si el formulario está completo
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar si todos los campos están llenos
    const isFormComplete = Object.values(formData).every((field) => field.trim() !== '');
    setIsValid(isFormComplete);

    if (isFormComplete) {
      router.push('/ValidEmail');
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => router.back()}>
        &lt; Regresar
      </button>
      <h1 className={styles.title}>Registro de Usuario</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Nombre completo"
          className={styles.input}
        />
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          placeholder="Fecha de nacimiento"
          className={styles.input}
        />
        <input
          type="text"
          name="idNumber"
          value={formData.idNumber}
          onChange={handleChange}
          placeholder="DNI o pasaporte"
          className={styles.input}
        />
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Número de teléfono"
          className={styles.input}
        />
        <input
          type="text"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          placeholder="Nacionalidad"
          className={styles.input}
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Ciudad"
          className={styles.input}
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Domicilio"
          className={styles.input}
        />
        <input
          type="text"
          name="addressNumber"
          value={formData.addressNumber}
          onChange={handleChange}
          placeholder="Numeración"
          className={styles.input}
        />
        <button
          type="submit"
          className={styles.nextButton}
          disabled={!Object.values(formData).every((field) => field.trim() !== '')}
        >
          Siguiente
        </button>
      </form>
    </div>
  );
};

export default RegisterUser;
