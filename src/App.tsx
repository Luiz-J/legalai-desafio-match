import { useState } from 'react';

const mockResults = [
  { name: "Alice Silva", description: "Advogada especializada em IA", affinity: 87 },
  { name: "Carlos Souza", description: "Tech recruiter em legaltechs", affinity: 75 },
  { name: "Juliana Pereira", description: "Engenheira de software com foco em dados jurídicos", affinity: 92 },
];

function App() {
  const [form, setForm] = useState({ nome: '', area: '', local: '' });
  const [results, setResults] = useState<typeof mockResults | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResults(mockResults);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-xl w-full space-y-6 bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-center">Match Inteligente</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" required className="w-full px-4 py-2 border rounded-lg" />
          <input name="area" value={form.area} onChange={handleChange} placeholder="Área de Interesse" required className="w-full px-4 py-2 border rounded-lg" />
          <input name="local" value={form.local} onChange={handleChange} placeholder="Localização" required className="w-full px-4 py-2 border rounded-lg" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Buscar Conexões</button>
        </form>
        {results && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Resultados:</h2>
            {results.map((r, idx) => (
              <div key={idx} className="p-4 border rounded-lg bg-gray-50">
                <p className="font-bold">{r.name}</p>
                <p>{r.description}</p>
                <p className="text-blue-600 font-semibold">Afinidade: {r.affinity}%</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
