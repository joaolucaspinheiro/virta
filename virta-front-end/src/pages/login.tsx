import { Waves } from "lucide-react";

export function LoginPage() {
  return (
    <div className="w-full h-screen flex">
      {/* Logo */}
      <div className="flex-1 bg-brand-500 hidden lg:flex flex-col justify-between p-12 text-white">
        <div className="flex items-center gap-3">
          <div className="bg-white/10 p-2 rounded-lg">
            <Waves size={24} className="animate-float" />
          </div>
          <span>Virta</span>
        </div>
        {/* Proposta de valor */}
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-6">
            A plataforma de gestão do agora para o futuro
          </h1>
          <p className="text-lg font-bold mb-6">
            Acompanhe suas finanças, organize suas tarefas e conecte-se com seus
            colaboradores
          </p>
        </div>
        {/* Rodapé */}
        <div className="text-sm text-brand-200">
          @ 2026 Virta. Todos os direitos reservados.
        </div>
      </div>

      {/* Formulario */}
      <div className="flex-1 bg-zinc-50 flex items-center justify-center">
        <h1 className="text-zinc-900"> Área de login</h1>
      </div>
    </div>
  );
}
