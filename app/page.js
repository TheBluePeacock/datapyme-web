import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Encabezado */}
      <header className="bg-gray-100 p-6 shadow-md">
        <h1 className="text-3xl font-bold">The Blue Peacock</h1>
        <p className="text-md text-gray-600">
          Soluciones de análisis y automatización para pequeñas empresas
        </p>
      </header>

      {/* Sección de Servicios */}
      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Servicios</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">Analítica de Datos</h3>
            <p className="text-sm text-gray-700">
              Dashboards y reportes personalizados para tomar mejores decisiones.
            </p>
          </div>

          <div className="p-4 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">Bases de Datos On-Premise</h3>
            <p className="text-sm text-gray-700">
              Diseño e implementación de bases de datos locales seguras.
            </p>
          </div>

          <div className="p-4 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">Automatización con Excel</h3>
            <p className="text-sm text-gray-700">
              Plantillas inteligentes que reducen errores y ahorran tiempo.
            </p>
          </div>

          <div className="p-4 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">Cuadros de Mando</h3>
            <p className="text-sm text-gray-700">
              Visualiza KPIs clave en dashboards interactivos.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section className="p-8 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Sobre mí</h2>
        <p className="text-gray-700 max-w-2xl">
          Especialista en datos, ayudando a pymes a automatizar procesos y entender mejor su negocio.
        </p>
      </section>

      {/* Contacto */}
      {/* Sección de contacto */}
<section className="p-8 bg-gray-100">
  <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
  <p className="text-gray-700 mb-4">¿Te interesa trabajar conmigo? Rellena el siguiente formulario:</p>
  <form
    action="https://formspree.io/f/xwpqklvo"
    method="POST"
    className="space-y-4 max-w-xl"
  >
    <input
      type="text"
      name="name"
      placeholder="Tu nombre"
      required
      className="w-full p-2 border rounded"
    />
    <input
      type="email"
      name="email"
      placeholder="Tu correo"
      required
      className="w-full p-2 border rounded"
    />
    <textarea
      name="message"
      placeholder="Tu mensaje"
      required
      className="w-full p-2 border rounded h-32"
    />
    <button
      type="submit"
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Enviar mensaje
    </button>
  </form>
</section>


      {/* Pie de página */}
      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-500">
        © {new Date().getFullYear()} DataPyme. Todos los derechos reservados.
      </footer>
    </div>
  );
}
