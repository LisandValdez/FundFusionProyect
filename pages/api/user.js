import { db } from "@/firebase/credenciales";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";

export async function saveUserToFirestore(user) {
  try {
    // Usa el correo electrónico del usuario como ID del documento
    const userDocRef = doc(db, "users", user.email); // O usa user.uid si prefieres
    
    // Verifica si el documento ya existe
    const userDoc = await getDoc(userDocRef);
    
    if (userDoc.exists()) {
      console.log("El usuario ya existe en la base de datos. Actualizando datos si es necesario.");
      // Aquí puedes actualizar campos específicos si es necesario
      await setDoc(userDocRef, user, { merge: true });
    } else {
      console.log("El usuario no existe en la base de datos. Creando un nuevo documento.");
      // Crea un nuevo documento
      await setDoc(userDocRef, user);
    }
    
    console.log("Operación completada para el usuario con ID: ", user.email); // O usa user.uid si prefieres
  } catch (e) {
    console.error("Error añadiendo o actualizando el documento: ", e);
  }
}

/* import React, { useState } from "react";
import { saveUserToFirestore } from "./firebaseService"; // Importa tu función para guardar en Firestore

function UserForm() {
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    idDocument: "",
    city: "",
    address: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveUserToFirestore(user);
      alert("Usuario guardado con éxito");
    } catch (error) {
      console.error("Error guardando el usuario: ", error);
      alert("Hubo un error guardando el usuario.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Correo" value={user.email} onChange={handleChange} required />
      <input type="text" name="firstName" placeholder="Nombre" value={user.firstName} onChange={handleChange} required />
      <input type="text" name="lastName" placeholder="Apellido" value={user.lastName} onChange={handleChange} required />
      <input type="text" name="username" placeholder="Nombre de Usuario" value={user.username} onChange={handleChange} required />
      <input type="text" name="nationality" placeholder="Nacionalidad" value={user.nationality} onChange={handleChange} required />
      <input type="text" name="idDocument" placeholder="DNI o Pasaporte" value={user.idDocument} onChange={handleChange} required />
      <input type="text" name="city" placeholder="Ciudad" value={user.city} onChange={handleChange} required />
      <input type="text" name="address" placeholder="Dirección" value={user.address} onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Teléfono" value={user.phone} onChange={handleChange} required />
      <button type="submit">Guardar Usuario</button>
    </form>
  );
}

export default UserForm; */