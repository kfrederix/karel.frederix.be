<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  // see https://kit.svelte.dev/docs#loading
  export const load: Load = async ({ fetch, page }) => {
    const currentPath = page.path;
    const res = await fetch('/api/about.json');

    if (res.ok) {
      const about = await res.json();

      return {
        props: { about, currentPath },
        stuff: { about },
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message)
    };
  };
</script>

<script lang="ts">
	import '../app.css';
	import Header from '../lib/header.svelte';
  import type { About } from '$lib/data/types';

	export let about: About;
  export let currentPath: string;
</script>

<header class="max-w-screen-md mx-auto p-4 pt-6">
  <Header {about} {currentPath} />
</header>
<main class="max-w-screen-md mx-auto px-4 py-6">
  <slot />
</main>
