import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";

const COMPANY_SIZE = {
  micro: { label: "1-10 colaboradores", discount: 5 },
  pyme: { label: "11-50 colaboradores", discount: 8 },
  mid: { label: "51-200 colaboradores", discount: 12 },
  enterprise: { label: "201+ colaboradores", discount: 15 },
};

const SERVICE_PACKS = {
  endpoint: { label: "Renovación de equipos", base: 1200 },
  support: { label: "Soporte mensual", base: 950 },
  infra: { label: "Infraestructura y redes", base: 1800 },
};

export default function BusinessSales() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    collaborators: 15,
    size: "pyme",
    service: "endpoint",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const estimate = useMemo(() => {
    const pack = SERVICE_PACKS[formData.service];
    const size = COMPANY_SIZE[formData.size];
    const multiplier = Math.max(1, Math.ceil(Number(formData.collaborators || 1) / 20));
    const gross = pack.base * multiplier;
    const discountValue = Math.round((gross * size.discount) / 100);
    const total = gross - discountValue;
    return { gross, discountValue, total, pack: pack.label, discount: size.discount };
  }, [formData]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = useMemo(() => {
    const lines = [
      "Hola NodoX, quiero asesoramiento de ventas empresariales:",
      "",
      `Empresa: ${formData.companyName || "-"}`,
      `Contacto: ${formData.contactName || "-"}`,
      `Email: ${formData.email || "-"}`,
      `Teléfono: ${formData.phone || "-"}`,
      `Colaboradores: ${formData.collaborators || "-"}`,
      `Servicio: ${estimate.pack}`,
      `Estimación inicial: USD ${estimate.total}`,
      "",
      `Detalle: ${formData.message || "Sin detalle adicional"}`,
    ];
    return `https://wa.me/59891741147?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [estimate, formData]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-gray-900 dark:bg-zinc-950 dark:text-gray-100 font-sans">
      <SEO
        title="Soporte IT y Ventas para Empresas"
        description="Propuestas B2B de tecnologia: renovacion de equipos, soporte mensual e infraestructura IT para empresas en Uruguay."
        path="/business-sales"
      />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: "url('/pexels-cookiecutter-1148820.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/88 via-slate-100/78 to-slate-50/90 dark:from-zinc-950/88 dark:via-zinc-950/80 dark:to-zinc-950/92 pointer-events-none" />

      <Navbar />

      <main className="site-container relative z-10 pt-24 pb-20 md:pt-28">
        <section className="surface-panel rounded-[2rem] px-6 py-8 md:px-10 md:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            NodoX B2B
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-gray-950 dark:text-white">
            Soluciones para empresas con costos previsibles y soporte continuo.
          </h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg leading-7 md:leading-8 text-gray-600 dark:text-gray-300">
            Diseñamos propuestas según tamaño de equipo, tipo de operación y objetivos de continuidad tecnológica.
          </p>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <form
            onSubmit={handleSubmit}
            className="surface-panel rounded-2xl p-6 md:p-8"
            aria-label="Formulario de ventas empresas"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Solicitar propuesta
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="text-sm">
                <span className="font-medium">Empresa *</span>
                <input
                  required
                  name="companyName"
                  value={formData.companyName}
                  onChange={updateField}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-700 dark:bg-zinc-900"
                />
              </label>
              <label className="text-sm">
                <span className="font-medium">Contacto *</span>
                <input
                  required
                  name="contactName"
                  value={formData.contactName}
                  onChange={updateField}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-700 dark:bg-zinc-900"
                />
              </label>
              <label className="text-sm">
                <span className="font-medium">Email *</span>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={updateField}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-700 dark:bg-zinc-900"
                />
              </label>
              <label className="text-sm">
                <span className="font-medium">Teléfono</span>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={updateField}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-700 dark:bg-zinc-900"
                />
              </label>
              <label className="text-sm">
                <span className="font-medium">Colaboradores</span>
                <input
                  type="number"
                  min="1"
                  max="3000"
                  name="collaborators"
                  value={formData.collaborators}
                  onChange={updateField}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-700 dark:bg-zinc-900"
                />
              </label>
              <label className="text-sm">
                <span className="font-medium">Tamaño</span>
                <select
                  name="size"
                  value={formData.size}
                  onChange={updateField}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-700 dark:bg-zinc-900"
                >
                  {Object.entries(COMPANY_SIZE).map(([key, item]) => (
                    <option key={key} value={key}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-4 block text-sm">
              <span className="font-medium">Servicio prioritario</span>
              <select
                name="service"
                value={formData.service}
                onChange={updateField}
                className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-700 dark:bg-zinc-900"
              >
                {Object.entries(SERVICE_PACKS).map(([key, item]) => (
                  <option key={key} value={key}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-4 block text-sm">
              <span className="font-medium">Detalle de necesidad</span>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={updateField}
                className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-700 dark:bg-zinc-900"
              />
            </label>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button type="submit" className="btn-primary">
                Guardar solicitud
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-emerald-600 bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700"
              >
                Enviar por WhatsApp
              </a>
            </div>

            {submitted && (
              <p className="mt-4 text-sm text-emerald-700 dark:text-emerald-400">
                Solicitud lista. Puedes enviarla por WhatsApp o esperar contacto comercial.
              </p>
            )}
          </form>

          <aside className="surface-panel rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Estimador inicial
            </h2>
            <div className="mt-5 space-y-3">
              <div className="surface-subtle rounded-xl p-4 flex justify-between">
                <span>Paquete base</span>
                <strong>USD {estimate.gross}</strong>
              </div>
              <div className="surface-subtle rounded-xl p-4 flex justify-between">
                <span>Descuento por tamaño</span>
                <strong>{estimate.discount}%</strong>
              </div>
              <div className="surface-subtle rounded-xl p-4 flex justify-between text-emerald-700 dark:text-emerald-400">
                <span>Ahorro estimado</span>
                <strong>USD {estimate.discountValue}</strong>
              </div>
              <div className="rounded-xl border border-brand-200 bg-brand-50/70 dark:border-brand-800 dark:bg-brand-900/20 p-4 flex justify-between">
                <span>Total inicial</span>
                <strong>USD {estimate.total}</strong>
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-brand-500" />
                <span>Incluye relevamiento técnico y alcance recomendado.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-brand-500" />
                <span>Condiciones comerciales ajustadas a frecuencia de compra.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-brand-500" />
                <span>Soporte post-implementación y plan de mejora continua.</span>
              </li>
            </ul>
          </aside>
        </section>
      </main>
    </div>
  );
}
