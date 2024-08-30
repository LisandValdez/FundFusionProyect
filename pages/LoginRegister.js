// pages/LoginRegister.js
import { useState } from 'react';
import styles from '../styles/LoginRegister.module.css';
import { useRouter } from 'next/router';

const LoginRegister = () => {
  const [formMode, setFormMode] = useState('login'); // Estado para determinar si se muestra el formulario de registro o de inicio de sesión
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    marketing: false,
  });

  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [isFormComplete, setIsFormComplete] = useState(false); // Estado para controlar si el formulario está completo
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => {
      const newData = {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      };

      // Verificar si el formulario está completo
      if (formMode === 'register') {
        setIsFormComplete(
          newData.email &&
          newData.username &&
          newData.password &&
          newData.confirmPassword &&
          newData.password === newData.confirmPassword
        );
      } else {
        setIsFormComplete(newData.email && newData.password);
      }

      if (name === 'password' || name === 'confirmPassword') {
        setIsPasswordMatch(newData.password === newData.confirmPassword);
      }

      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirigir según el formulario completado
    if (isFormComplete) {
      if (formMode === 'register') {
        router.push('/RegisterUser'); // Redirige a RegisterUser para el formulario de registro
      } else {
        router.push('/ValidEmail'); // Redirige a ValidEmail para el formulario de inicio de sesión
      }
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => router.back()}>
        Regresar
      </button>
      
      <div className={styles.buttonGroup}>
        <button
          className={`${styles.switchButton} ${formMode === 'register' ? styles.active : ''}`}
          onClick={() => setFormMode('register')}
        >
          Registro
        </button>
        <button
          className={`${styles.switchButton} ${formMode === 'login' ? styles.active : ''}`}
          onClick={() => setFormMode('login')}
        >
          Login
        </button>
      </div>

      {formMode === 'register' ? (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo"
            className={styles.input}
          />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Nombre de usuario"
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Contraseña"
            className={styles.input}
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Repetir contraseña"
            className={styles.input}
          />
          {!isPasswordMatch && (
            <p className={styles.error}>Las contraseñas no coinciden</p>
          )}
          <label className={styles.checkboxContainer}>
            <input
              type="checkbox"
              name="marketing"
              checked={formData.marketing}
              onChange={handleChange}
            />
            <span className={styles.checkmark}></span>
            Quiero recibir mensajes de marketing acerca de FundFusion. Puedo cancelar mi suscripción en cualquier momento.
          </label>
          <button
            type="submit"
            className={styles.nextButton}
            disabled={!isFormComplete}
          >
            Siguiente
          </button>
        </form>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo electrónico o Usuario"
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Contraseña"
            className={styles.input}
          />
          <button
            type="submit"
            className={styles.nextButton}
            disabled={!isFormComplete}
          >
            Iniciar sesión
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginRegister;
