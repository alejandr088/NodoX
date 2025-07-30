import BackButton from './BackButton'
import services from '../data/services'

export default function ServicesPage() {
  const serviceCategories = [
    {
      name: "Reparaciones",
      icon: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      name: "Software",
      icon: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      name: "Hardware",
      icon: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    }
  ]

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <BackButton className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400" />
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestros <span className="text-red-500">Servicios</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Soluciones técnicas profesionales para todas tus necesidades tecnológicas
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {serviceCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
            >
              <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2">{category.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Servicios especializados en {category.name.toLowerCase()}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <div 
              key={service.id} 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Beneficios
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Garantía de 30 días</span>
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Técnicos certificados</span>
                  </li>
                </ul>
              </div>
              
              <button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Solicitar servicio
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}