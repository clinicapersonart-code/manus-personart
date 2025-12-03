import { useEffect } from 'react';

/**
 * Google Ads Conversion Tracking Component
 * 
 * Para configurar:
 * 1. Crie sua conta no Google Ads
 * 2. Configure uma conversão (ex: "Agendamento de Consulta")
 * 3. Obtenha o Conversion ID e Conversion Label
 * 4. Substitua os valores abaixo pelos seus
 */

// Configuração do Google Ads
const GOOGLE_ADS_CONFIG = {
  // Substitua pelo seu Google Ads Conversion ID
  conversionId: 'AW-XXXXXXXXX',
  // Substitua pelo seu Conversion Label para agendamentos
  appointmentLabel: 'XXXXXXXXXXXXXXX',
  // Substitua pelo seu Conversion Label para contatos
  contactLabel: 'XXXXXXXXXXXXXXX',
};

// Função para carregar o script do Google Ads
export function loadGoogleAdsScript() {
  if (typeof window === 'undefined') return;
  
  // Verifica se o script já foi carregado
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) {
    return;
  }

  // Carrega o script do Google Ads
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_CONFIG.conversionId}`;
  document.head.appendChild(script);

  // Inicializa o gtag
  script.onload = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', GOOGLE_ADS_CONFIG.conversionId);
    
    // Torna gtag disponível globalmente
    (window as any).gtag = gtag;
  };
}

// Hook para rastrear conversão de agendamento
export function trackAppointmentConversion() {
  if (typeof window === 'undefined' || !(window as any).gtag) return;
  
  (window as any).gtag('event', 'conversion', {
    'send_to': `${GOOGLE_ADS_CONFIG.conversionId}/${GOOGLE_ADS_CONFIG.appointmentLabel}`,
    'value': 1.0,
    'currency': 'BRL'
  });
}

// Hook para rastrear conversão de contato
export function trackContactConversion() {
  if (typeof window === 'undefined' || !(window as any).gtag) return;
  
  (window as any).gtag('event', 'conversion', {
    'send_to': `${GOOGLE_ADS_CONFIG.conversionId}/${GOOGLE_ADS_CONFIG.contactLabel}`,
    'value': 1.0,
    'currency': 'BRL'
  });
}

// Componente que carrega o script do Google Ads
export default function GoogleAdsTracking() {
  useEffect(() => {
    loadGoogleAdsScript();
  }, []);

  return null;
}
