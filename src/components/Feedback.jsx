export default function Feedback() {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      comment: "Excelente servicio técnico, repararon mi notebook en menos de 24 horas. Muy profesionales!",
      rating: 5
    },
    {
      id: 2,
      name: "Ana Martínez",
      comment: "Compré una PC gamer y superó mis expectativas. El asesoramiento fue impecable.",
      rating: 5
    },
    {
      id: 3,
      name: "Juan Pérez",
      comment: "Buena relación precio-calidad en sus productos recertificados. Volveré a comprar.",
      rating: 4
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <section className="max-w-4xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Opiniones de Clientes</h2>
        <div className="space-y-6">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="ml-2 font-semibold">{testimonial.name}</span>
              </div>
              <p className="text-gray-700 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}