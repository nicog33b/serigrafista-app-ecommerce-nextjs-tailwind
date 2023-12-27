import React, { useState } from "react";
import validator from 'validator';  // Importar validator.js
import Swal from 'sweetalert2'
import { AiOutlineClose } from "react-icons/ai";

const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nombre: "",
    apellido: "",
    telefono: "", // Agregado el campo para el número de teléfono
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validación para permitir solo letras en Nombre y Apellido
    if (name === "nombre" || name === "apellido") {
      const onlyLetters = value.replace(/[^A-Za-z]/g, "");
      setFormData((prevData) => ({ ...prevData, [name]: onlyLetters }));
    }
    // Validación para permitir solo números en Teléfono
    else if (name === "telefono") {
      const onlyNumbers = value.replace(/[^0-9]/g, "");
      setFormData((prevData) => ({ ...prevData, [name]: onlyNumbers }));
    }
    // Validación para la longitud de la contraseña
    else if (name === "password" && value.length > 6) {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
    // Para otros campos
    else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };
  
  
  const handleRegistration = async (e) => {
    e.preventDefault();
  
    try {


      // Verificaciones
      if (
        formData.nombre.trim() === "" ||
        formData.apellido.trim() === "" ||
        formData.email.trim() === "" ||
        formData.telefono.trim() === "" ||
        formData.password.trim() === "" ||
        formData.confirmPassword.trim() === ""
      ) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Todos los campos son obligatorios.",
        });
        return;
      }

        // Verificación de disponibilidad del correo electrónico
    const emailAvailabilityResponse = await fetch(`http://localhost:3000/auth/check-email?email=${formData.email}`);
    const { available } = await emailAvailabilityResponse.json();

    if (!available) {
      // Mostrar SweetAlert indicando que el correo electrónico ya está en uso
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El correo electrónico ya está en uso. Por favor, elige otro.",
      });
      return;
    }

  
      // Verificación de la longitud de la contraseña
      if (formData.password.length <= 5) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "La contraseña debe tener más de 6 caracteres.",
        });
        return;
      }
  
      // Verificación de coincidencia de la contraseña y confirmación
      if (formData.password !== formData.confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "La contraseña y la confirmación no coinciden.",
        });
        return;
      }
            // Validar email utilizando validator.js
            if (!validator.isEmail(formData.email)) {
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "Ingresa un correo electrónico válido.",
              });
              return;
            }

     
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          nombre: formData.nombre,
          apellido: formData.apellido,
          telefono: formData.telefono,
        }),
      });

      if (response.ok) {
           // Mostrar SweetAlert de éxito
      Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'Usuario creado exitosamente.',
      });

      // Limpiar formulario después del registro exitoso
      setFormData({
        email: "",
        password: "",
        confirmPassword:"",
        nombre: "",
        apellido: "",
        telefono: "",
      });

      onClose(); // Cerrar el modal después del regis
      } else {
        // Handle error, e.g., display an error message
        console.error("Error creating user:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  if (!isOpen) return null;

  
  return (
    <div className="fixed inset-0 overflow-y-auto" style={{ zIndex: 25 }}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="flex justify-end pr-4 pt-2">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close"
            >
              <AiOutlineClose className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-left sm:mt-0 sm:ml-4 sm:w-full">
                <img
                  className="mx-auto h-[6rem] w-auto"
                  src="/mutagenoLogoT.jpg"
                  alt="logo"
                />
                <h6 className="text-lg leading-6 font-medium text-gray-900 text-center">
                  Registro de usuario
                </h6>

                <form className="mt-6 space-y-6" onSubmit={handleRegistration} noValidate>
                <div className="grid grid-cols-2 gap-2">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            name="nombre"
            type="text"
            autoComplete="given-name"
            required
            value={formData.nombre}
            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">
            Apellido
          </label>
          <input
            name="apellido"
            type="text"
            autoComplete="family-name"
            required
            value={formData.apellido}
            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div className="mt-1">
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
          Teléfono
        </label>
        <div className="mt-1">
          <input
            name="telefono"
            type="tel"
            autoComplete="tel"
            required
            value={formData.telefono}
            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
            onChange={handleInputChange}
          />
        </div>
      </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contraseña
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirmar Contraseña
                    </label>
                    <div className="mt-1">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="new-password"
                        required
                        className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                    >
                      Registrarse
                    </button>
                  </div>
                </form>

                <p className="mt-4 text-sm text-gray-500">
                  ¿Ya tienes cuenta?{" "}
                  <span className="text-green-600">
                    {" "}
                    <a onClick={onClose} className="cursor-pointer">
                      {" "}
                      Inicia sesión{" "}
                    </a>{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;