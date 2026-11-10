<script lang="ts">
  import Icon from '$lib/Icon.svelte';
  import { onMount } from 'svelte';
  import { translations, isLocale, type Locale, type Theme } from '$lib/translations';

  let locale = $state<Locale>('pt-BR');
  let selectedTheme = $state<Theme>('cyan');
  const t = $derived(translations[locale]);
  onMount(() => {
    try {
      const saved = localStorage.getItem('tunely.site.language');
      if (isLocale(saved)) locale = saved;
    } catch { /* Language selection also works without storage. */ }
  });
  $effect(() => { document.documentElement.lang = locale; });
  function saveLanguage(value: string) {
    if (!isLocale(value)) return;
    try { localStorage.setItem('tunely.site.language', value); } catch { /* Optional preference. */ }
  }

  const repo = 'https://github.com/guicoelhodev/open-tunely';
  const themes = [
    { id: 'cyan', color: '#0891b2', width: 1274, height: 1026 },
    { id: 'indigo', color: '#4f46e5', width: 1275, height: 1028 },
    { id: 'pink', color: '#e63e93', width: 1275, height: 1028 },
    { id: 'neutral', color: '#525252', width: 1274, height: 1026 }
  ] satisfies { id: Theme; color: string; width: number; height: number }[];
  const downloads = [
    { name: 'Windows', icon: 'windows', format: 'installer' as const, file: 'Open-Tunely-windows-x64-setup.exe' },
    { name: 'Linux', icon: 'linux', format: 'appImage' as const, file: 'Open-Tunely-linux-x64.AppImage' }
  ];
</script>

<svelte:head>
  <title>{t.title}</title>
  <meta name="description" content={t.meta} />
  <meta name="theme-color" content="#fafbfc" />
  <meta property="og:title" content={t.title} />
  <meta property="og:description" content={t.social} />
  <meta property="og:type" content="website" />
</svelte:head>

<a class="skip-link" href="#conteudo">{t.skip}</a>
<div class="page-shell">
  <header class="site-header flex items-center justify-between gap-4">
    <a href="/" class="brand" aria-label={t.home}>
      <img src="/favicon.svg" width="36" height="36" alt="" />
      <span>Open Tunely</span>
    </a>
    <nav class="flex items-center gap-6" aria-label={t.nav}>
      <a class="install-link" href="#instalar">{t.install}</a>
      <a class="source-link inline-flex items-center gap-2" href={repo} target="_blank" rel="noreferrer"><Icon name="github" size={17} /> GitHub <Icon name="arrow" size={13} /></a>
      <select class="language-select" aria-label={t.language} bind:value={locale} onchange={(event) => saveLanguage(event.currentTarget.value)}>
        <option value="pt-BR" lang="pt-BR">🇧🇷 Português</option>
        <option value="en" lang="en">🇺🇸 English</option>
        <option value="es" lang="es">🇪🇸 Español</option>
      </select>
    </nav>
  </header>

  <main id="conteudo">
    <section class="hero" aria-labelledby="title">
      <div class="intro">
        <p class="eyebrow"><span></span> {t.eyebrow}</p>
        <h1 id="title">{t.heading}<br /><span>{t.headingAccent}</span></h1>
        <p class="description">{t.description}</p>
        <ul class="benefits flex flex-wrap gap-x-5 gap-y-2" aria-label={t.about}>
          <li><Icon name="check" size={16} /> {t.noAds}</li>
          <li><Icon name="check" size={16} /> {t.noAccount}</li>
        </ul>

        <div class="download-area">
          <p class="download-label">{t.available}</p>
          <div class="downloads grid grid-cols-2 gap-3" aria-label={t.download}>
            {#each downloads as download}
              <a class="download" class:primary={download.icon === 'windows'} href={`${repo}/releases/latest/download/${download.file}`} aria-label={`${t.downloadFor} ${download.name} — ${t[download.format]}`}>
                <div class="flex items-center gap-2"><Icon name={download.icon} size={19} /><span>{download.name}</span><span class="download-icon"><Icon name="download" size={16} /></span></div>
                <small>{t[download.format]}</small>
              </a>
            {/each}
          </div>
          <p class="download-note">{t.downloadNote}</p>
        </div>
      </div>

      <div class="preview-area">
        <div class="preview-toolbar">
          <div class="preview-title"><span class="eyebrow">{t.yourWay}</span><p>{t.colorIntro}</p></div>
          <fieldset class="theme-picker">
            <legend class="sr-only">{t.chooseTheme}</legend>
            <div class="theme-options">
              {#each themes as theme}
                <label class="theme-option" title={t.themes[theme.id]} style={`--swatch: ${theme.color}`}>
                  <input type="radio" name="theme" id={`theme-${theme.id}`} value={theme.id} bind:group={selectedTheme} aria-label={t.themes[theme.id]} aria-controls={`capture-${theme.id}`} />
                </label>
              {/each}
            </div>
          </fieldset>
        </div>
        <figure class="app-preview">
          <div class="preview-frame">
            <div class="screenshot-stack">
              {#each themes as theme}
                <a class={`theme-shot shot-${theme.id}`} id={`capture-${theme.id}`} href={`/images/open-tunely-${theme.id}-light.png`} target="_blank" rel="noreferrer" aria-label={`${t.enlarge} — ${t.themes[theme.id]}, ${t.light}`}>
                  <img src={`/images/open-tunely-${theme.id}-light.png`} width={theme.width} height={theme.height} alt={`${t.imageDescription} ${t.theme}: ${t.themes[theme.id]}, ${t.light}.`} fetchpriority={theme.id === 'cyan' ? 'high' : 'low'} />
                </a>
              {/each}
            </div>
          </div>
          <figcaption class="flex items-center justify-between gap-3">
            <span class="theme-name">{t.theme} {#each themes as theme}<span class={`name-${theme.id}`}>{t.themes[theme.id].toLowerCase()}</span>{/each} · {t.realCapture}</span>
            <span>{t.clickEnlarge} <span aria-hidden="true">↗</span></span>
          </figcaption>
        </figure>
      </div>
    </section>

    <aside class="privacy" aria-labelledby="privacy-title">
      <span class="privacy-icon"><Icon name="folder" size={23} /></span>
      <div><h2 id="privacy-title">{t.privacyTitle}</h2><p>{t.privacy}</p></div>
      <span class="local-label">{t.localFiles}</span>
    </aside>

    <section class="installation" id="instalar" aria-labelledby="installation-title">
      <div class="installation-heading"><p class="eyebrow">{t.getStarted}</p><h2 id="installation-title">{t.downloaded}<br />{t.justOpen}</h2><a href={`${repo}#get-started`} target="_blank" rel="noreferrer">{t.guide} <Icon name="arrow" size={14} /></a></div>
      <article><h3><span class="system-icon"><Icon name="windows" size={23} /></span> {t.onWindows}</h3><p>{t.windows}</p></article>
      <article><h3><span class="system-icon"><Icon name="linux" size={26} /></span> {t.onLinux}</h3><p>{t.linux}</p></article>
    </section>
  </main>

  <footer>
    <div class="footer-row flex flex-wrap items-center justify-between gap-x-6 gap-y-3"><p>Open Tunely <span>·</span> {t.madeBy} <a href="https://github.com/guicoelhodev" target="_blank" rel="noreferrer">guicoelhodev</a></p><a href={`${repo}/issues`} target="_blank" rel="noreferrer">{t.report} <span aria-hidden="true">↗</span></a></div>
    <p class="usage-note">{t.usage}</p>
  </footer>
</div>
