import { MessageCircle } from "lucide-react";
import { CLINIC_INFO } from "@/const";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(
    "Olá! Gostaria de mais informações sobre os serviços da Clínica Personart."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 flex items-center justify-center group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute right-full mr-3 bg-[#25D366] text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco!
      </span>
    </a>
  );
}
