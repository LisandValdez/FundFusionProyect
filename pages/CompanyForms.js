import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const CompanyForms = () => {
  const router = useRouter();
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

  useEffect(() => {
    if (router.query) {
      setFormData(router.query);
    }
  }, [router.query]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-indigo-900 flex items-center justify-center">
      <div className="max-w-xl w-full p-8 bg-black bg-opacity-40 rounded-lg shadow-lg relative">
        <button
          className="text-white absolute top-4 left-4"
          onClick={handleBackClick}
        >
          &lt; Regresar
        </button>
        <h2 className="text-white text-center text-2xl font-bold mb-6">DATOS DE LA EMPRESA</h2>
        <form className="space-y-6">
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">Tipo de empresa</label>
            <select className="w-full p-2.5 bg-transparent border border-blue-500 rounded-md text-white">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">Razón social</label>
              <input
                type="text"
                name="legalName"
                value={formData.legalName}
                onChange={handleChange}
                placeholder="Nombre legal de la empresa"
                className="w-full p-2.5 bg-transparent border border-blue-500 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">NIF / CIF / RUT</label>
              <input
                type="text"
                name="taxId"
                value={formData.taxId}
                onChange={handleChange}
                className="w-full p-2.5 bg-transparent border border-blue-500 rounded-md text-white"
                placeholder="00.0000000"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">Industria</label>
              <input
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full p-2.5 bg-transparent border border-blue-500 rounded-md text-white"
                placeholder="Indumentaria"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">Sitio web</label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full p-2.5 bg-transparent border border-blue-500 rounded-md text-white"
                placeholder="www.fundfusions.io"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">Dirección comercial</label>
              <input
                type="text"
                name="businessAddress"
                value={formData.businessAddress}
                onChange={handleChange}
                className="w-full p-2.5 bg-transparent border border-blue-500 rounded-md text-white"
                placeholder="Estados Unidos, Florida"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">Domicilio</label>
              <input
                type="text"
                name="domicile"
                value={formData.domicile}
                onChange={handleChange}
                className="w-full p-2.5 bg-transparent border border-blue-500 rounded-md text-white"
                placeholder="Arrayan"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">Numeración</label>
              <input
                type="text"
                name="addressNumber"
                value={formData.addressNumber}
                onChange={handleChange}
                className="w-full p-2.5 bg-transparent border border-blue-500 rounded-md text-white"
                placeholder="8571"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">Código postal</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full p-2.5 bg-transparent border border-blue-500 rounded-md text-white"
                placeholder="5000"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Siguiente
          </button>
          <p className="text-white text-xs text-center mt-4">
            Al continuar aceptas nuestros <a href="#" className="underline">Acuerdo de servicios principales</a>, <a href="#" className="underline">Condiciones de servicio al usuario</a> y <a href="#" className="underline">Términos complementarios de FundFusion</a>. Más información en <a href="#" className="underline">Política de Privacidad</a> y <a href="#" className="underline">Política de cookies</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default CompanyForms;