'use client';

import { useState } from 'react';

export default function FormularioInversion() {
  const [nombre, setNombre] = useState('');
  const [monto, setMonto] = useState('');

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    alert(\`Inversor: \${nombre}, Monto: €\${monto}\`);
  };

  return (
    <form onSubmit={manejarEnvio} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Monto a invertir"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Enviar
      </button>
    </form>
  );
}