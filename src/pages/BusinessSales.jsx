import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"

export default function BusinessSales() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes enviar formData a una API o correo
    setSubmitted(true)
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans relative">
      <Helmet>
        <title>Ventas para Empresas | NodoX</title>
        <meta
          name="description"
          content="Contacta con NodoX para compras por volumen y atención exclusiva para empresas."
        />
        <meta property="og:title" content="Ventas para Empresas | NodoX" />
        <meta
          property="og:description"
          content="Contacta con NodoX para compras por volumen y atención exclusiva para empresas."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />

      <main className="max-w-5xl mx-auto pt-24 px-6 pb-12">

        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="text-red-500">Zona Empresas</span> - Ventas por volumen
        </h1>

        <section className="mb-12 text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            En NodoX ofrecemos atención exclusiva para compras por volumen y empresas que necesiten equipos,
            accesorios y servicios tecnológicos personalizados.
          </p>
          <p>
            Contamos con planes especiales, asesoramiento técnico dedicado y condiciones comerciales adaptadas a tus
            necesidades.
          </p>
          <p>
            Completa el formulario para que uno de nuestros especialistas te contacte y juntos encontremos la mejor
            solución para tu empresa.
          </p>
        </section>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-lg max-w-3xl mx-auto"
            aria-label="Formulario de contacto para ventas empresariales"
          >
            <div className="mb-4">
              <label htmlFor="companyName" className="block font-semibold mb-1">
                Nombre de la Empresa <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="input-field w-full"
                placeholder="Ejemplo: Soluciones SA"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="contactName" className="block font-semibold mb-1">
                Nombre de Contacto <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                required
                className="input-field w-full"
                placeholder="Ejemplo: Juan Pérez"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field w-full"
                placeholder="ejemplo@empresa.com"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block font-semibold mb-1">
                Teléfono / WhatsApp
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field w-full"
                placeholder="+598 99 123 456"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block font-semibold mb-1">
                Comentarios o requerimientos
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="input-field w-full"
                placeholder="Dinos qué tipo de productos o servicios buscas..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Enviar Solicitud
            </button>
          </form>
        ) : (
          <div className="max-w-xl mx-auto bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-800 dark:text-green-200 rounded-lg p-6 text-center shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Gracias por contactarnos</h2>
            <p>Un especialista de NodoX se comunicará contigo a la brevedad para brindarte asesoramiento personalizado.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
