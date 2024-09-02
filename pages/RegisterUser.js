// pages/RegisterUser.js
import { useState, useEffect } from 'react';
import styles from '../styles/RegisterUser.module.css';
import { useRouter } from 'next/router'; // Asegúrate de que la función esté exportada correctamente
import { saveUserToFirestore } from './api/user';

const RegisterUser = () => {
  const router = useRouter();
  const { email, username } = router.query;

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

  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    console.log("Router Query:", router.query);
    setFormData(prevData => ({
      ...prevData,
      email: email || '',
      username: username || ''
    }));
  }, [email, username]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked");
    const isFormComplete = Object.values(formData).every((field) => field.trim() !== '');
    setIsValid(isFormComplete);
  
    if (isFormComplete) {
      try {
        console.log("Saving user data to Firestore");
        await saveUserToFirestore(formData);
        console.log("Redirecting to ValidEmail");
        router.push('/ValidEmail');
      } catch (error) {
        console.error("Error al guardar los datos del usuario: ", error.message);
      }
    } else {
      console.log("Form is not complete");
    }
  };
  console.log("Form Data:", formData);
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
    onClick={() => handleSubmit({ preventDefault: () => {} })}  // Llama a handleSubmit manualmente
>
    Siguiente
</button>
      </form>
    </div>
  );
};

export default RegisterUser;
