import BackButton from './BackButton'

export default function Feedback() {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      comment: "Excelente servicio técnico, repararon mi notebook en menos de 24 horas. Muy profesionales!",
      rating: 5,
      date: "15/06/2025"
    },
    {
      id: 2,
      name: "Ana Martínez",
      comment: "Compré una PC gamer y superó mis expectativas. El asesoramiento fue impecable.",
      rating: 5,
      date: "22/05/2025"
    },
    {
      id: 3,
      name: "Juan Pérez",
      comment: "Buena relación precio-calidad en sus productos recertificados. Volveré a comprar.",
      rating: 4,
      date: "08/07/2025"
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <BackButton />
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-4">
            Opiniones de Clientes
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Lo que dicen nuestros clientes sobre nosotros
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="card p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.date}</p>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : 'fill-gray-300 dark:fill-gray-600'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.comment}"</p>
              
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center">
                <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Compra verificada</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}