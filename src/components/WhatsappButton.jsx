import { useEffect, useState } from "react";

export default function WhatsappButton() {
  const phone = "+59891741147";
  const message = encodeURIComponent(
    "Hola, quiero hacer una consulta con NodoX.",
  );
  const url = `https://wa.me/${phone.replace(/\D/g, "")}?text=${message}`;
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const openTimer = window.setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => {
      window.clearTimeout(openTimer);
    };
  }, []);

  useEffect(() => {
    if (!showPopup) {
      return undefined;
    }

    const closeTimer = window.setTimeout(() => {
      setShowPopup(false);
    }, 15000);

    return () => {
      window.clearTimeout(closeTimer);
    };
  }, [showPopup]);

  return (
    <>
      {showPopup && (
        <div className="fixed bottom-28 right-6 z-[60] max-w-[18rem] rounded-2xl border border-green-100 bg-white/95 p-4 text-sm text-gray-700 shadow-2xl backdrop-blur-sm dark:border-green-900/40 dark:bg-zinc-900/95 dark:text-gray-200">
          <button
            type="button"
            onClick={() => setShowPopup(false)}
            className="absolute right-2 top-2 rounded p-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-gray-200"
            aria-label="Cerrar mensaje de WhatsApp"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <p className="pr-6 leading-relaxed">
            Bienvenido a NodoX, si deseas comunicarte con nuestros tecnicos puedes hacer clic
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-semibold text-green-700 underline-offset-2 hover:underline dark:text-green-400"
            >
              aqui
            </a>
            .
          </p>

          <div className="mt-3 flex justify-end text-green-600 dark:text-green-400">
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 4v12m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      )}

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar via WhatsApp"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 p-[18px] text-white shadow-lg transition-colors hover:bg-green-600 flex items-center justify-center"
        title="Contactar via WhatsApp"
      >
        <svg
          className="h-8 w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.373 0 .002 5.373.002 12a11.8 11.8 0 001.988 6.156L0 24l5.997-2.006A11.92 11.92 0 0012 24c6.627 0 12-5.373 12-12 0-3.214-1.254-6.227-3.48-8.52zM12 22.045a9.98 9.98 0 01-5.147-1.468l-.368-.218-3.563 1.19 1.201-3.474-.237-.361A9.973 9.973 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.471-7.893c-.257-.128-1.521-.752-1.756-.837-.235-.086-.406-.128-.577.128s-.661.837-.812 1.009c-.15.174-.301.195-.558.065-.257-.13-1.086-.4-2.07-1.274-.765-.682-1.28-1.526-1.43-1.783-.15-.257-.016-.396.114-.523.118-.117.257-.303.386-.454.13-.15.173-.257.26-.43.086-.174.043-.326-.022-.454-.065-.128-.577-1.39-.79-1.898-.207-.495-.417-.428-.577-.437l-.492-.008c-.174 0-.454.065-.692.326-.235.257-.89.87-.89 2.12 0 1.247.91 2.453 1.037 2.62.13.174 1.79 2.737 4.33 3.838.605.26 1.076.415 1.444.53.607.19 1.16.164 1.598.1.487-.07 1.52-.62 1.732-1.218.217-.6.217-1.114.152-1.218-.065-.104-.235-.17-.492-.298z" />
        </svg>
      </a>
    </>
  );
}
