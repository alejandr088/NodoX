import { useState } from "react";

const COMPONENTS_DATA = {
  cpu: [
    { id: 1, name: "Intel Core i5-12400F", price: 180, platform: "intel", watts: 95 },
    { id: 2, name: "AMD Ryzen 5 5600X", price: 200, platform: "amd", watts: 105 },
  ],
  gpu: [
    { id: 1, name: "Nvidia RTX 3060", price: 350, watts: 170 },
    { id: 2, name: "AMD Radeon RX 6600 XT", price: 300, watts: 160 },
  ],
  ram: [
    { id: 1, name: "16GB DDR4 3200MHz", price: 80, watts: 12 },
    { id: 2, name: "32GB DDR4 3200MHz", price: 150, watts: 18 },
  ],
  storage: [
    { id: 1, name: "512GB NVMe SSD", price: 90, watts: 8 },
    { id: 2, name: "1TB NVMe SSD", price: 150, watts: 10 },
  ],
  motherboard: [
    { id: 1, name: "MSI B550 Tomahawk", price: 150, platform: "amd", watts: 45 },
    { id: 2, name: "ASUS ROG Strix B660-F", price: 180, platform: "intel", watts: 45 },
  ],
};

export default function PCBuilder() {
  const [selected, setSelected] = useState({
    cpu: null,
    gpu: null,
    ram: null,
    storage: null,
    motherboard: null,
    cooling: { id: 1, name: "Cooler torre básico", price: 40, watts: 6 },
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (category, option) => {
    setSelected((prev) => {
      const next = { ...prev, [category]: option };

      // Si cambia CPU o placa, valida compatibilidad por plataforma.
      const cpuPlatform = (category === "cpu" ? option : next.cpu)?.platform;
      const moboPlatform =
        (category === "motherboard" ? option : next.motherboard)?.platform;

      if (cpuPlatform && moboPlatform && cpuPlatform !== moboPlatform) {
        if (category === "cpu") next.motherboard = null;
        if (category === "motherboard") next.cpu = null;
      }

      return next;
    });
  };

  const totalPrice = Object.values(selected).reduce(
    (acc, item) => acc + (item?.price || 0),
    0,
  );

  const estimatedWatts = Object.values(selected).reduce(
    (acc, item) => acc + (item?.watts || 0),
    0,
  );

  const recommendedPsu = Math.max(450, Math.ceil((estimatedWatts * 1.5) / 50) * 50);
  const isComplete = Object.entries(selected)
    .filter(([key]) => key !== "cooling")
    .every(([, value]) => value !== null);

  const compatibilityWarning =
    selected.cpu &&
    selected.motherboard &&
    selected.cpu.platform !== selected.motherboard.platform;

  const buildSummary = Object.entries(selected)
    .map(([category, item]) => `${category.toUpperCase()}: ${item?.name || "-"}`)
    .join("\n");

  const quoteWhatsappUrl = `https://wa.me/59891741147?text=${encodeURIComponent(
    `Hola NodoX, quiero cotizar esta configuración:\n\n${buildSummary}\n\nTotal estimado: USD ${totalPrice}\nConsumo estimado: ${estimatedWatts}W\nFuente recomendada: ${recommendedPsu}W`,
  )}`;

  return (
    <section className="surface-panel rounded-2xl p-6 md:p-8 max-w-5xl mx-auto my-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
        Armador de PC Personalizado
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        Selecciona componentes, valida compatibilidad y envía tu cotización.
      </p>

      {compatibilityWarning && (
        <div className="mb-6 rounded-xl border border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-300 p-4 text-sm">
          CPU y motherboard no son compatibles por plataforma. Ajusta una de las dos opciones.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.entries(COMPONENTS_DATA).map(([category, options]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-3 capitalize text-gray-800 dark:text-gray-200">
              {category}
            </h3>
            <div className="space-y-2">
              {options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelect(category, option)}
                  className={`w-full text-left px-4 py-2 rounded-lg border transition ${
                    selected[category]?.id === option.id
                      ? "bg-red-500 text-white border-red-500"
                      : "bg-gray-100 dark:bg-zinc-800 border-transparent hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                  aria-pressed={selected[category]?.id === option.id}
                >
                  {option.name} - USD {option.price}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
        <div className="grid gap-3 sm:grid-cols-3 mb-6 text-sm">
          <div className="surface-subtle rounded-lg p-3">
            <p className="text-gray-500 dark:text-gray-400">Consumo estimado</p>
            <p className="font-bold text-lg">{estimatedWatts}W</p>
          </div>
          <div className="surface-subtle rounded-lg p-3">
            <p className="text-gray-500 dark:text-gray-400">Fuente sugerida</p>
            <p className="font-bold text-lg">{recommendedPsu}W</p>
          </div>
          <div className="surface-subtle rounded-lg p-3">
            <p className="text-gray-500 dark:text-gray-400">Estado</p>
            <p className="font-bold text-lg">{isComplete ? "Lista" : "Incompleta"}</p>
          </div>
        </div>

        <div className="text-center">
        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          Precio Total: <span className="text-red-500">USD {totalPrice}</span>
        </h3>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              disabled={!isComplete || compatibilityWarning}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition ${
                !isComplete || compatibilityWarning
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
              }`}
              onClick={() => setSubmitted(true)}
            >
              Confirmar Configuración
            </button>
            <a
              href={quoteWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-emerald-600 bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
            >
              Enviar por WhatsApp
            </a>
          </div>

          {submitted && isComplete && !compatibilityWarning && (
            <p className="mt-4 text-sm text-emerald-700 dark:text-emerald-400">
              Configuración guardada correctamente. Puedes enviarla y recibir asesoramiento final.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
