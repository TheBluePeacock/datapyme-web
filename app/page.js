'use client';

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: ''
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('Enviando...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        setMensaje('¡Formulario enviado correctamente!');
        setFormData({ nombre: '', apellidos: '', email: '', telefono: '' });
      } else {
        setMensaje(data.message || 'Error al enviar.');
      }
    } catch (error) {
      console.error(error);
      setMensaje('Error de red.');
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Encabezado */}
      <header className="bg-gray-100 p-6 shadow-md">
        <h1 className="text-3xl font-bold">DataPyme</h1>
        <p className="text-md text-gray-600">Soluciones de análisis y automatización para pequeñas empresas</p>
      </header>

      {/* Sección de Servicios */}
      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Servicios</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Analítica de Datos</h3>
              <p className="text-sm text-gray-700">
                Te ayudamos a convertir tus datos en decisiones con dashboards y reportes personalizados.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Bases de Datos On-Premise</h3>
              <p className="text-sm text-gray-700">
                Diseño e implementación de bases de datos seguras en tus propios servidores.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Automatización con Excel</h3>
              <p className="text-sm text-gray-700">
                Plantillas inteligentes que reducen errores y ahorran tiempo a tu equipo.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Cuadros de Mando</h3>
              <p className="text-sm text-gray-700">
                Visualiza KPIs clave en dashboards interactivos para tomar mejores decisiones.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sobre mí */}
      <section className="p-8 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Sobre mí</h2>
        <p className="text-gray-700 max-w-2xl">
          Soy especialista en datos con experiencia ayudando a pequeñas empresas a aprovechar sus procesos y datos. Desde el diseño de bases de datos hasta la automatización con herramientas como Excel y Power BI.
        </p>
      </section>

      {/* Formulario de Contacto */}
      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
        <form onSubmit={handleSubmit} className="grid gap-4 max-w-md">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="border p-2"
          />
          <input
            type="text"
            name="apellidos"
            placeholder="Apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            required
            className="border p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            className="border p-2"
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono (opcional)"
            value={formData.telefono}
            onChange={handleChange}
            className="border p-2"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Enviar
          </button>
          {mensaje && <p>{mensaje}</p>}
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-500">
        © {new Date().getFullYear()} DataPyme. Todos los derechos reservados.
      </footer>
    </div>
  );
}
