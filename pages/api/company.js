import { db } from "@/firebase/credenciales";
import { collection, addDoc } from "firebase/firestore";

async function saveCompanyToFirestore(company) {
  try {
    const companiesCollectionRef = collection(db, "companies");
    const docRef = await addDoc(companiesCollectionRef, company);
    console.log("Empresa registrada con ID: ", docRef.id);
  } catch (e) {
    console.error("Error añadiendo la empresa: ", e);
  }
}


/* import React, { useState } from "react";
import { saveCompanyToFirestore } from "./firebaseService"; // Importa la función adecuada

function CompanyForm() {
  const [company, setCompany] = useState({
    workspaceName: "",
    companyType: "",
    legalName: "",
    taxId: "",
    industry: "",
    website: "",
    businessAddress: "",
    domicile: "",
    addressNumber: "",
    postalCode: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany({
      ...company,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveCompanyToFirestore(company);
      alert("Empresa guardada con éxito");
    } catch (error) {
      console.error("Error guardando la empresa: ", error);
      alert("Hubo un error guardando la empresa.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      { Aquí agregarías inputs para cada campo }
    </form>
  );
}

export default CompanyForm;
 */