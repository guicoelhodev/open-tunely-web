export type Locale = 'pt-BR' | 'en' | 'es';
export type Theme = 'cyan' | 'indigo' | 'pink' | 'neutral';

const pt = {
  title: 'Open Tunely — Busque, baixe e dê o play.',
  meta: 'Um app gratuito para descobrir músicas e ouvir seus MP3. Sem anúncios, sem criar conta. Baixe o Open Tunely para Windows ou Linux.',
  social: 'Sua coleção de MP3, no seu computador. Grátis, sem anúncios e sem conta. Para Windows e Linux.',
  skip: 'Pular para o conteúdo', home: 'Open Tunely — início', nav: 'Navegação principal', language: 'Idioma', install: 'Como instalar',
  eyebrow: 'UM APP GRATUITO PARA SUAS MÚSICAS', heading: 'Busque, baixe', headingAccent: 'e dê o play.',
  description: 'Descubra músicas e ouça sua coleção de MP3. Tudo em um app, no seu computador.',
  about: 'Sobre o aplicativo', noAds: 'Sem anúncios', noAccount: 'Sem criar conta', available: 'Disponível para',
  download: 'Baixar Open Tunely', downloadFor: 'Baixar para', installer: 'Instalador · 64 bits', appImage: 'AppImage · 64 bits',
  downloadNote: 'Grátis, de código aberto e direto do GitHub.', yourWay: 'À SUA MANEIRA', colorIntro: 'Uma cor para cada gosto.',
  chooseTheme: 'Escolha a cor do site e da captura do aplicativo',
  themes: { cyan: 'Ciano', indigo: 'Índigo', pink: 'Rosa', neutral: 'Neutro' },
  enlarge: 'Ampliar captura do Open Tunely', theme: 'Tema', light: 'claro',
  imageDescription: 'Open Tunely com busca, biblioteca de MP3 e controles de reprodução.', realCapture: 'captura real', clickEnlarge: 'Clique na imagem para ampliar',
  privacyTitle: 'Sua música fica com você.', privacy: 'Salve na pasta que preferir e ouça seus MP3 offline. Buscas, prévias e downloads usam serviços online.', localFiles: 'ARQUIVOS LOCAIS',
  getStarted: 'PARA COMEÇAR', downloaded: 'Baixou?', justOpen: 'É só abrir.', guide: 'Guia de instalação', onWindows: 'No Windows', onLinux: 'No Linux',
  windows: 'Abra o instalador e siga as etapas. Como ainda não tem assinatura digital, o sistema pode exibir um aviso. O WebView2 será instalado se necessário.',
  linux: 'Nas propriedades do AppImage, permita a execução como programa. Depois, abra o arquivo.',
  madeBy: 'Feito por', report: 'Encontrou um problema?', usage: 'Baixe apenas conteúdo que você possui ou tem permissão para salvar.'
};

type Translation = { [K in keyof typeof pt]: K extends 'themes' ? Record<Theme, string> : string };

export const translations: Record<Locale, Translation> = {
  'pt-BR': pt,
  en: {
    title: 'Open Tunely — Find, download and press play.',
    meta: 'A free app to discover music and listen to your MP3s. No ads, no account required. Download Open Tunely for Windows or Linux.',
    social: 'Your MP3 collection, on your computer. Free, with no ads or accounts. For Windows and Linux.',
    skip: 'Skip to content', home: 'Open Tunely — home', nav: 'Main navigation', language: 'Language', install: 'How to install',
    eyebrow: 'A FREE APP FOR YOUR MUSIC', heading: 'Find, download', headingAccent: 'and press play.',
    description: 'Discover music and listen to your MP3 collection. All in one app, on your computer.',
    about: 'About the app', noAds: 'No ads', noAccount: 'No account required', available: 'Available for',
    download: 'Download Open Tunely', downloadFor: 'Download for', installer: 'Installer · 64-bit', appImage: 'AppImage · 64-bit',
    downloadNote: 'Free, open source and straight from GitHub.', yourWay: 'YOUR WAY', colorIntro: 'A color for every taste.',
    chooseTheme: 'Choose the color of the website and app screenshot',
    themes: { cyan: 'Cyan', indigo: 'Indigo', pink: 'Pink', neutral: 'Neutral' },
    enlarge: 'Enlarge Open Tunely screenshot', theme: 'Theme', light: 'light',
    imageDescription: 'Open Tunely with music search, an MP3 library and playback controls.', realCapture: 'actual screenshot', clickEnlarge: 'Click the image to enlarge',
    privacyTitle: 'Your music stays with you.', privacy: 'Save to your preferred folder and listen to your MP3s offline. Search, previews and downloads use online services.', localFiles: 'LOCAL FILES',
    getStarted: 'GET STARTED', downloaded: 'Downloaded?', justOpen: 'Just open it.', guide: 'Installation guide', onWindows: 'On Windows', onLinux: 'On Linux',
    windows: 'Open the installer and follow the steps. It is not digitally signed yet, so your system may display a warning. WebView2 will be installed if needed.',
    linux: 'In the AppImage file properties, allow it to run as a program. Then open the file.',
    madeBy: 'Made by', report: 'Found a problem?', usage: 'Only download content you own or have permission to save.'
  },
  es: {
    title: 'Open Tunely — Busca, descarga y dale al play.',
    meta: 'Una app gratuita para descubrir música y escuchar tus MP3. Sin anuncios ni cuentas. Descarga Open Tunely para Windows o Linux.',
    social: 'Tu colección de MP3, en tu computadora. Gratis, sin anuncios ni cuentas. Para Windows y Linux.',
    skip: 'Saltar al contenido', home: 'Open Tunely — inicio', nav: 'Navegación principal', language: 'Idioma', install: 'Cómo instalar',
    eyebrow: 'UNA APP GRATUITA PARA TU MÚSICA', heading: 'Busca, descarga', headingAccent: 'y dale al play.',
    description: 'Descubre música y escucha tu colección de MP3. Todo en una app, en tu computadora.',
    about: 'Acerca de la app', noAds: 'Sin anuncios', noAccount: 'Sin crear una cuenta', available: 'Disponible para',
    download: 'Descargar Open Tunely', downloadFor: 'Descargar para', installer: 'Instalador · 64 bits', appImage: 'AppImage · 64 bits',
    downloadNote: 'Gratis, de código abierto y directo desde GitHub.', yourWay: 'A TU MANERA', colorIntro: 'Un color para cada gusto.',
    chooseTheme: 'Elige el color del sitio y de la captura de la app',
    themes: { cyan: 'Cian', indigo: 'Índigo', pink: 'Rosa', neutral: 'Neutro' },
    enlarge: 'Ampliar captura de Open Tunely', theme: 'Tema', light: 'claro',
    imageDescription: 'Open Tunely con búsqueda, biblioteca de MP3 y controles de reproducción.', realCapture: 'captura real', clickEnlarge: 'Haz clic en la imagen para ampliar',
    privacyTitle: 'Tu música se queda contigo.', privacy: 'Guarda en la carpeta que prefieras y escucha tus MP3 sin conexión. Las búsquedas, vistas previas y descargas usan servicios en línea.', localFiles: 'ARCHIVOS LOCALES',
    getStarted: 'PARA EMPEZAR', downloaded: '¿Ya lo descargaste?', justOpen: 'Solo ábrelo.', guide: 'Guía de instalación', onWindows: 'En Windows', onLinux: 'En Linux',
    windows: 'Abre el instalador y sigue los pasos. Todavía no tiene firma digital, por lo que el sistema puede mostrar un aviso. WebView2 se instalará si es necesario.',
    linux: 'En las propiedades del AppImage, permite su ejecución como programa. Después, abre el archivo.',
    madeBy: 'Hecho por', report: '¿Encontraste un problema?', usage: 'Descarga solo contenido que te pertenezca o que tengas permiso para guardar.'
  }
};

export function isLocale(value: string | null): value is Locale {
  return value === 'pt-BR' || value === 'en' || value === 'es';
}
