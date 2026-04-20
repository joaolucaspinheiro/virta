import { Waves } from "lucide-react";
import { useTranslation } from "react-i18next";

export function LoginPage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="w-full h-screen flex relative">
      {/* Seletor de Idioma - Topo Esquerda */}
      <div className="absolute top-4 left-4 flex gap-2 z-20">
        <button
          onClick={() => changeLanguage("pt")}
          className={`px-3 py-1 text-xs font-bold rounded-md transition-colors cursor-pointer ${i18n.language === "pt" ? "bg-white text-brand-500" : "bg-white/10 text-white hover:bg-white/20"}`}
        >
          PT
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className={`px-3 py-1 text-xs font-bold rounded-md transition-colors cursor-pointer ${i18n.language === "en" ? "bg-white text-brand-500" : "bg-white/10 text-white hover:bg-white/20"}`}
        >
          EN
        </button>
      </div>
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
            {t("login.branding_title")}
          </h1>
          <p className="text-lg font-bold mb-6">
            {t("login.branding_description")}
          </p>
        </div>
        {/* Rodapé */}
        <div className="text-sm text-brand-200">{t("login.footer")}</div>
      </div>

      {/* Formulario */}
      <div className="flex-1 bg-zinc-50 flex items-center justify-center">
        <h1 className="text-zinc-900"> Área de login</h1>
      </div>
    </div>
  );
}
