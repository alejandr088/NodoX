import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TeamMember from './TeamMember'
import { Helmet } from 'react-helmet'

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "Alejandro Rivello",
      role: "Programación, Marketing, Soporte, Armados, Product Manager",
      bio: "Responsable de programación, marketing, soporte y armado de sistemas en NodoX.",
      image: "/team/alejandro.jpg"
    },
    // {
    //   name: "Pablo Gonzalez",
    //   role: "Diseño Web, Diseño Gráfico",
    //   bio: "Especialista en diseño web y gráfico para proyectos NodoX.",
    //   image: "/team/pablo.jpg"
    // },
    // {
    //   name: "Guillermo Quevedo",
    //   role: "Programación, Soporte, Marketing",
    //   bio: "Encargado de áreas de programación, soporte y marketing para NodoX.",
    //   image: "/team/guillermo.jpg"
    // },
    {
      name: "Esteban Fresno",
      role: "Soporte, Hardware, Presupuestos, Atención al Cliente, Community Manager",
      bio: "Especialista en soporte, hardware, presupuestos y atención al cliente.",
      image: "/team/esteban.jpg"
    }
  ]

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 font-sans relative">
      <Helmet>
        <title>Sobre Nosotros | NodoX</title>
        <meta name="description" content="Conoce más sobre NodoX, nuestro equipo y nuestra misión en tecnología y servicios técnicos." />
        <meta property="og:title" content="Sobre Nosotros | NodoX" />
        <meta property="og:description" content="Conoce más sobre NodoX, nuestro equipo y nuestra misión en tecnología y servicios técnicos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />
      <main className="max-w-6xl mx-auto pt-24 pb-20 px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent dark:from-red-400 dark:to-red-300">
              Sobre NodoX
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Pasión por la tecnología y compromiso con nuestros clientes
          </p>
        </div>

        {/* Nuestra Historia */}
        <div className="card mb-16 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Nuestra <span className="text-red-500">Historia</span>
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                En 2025, dos amigos apasionados por la tecnología nos unimos con un objetivo común: crear <strong className="text-red-500">NodoX</strong>, una empresa que combine conocimiento técnico con un servicio humano y cercano.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Lo que comenzó como un pequeño taller de reparaciones hoy busca ser un referente en Montevideo, gracias a nuestro enfoque en <strong>calidad, transparencia y atención personalizada</strong>.
              </p>
              <div className="bg-red-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-red-500">
                <p className="italic text-gray-700 dark:text-gray-300">
                  "Creemos que la tecnología debe ser accesible, confiable y acompañada por personas que realmente se preocupen por sus clientes."
                </p>
              </div>
            </div>
            {/* <div className="md:w-1/2">
              <img
                src="/team/group-photo.jpg"
                alt="Equipo NodoX"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
                loading="lazy"
              />
            </div> */}
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="card p-8 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg shadow-md">
            <div className="bg-white/10 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
            <p className="mb-4">
              Proveer soluciones tecnológicas integrales con los más altos estándares de calidad, combinando productos confiables y servicios técnicos especializados.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-200 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Excelencia técnica certificada</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-200 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Transparencia en cada proceso</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-red-200 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Soporte post-venta permanente</span>
              </li>
            </ul>
          </div>

          <div className="card p-8 bg-gray-900 text-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="bg-white/10 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
            <p className="mb-4">
              Ser reconocidos como el referente tecnológico en Uruguay, innovando constantemente para democratizar el acceso a tecnología de calidad.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Expandirnos a 3 nuevas sucursales para 2027</span>
              </li>
              {/* <li className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Certificación ISO 9001 para 2026</span>
              </li> */}
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Crecer en el mercado nacional</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Nuestro Equipo
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Conoce al <span className="text-red-500">Equipo</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Los profesionales que hacen posible nuestra excelencia
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  )
}
