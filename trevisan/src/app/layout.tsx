import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Churrascaria Trevisan",
  description: "A melhor churrascaria de Campinas!",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900">
        {/* Cabeçalho */}
        <header className="bg-red-800 text-white py-4">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
            <h1 className="text-xl font-bold">Churrascaria Trevisan</h1>
            <nav>
              <ul className="flex gap-6">
                <li><a href="/" className="hover:underline">Início</a></li>
                <li><a href="/gallery" className="hover:underline">Galeria</a></li>
                <li><a href="#" className="hover:underline">Cardápio</a></li>
                <li><a href="#" className="hover:underline">Reservas</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Conteúdo principal */}
        <main className="min-h-screen">{children}</main>

        {/* Rodapé */}
        <footer className="relative bg-black text-white pt-10 pb-20">
          <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between">
            {/* Coluna 1: Menu */}
            <div className="w-full md:w-1/3 mb-6">
              <h2 className="text-xl font-semibold">Churrascaria Trevisan</h2>
              <ul>
                <li className="mb-2"><a href="/" className="hover:text-yellow-400">História</a></li>
                <li className="mb-2"><a href="/gallery" className="hover:text-yellow-400">Galeria</a></li>
                <li className="mb-2"><a href="#" className="hover:text-yellow-400">Cardápio</a></li>
                <li className="mb-2"><a href="#" className="hover:text-yellow-400">Reservas</a></li>
              </ul>
            </div>

            {/* Coluna 2: Contatos */}
            <div className="w-full md:w-1/3 mb-6">
              <h3 className="text-lg font-semibold border-b-2 border-yellow-400 inline-block mb-4">Contatos</h3>
              <p>📍 Av. Marechal Carmona, 371, Campinas - SP</p>
              <p>📞 19 98196 1849 | 19 3233 7744</p>
              <p>📧 <a href="mailto:trevisanchurrascaria@gmail.com" className="hover:text-yellow-400">trevisanchurrascaria@gmail.com</a></p>
            </div>

            {/* Coluna 3: Horários */}
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold border-b-2 border-yellow-400 inline-block mb-4">Horários</h3>
              <p>Seg a Qui: 11h às 15h | 18h às 23h</p>
              <p>Sexta: 11h às 15h | 18h às 00h</p>
              <p>Sábado: 11h às 16h | 18h às 00h</p>
              <p>Domingo: 11h às 16h | 18h às 23h</p>
            </div>
          </div>

          {/* Efeito de chamas */}
          <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden flex justify-center items-end">
            <img src="/images/fundo-fogo.jpg" alt="Fogo" className="w-full h-auto object-cover" />
          </div>

          {/* Direitos Autorais */}
          <div className="bg-neutral-900 text-center py-3 mt-4">
            <p className="text-sm">&copy; 2025 Churrascaria Trevisan. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
