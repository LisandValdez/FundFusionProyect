import { useState } from 'react';
import styles from '../styles/LoginRegister.module.css';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/authContext';

const LoginRegister = () => {
  const auth = useAuth();
  const [formMode, setFormMode] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    marketing: false,
  });

  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const router = useRouter();
  const { register, login } = auth;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => {
      const newData = {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isFormComplete) {
        if (formMode === 'register') {
          await register(formData.email, formData.password);
          router.push({
            pathname: '/RegisterUser',
            query: { email: formData.email, username: formData.username },
          });
        } else {
          await login(formData.email, formData.password);
          router.push('/ValidEmail');
        }
      } else {
        console.error("Formulario incompleto.");
      }
    } catch (error) {
      console.error("Error during authentication:", error.message);
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
