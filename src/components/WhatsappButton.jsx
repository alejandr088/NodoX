export default function WhatsappButton() {
  const phone = "+59891741147"
  const message = encodeURIComponent("Hola, quiero hacer una consulta con NodoX.")
  const url = `https://wa.me/${phone.replace(/\D/g, "")}?text=${message}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar vía WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors flex items-center justify-center"
      title="Contactar vía WhatsApp"
    >
      <svg
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.373 0 .002 5.373.002 12a11.8 11.8 0 001.988 6.156L0 24l5.997-2.006A11.92 11.92 0 0012 24c6.627 0 12-5.373 12-12 0-3.214-1.254-6.227-3.48-8.52zM12 22.045a9.98 9.98 0 01-5.147-1.468l-.368-.218-3.563 1.19 1.201-3.474-.237-.361A9.973 9.973 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.471-7.893c-.257-.128-1.521-.752-1.756-.837-.235-.086-.406-.128-.577.128s-.661.837-.812 1.009c-.15.174-.301.195-.558.065-.257-.13-1.086-.4-2.07-1.274-.765-.682-1.28-1.526-1.43-1.783-.15-.257-.016-.396.114-.523.118-.117.257-.303.386-.454.13-.15.173-.257.26-.43.086-.174.043-.326-.022-.454-.065-.128-.577-1.39-.79-1.898-.207-.495-.417-.428-.577-.437l-.492-.008c-.174 0-.454.065-.692.326-.235.257-.89.87-.89 2.12 0 1.247.91 2.453 1.037 2.62.13.174 1.79 2.737 4.33 3.838.605.26 1.076.415 1.444.53.607.19 1.16.164 1.598.1.487-.07 1.52-.62 1.732-1.218.217-.6.217-1.114.152-1.218-.065-.104-.235-.17-.492-.298z"/>
      </svg>
    </a>
  )
}
