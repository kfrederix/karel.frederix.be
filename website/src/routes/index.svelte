<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  // see https://kit.svelte.dev/docs#loading
  export const load: Load = async ({ stuff }) => {
    return {
      props: { about: stuff.about }
    }
  };
</script>

<script lang="ts">
  import type { About } from '$lib/data/types';
  export let about: About;
</script>

<svelte:head>
	<title>Karel Frederix | Software Engineer</title>
  <meta name="description" content="Karel Frederix is a Software Engineer based in Belgium (Limburg area).">
</svelte:head>

<div>
  <h1 class="mb-6 font-bold text-2xl dark:text-white">About me</h1>
  <article class="article-lg">
    {@html about.bio}
  </article>
</div>
