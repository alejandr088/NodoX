import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs({ paths }) {
  // paths: array de objetos { name, link? } donde link es opcional
  const location = useLocation();

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center space-x-2 text-sm text-gray-500">
        <li>
          <Link to="/" className="transition hover:text-brand-600">
            Inicio
          </Link>
        </li>
        {paths.map((item, idx) => (
          <li key={idx} className="flex items-center">
            <span className="mx-2 select-none">&gt;</span>
            {item.link ? (
              <Link
                to={item.link}
                className={`transition hover:text-brand-600 ${
                  location.pathname === item.link
                    ? "font-bold text-gray-900"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ) : (
              <span className="font-medium text-gray-700">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
