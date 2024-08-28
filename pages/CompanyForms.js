import React from 'react';
import { useRouter } from 'next/router'; // Importa useRouter para manejar la navegación
import styles from '../styles/CompanyForms.module.css';

const CompanyForms = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back(); 
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={handleBackClick}>
        &lt; Regresar
      </button>
      <h2 className={styles.title}>DATOS DE LA EMPRESA</h2>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Tipo de empresa</label>
          <select className={styles.input}>
            <option>Seleccionar</option>
            <option>Microempresa</option>
            <option>Pequeña Empresa</option>
            <option>Mediana Empresa</option>
            <option>Gran Empresa</option>
            <option>Empresa Privada</option>
            <option>Empresa Pública</option>
            <option>Empresa Mixta</option>
            <option>Industria</option>
            <option>Comercio</option>
            <option>Servicios</option>
            <option>Tecnología</option>
            <option>Local</option>
            <option>Nacional</option>
            <option>Internacional</option>
            <option>Multinacional</option>
            <option>Sociedad Anónima (SA)</option>
            <option>Sociedad Limitada (SL)</option>
            <option>Empresa Individual</option>
            <option>Cooperativa</option>
            <option>Primario</option>
            <option>Secundario</option>
            <option>Terciario</option>
          </select>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Razón social</label>
            <input type="text" className={styles.input} placeholder="Nombre legal de la empresa" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>NIF / CIF / RUT</label>
            <input type="text" className={styles.input} placeholder="00.0000000" />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Industria</label>
            <input type="text" className={styles.input} placeholder="Indumentaria" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Sitio web</label>
            <input type="text" className={styles.input} placeholder="www.fundfusions.io" />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Dirección comercial</label>
            <input type="text" className={styles.input} placeholder="Estados Unidos, Florida" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Domicilio</label>
            <input type="text" className={styles.input} placeholder="Arrayan" />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Numeración</label>
            <input type="text" className={styles.input} placeholder="8571" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Código postal</label>
            <input type="text" className={styles.input} placeholder="5000" />
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>Siguiente</button>
        <p className={styles.footerText}>
          Al continuar aceptas nuestros <a href="#">Acuerdo de servicios principales</a>, <a href="#">Condiciones de servicio al usuario</a> y <a href="#">Términos complementarios de FundFusion</a>. Más información en <a href="#">Política de Privacidad</a> y <a href="#">Política de cookies</a>.
        </p>
      </form>
    </div>
  );
};

export default CompanyForms;
