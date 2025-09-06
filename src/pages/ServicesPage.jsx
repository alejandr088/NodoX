import Navbar from '../components/Navbar'
import services from '../data/services'
import { Helmet } from 'react-helmet'

export default function ServicesPage() {
  const phone = "+59891741147";

  // Función para generar mensaje de WhatsApp para servicios
  const generateServiceMessage = (service) => {
    let messageParts = [
      "¡Hola NodoX! Estoy interesado en el siguiente servicio:",
      "",
      `*${service.title}*`,
      `${service.description}`,
      "",
      "Por favor, necesito:",
      "1. Información sobre disponibilidad",
      "2. Precio del servicio",
      "3. Tiempo estimado de realización",
      "4. Formas de pago aceptadas",
      "",
      "¡Gracias!"
    ]

    return encodeURIComponent(messageParts.join('\n'));
  };

  // Definimos los beneficios para cada tipo de servicio basado en palabras clave
  const getServiceBenefits = (service) => {
    if (service.title.includes('Reparación') || service.description.includes('hardware')) {
      return [
        "Diagnóstico gratuito*",
        "Repuestos originales",
        "Servicio express disponible"
      ];
    }
    if (service.title.includes('Recuperación') || service.description.includes('datos')) {
      return [
        "Confidencialidad garantizada",
        "Soporte post-recuperación"
      ];
    }
    if (service.title.includes('Soporte técnico') || service.description.includes('asistencia')) {
      return [
        "Respuesta en menos de 2 horas",
        "Técnicos certificados",
        "Seguimiento post-solución"
      ];
    }
    // Beneficios por defecto para otros servicios
    return [
      "Garantía de satisfacción",
      "Profesionales certificados",
      "Soporte continuo"
    ];
  };

  const serviceCategories = [
    {
      name: "Reparaciones",
      icon: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" aria-hidden="true" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      name: "Software",
      icon: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" aria-hidden="true" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      name: "Hardware",
      icon: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" aria-hidden="true" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    }
  ]

  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 font-sans overflow-hidden">
      <Helmet>
        <title>Servicios | NodoX</title>
        <meta name="description" content="Servicios técnicos profesionales en reparaciones, software y hardware en NodoX." />
        <meta property="og:title" content="Servicios | NodoX" />
        <meta property="og:description" content="Servicios técnicos profesionales en reparaciones, software y hardware en NodoX." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Imagen de fondo (cambia según tema) */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed z-0 transition-all duration-700
                   bg-[url('/services-light.jpg')] dark:bg-[url('/services-dark.jpg')]"
      />

      {/* Overlay para mejorar contraste */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/50 z-0"></div>

      {/* Contenido */}
      <div className="relative z-10">
        <Navbar />
        <main className="max-w-6xl mx-auto pt-24 pb-20 px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Nuestros <span className="text-red-500">Servicios</span>
            </h1>
            <p className="text-xl text-gray-100 dark:text-gray-300 max-w-3xl mx-auto">
              Soluciones técnicas profesionales para todas tus necesidades tecnológicas
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2">{category.name}</h3>
                <p className="text-gray-700 dark:text-gray-400 text-center">
                  Servicios especializados en {category.name.toLowerCase()}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map(service => {
              const benefits = getServiceBenefits(service);
              const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, "")}?text=${generateServiceMessage(service)}`;
              
              return (
                <div
                  key={service.id}
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200/50 dark:border-gray-700/50"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{service.description}</p>

                  <div className="bg-gray-100/80 dark:bg-gray-700/80 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Beneficios
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-gray-800 dark:text-gray-300">
                          <svg className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.373 0 .002 5.373.002 12a11.8 11.8 0 001.988 6.156L0 24l5.997-2.006A11.92 11.92 0 0012 24c6.627 0 12-5.373 12-12 0-3.214-1.254-6.227-3.48-8.52zM12 22.045a9.98 9.98 0 01-5.147-1.468l-.368-.218-3.563 1.19 1.201-3.474-.237-.361A9.973 9.973 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.471-7.893c-.257-.128-1.521-.752-1.756-.837-.235-.086-.406-.128-.577.128s-.661.837-.812 1.009c-.15.174-.301.195-.558.065-.257-.13-1.086-.4-2.07-1.274-.765-.682-1.280-1.526-1.43-1.783-.15-.257-.016-.396.114-.523.118-.117.257-.303.386-.454.13-.15.173-.257.26-.43.086-.174.043-.326-.022-.454-.065-.128-.577-1.39-.79-1.898-.207-.495-.417-.428-.577-.437l-.492-.008c-.174 0-.454.065-.692.326-.235.257-.89.87-.89 2.12 0 1.247.91 2.453 1.037 2.62.13.174 1.79 2.737 4.33 3.838.605.26 1.076.415 1.444.53.607.19 1.16.164 1.598.1.487-.07 1.52-.62 1.732-1.218.217-.6.217-1.114.152-1.218-.065-.104-.235-.17-.492-.298z"/>
                    </svg>
                    Solicitar servicio
                  </a>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  )
}