import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs({ paths }) {
  // paths: array de objetos { name, link? } donde link es opcional
  const location = useLocation()

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <li>
          <Link to="/" className="hover:text-red-500 dark:hover:text-red-400">
            Inicio
          </Link>
        </li>
        {paths.map((item, idx) => (
          <li key={idx} className="flex items-center">
            <span className="mx-2 select-none">&gt;</span>
            {item.link ? (
              <Link
                to={item.link}
                className={`hover:text-red-500 dark:hover:text-red-400 ${
                  location.pathname === item.link
                    ? 'font-bold text-gray-900 dark:text-white'
                    : ''
                }`}
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-gray-700 dark:text-gray-200 font-medium">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
