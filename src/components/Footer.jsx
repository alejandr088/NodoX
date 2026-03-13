export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-700 py-12 px-6 dark:bg-zinc-950 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800">
      <div className="site-container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            NodoX
          </h3>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            Proveemos soluciones tecnológicas confiables, con soporte
            profesional y garantía.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            <strong>Teléfono:</strong> 091 741 147
            <br />
            <strong>Email:</strong> nodoxsolutions@gmail.com
          </p>
        </div>

        {/* Enlaces útiles */}
        <div>
          <h4 className="font-semibold mb-4 text-black dark:text-white">
            Enlaces
          </h4>
          <ul>
            <li className="mb-2">
              <a href="/" className="hover:text-red-500 transition dark:hover:text-brand-400">
                Inicio
              </a>
            </li>
            <li className="mb-2">
              <a href="/products" className="hover:text-red-500 transition dark:hover:text-brand-400">
                Productos
              </a>
            </li>
            <li className="mb-2">
              <a href="/services" className="hover:text-red-500 transition dark:hover:text-brand-400">
                Servicios
              </a>
            </li>
            <li className="mb-2">
              <a href="/about" className="hover:text-red-500 transition dark:hover:text-brand-400">
                Sobre NodoX
              </a>
            </li>
            <li className="mb-2">
              <a href="/pc-builder" className="hover:text-red-500 transition dark:hover:text-brand-400">
                Armador de PC
              </a>
            </li>
            <li className="mb-2">
              <a href="/business-sales" className="hover:text-red-500 transition dark:hover:text-brand-400">
                Ventas Empresas
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:text-red-500 transition dark:hover:text-brand-400">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-black dark:text-white">
            Políticas
          </h4>
          <ul>
            <li className="mb-2">
              <a
                href="/privacy-policy"
                className="hover:text-red-500 transition dark:hover:text-brand-400"
              >
                Política de Privacidad
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/terms-conditions"
                className="hover:text-red-500 transition dark:hover:text-brand-400"
              >
                Términos y Condiciones
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="mt-8 flex space-x-4">
            <a
              href="https://facebook.com/nodoxsolutionsuy"
              aria-label="Facebook NodoX"
              className="hover:text-brand-500 transition text-gray-600 dark:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-7 h-7 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.127 8.438 9.879v-6.987h-2.54v-2.892h2.54v-2.203c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.772-1.63 1.562v1.874h2.773l-.443 2.892h-2.33v6.987C18.343 21.127 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/nodoxuy.reparacionpc"
              aria-label="Instagram NodoX"
              className="hover:text-brand-500 transition text-gray-600 dark:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-7 h-7 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.758 2.243 5 5 5h10c2.757 0 5-2.242 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm3.207-3.586a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@nodoxuy"
              aria-label="TikTok NodoX"
              className="hover:text-brand-500 transition text-gray-600 dark:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-7 h-7 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
            <a
              href="https://threads.com/@nodoxuy.reparacionpc"
              aria-label="Threads NodoX"
              className="hover:text-brand-500 transition text-gray-600 dark:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-7 h-7 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.615 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 9.168C8.95 7.621 10.488 7 12.157 7h.045c3.073.016 4.91 1.744 5.154 4.868.191.039.38.084.565.137 1.274.386 2.249 1.114 2.818 2.105.826 1.432.856 3.257.08 5.02-.534 1.218-1.51 2.303-2.816 3.137-1.233.79-2.729 1.222-4.31 1.268-.06.003-.121.005-.182.005zm-2.75-9.1c.03.543.343.963.878 1.3.47.305 1.07.458 1.776.458.065 0 .13-.002.195-.005 1.202-.065 2.124-.504 2.743-1.305.454-.587.712-1.371.767-2.335a12.03 12.03 0 0 0-2.535-.138c-.975.056-1.757.327-2.282.783-.432.374-.664.854-.637 1.393z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 dark:text-gray-400 text-sm">
        &copy; {currentYear} NodoX. Todos los derechos reservados.
      </div>
    </footer>
  );
}
