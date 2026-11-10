<script lang="ts">
 let { name, size = 20 }: { name: string; size?: number } = $props();
 const paths: Record<string,string> = {
 download: 'M12 3v12m-5-5 5 5 5-5M5 16v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4',
 arrow: 'M7 17 17 7M7 7h10v10',
 search: 'm21 21-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0',
 folder: 'M3 7V5a1 1 0 0 1 1-1h6l2 3h8a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7Z',
 play: 'm9 5 11 7-11 7V5Z',
 github: 'M9 19c-4 1-4-2-6-2m12 5v-4a3 3 0 0 0-1-2c4 0 7-2 7-6a5 5 0 0 0-1-3 5 5 0 0 0 0-4s-2 0-4 2a14 14 0 0 0-8 0C6 3 4 3 4 3a5 5 0 0 0 0 4 5 5 0 0 0-1 3c0 4 3 6 7 6a3 3 0 0 0-1 2v4',
 check: 'm5 12 4 4L19 6',
 plus: 'M12 5v14M5 12h14',
 headphones: 'M3 14v-3a9 9 0 0 1 18 0v3M3 13h4v8H4a1 1 0 0 1-1-1v-7Zm18 0h-4v8h3a1 1 0 0 0 1-1v-7Z',
 code: 'm8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18'
 };
</script>
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
 {#if name === 'windows'}<path stroke="none" fill="currentColor" d="M2 4.5 10 3.4v8H2zm9.5-1.3L22 1.7v9.7H11.5zM2 13h8v8L2 19.9zm9.5 0H22v9.7l-10.5-1.5z"/>
 {:else if name === 'linux'}<path d="M9 10V6a3 3 0 0 1 6 0v4c0 2 4 5 3 8-1 2-3 2-6 2s-5 0-6-2c-1-3 3-6 3-8Z"/><path d="m10 10 2 1 2-1M5 18l-2 3h6m10-3 2 3h-6"/><path d="M11 7h.01M13 7h.01"/>
 {:else}<path d={paths[name] ?? paths.arrow}/>{/if}
</svg>
