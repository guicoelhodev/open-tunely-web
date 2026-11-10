# Open Tunely · site

Site de apresentação e distribuição do [Open Tunely](https://github.com/guicoelhodev/open-tunely), em português, inglês e espanhol. Feito com SvelteKit 2, Svelte 5 e Tailwind CSS 4. Exportação estática, sem servidor de aplicação, fontes externas ou serviços de rastreamento.

## Desenvolvimento

Requer Node.js 22.12+ ou 24+.

```sh
npm ci
npm run dev
```

## Validação e produção

```sh
npm run check
npm run build
npm run preview
```

A pasta `build/` pode ser publicada em qualquer hospedagem estática. Os downloads usam os nomes estáveis de arquivos da última release do GitHub, sem fixar uma versão.

## Imagem e conteúdo

As quatro capturas reais enviadas pelo autor estão em `static/images/open-tunely-{cyan,indigo,pink,neutral}-light.png`, preservadas sem cortes ou alterações. A seleção de cor troca simultaneamente a paleta do site, a captura visível e o link para ampliar a imagem correspondente. A página usa o tema claro com ciano e apresenta os downloads, uso sem anúncios e sem conta, e armazenamento local dos MP3. Buscas, prévias e downloads dependem de serviços online.

A página é pré-renderizada em português e usa Svelte no navegador para trocar o idioma. O seletor único com bandeiras traduz os textos e metadados e atualiza o idioma do documento. A preferência é salva apenas no navegador, em `tunely.site.language`. As capturas originais permanecem em português. O seletor de cores usa botões de opção nativos e variáveis CSS, com as paletas ciano, índigo, rosa e neutra. As instruções de instalação ficam em uma seção própria. As transições respeitam a preferência por movimento reduzido.
