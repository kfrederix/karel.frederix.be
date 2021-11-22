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
	<title>Karel Frederix</title>
</svelte:head>

<div>
  <h1 class="font-bold text-2xl mb-6">About me</h1>
  <article>
    {@html about.bio}
  </article>
</div>
