export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "App";

export const APP_LOGO = "/logo-personart.png";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};

// Informações da clínica
export const CLINIC_INFO = {
  name: "Clínica Personart",
  tagline: "Transformando vidas com ciência, cuidado e bem-estar emocional.",
  phone: "(15) 3329-7084",
  whatsapp: "551533297084",
  email: "clinicapersonart@gmail.com",
  instagram: "https://instagram.com/clinicapersonart",
  address: {
    street: "R. Fernão Sales, 672 - Vila Hortência",
    city: "Sorocaba",
    state: "SP",
    zip: "18020-260"
  },
  social: {
    instagram: "https://instagram.com/clinicapersonart"
  },
  mission: "Oferecer psicoterapia humanizada para promover saúde mental e bem-estar.",
  vision: "Ser referência em psicoterapia, impactando positivamente a vida de nossos clientes.",
  values: "Compaixão, respeito, ética, profissionalismo e compromisso com a excelência."
};

// Cores da identidade visual
export const BRAND_COLORS = {
  salmon: "#e9c49e",
  teal: "#273e44",
  beige: "#f5eed2",
  white: "#ffffff"
};

// Serviços oferecidos
export const SERVICES = [
  {
    id: "terapia-individual",
    title: "Terapia Individual Presencial ou Online",
    description: "Atendimento personalizado para tratar ansiedade, depressão, estresse, relacionamentos, entre outros desafios.",
    icon: "user"
  },
  {
    id: "terapia-infantil",
    title: "Terapia Infantil",
    description: "Intervenção psicológica direcionada a crianças, com o objetivo de ajudá-las a enfrentar dificuldades emocionais, comportamentais ou sociais. Utiliza técnicas como jogos, desenhos, histórias e brincadeiras, adaptadas à idade e desenvolvimento da criança.",
    icon: "baby"
  },
  {
    id: "grupos-terapeuticos",
    title: "Grupos Terapêuticos",
    description: "Espaço para compartilhar experiências, fortalecer a autoestima, e aprender estratégias para lidar com desafios em grupo.",
    icon: "users"
  }
];

// Convênios
export const CONVENIOS = [
  { name: "FUNSERV", logo: "/convenios/funserv.png" },
  { name: "Gama Saúde", logo: "/convenios/gama.png" },
  { name: "Particular/Reembolso", logo: "/convenios/particular.png" },
  { name: "Doutor Saúde", logo: "/convenios/doutor-saude.png" },
  { name: "OSSEL Assistência", logo: "/convenios/ossel.png" }
];
