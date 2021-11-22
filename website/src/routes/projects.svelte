<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  // see https://kit.svelte.dev/docs#loading
  export const load: Load = async ({ fetch }) => {
    const res = await fetch('/api/projects.json');

    if (res.ok) {
      const projects = await res.json();

      return {
        props: { projects },
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message)
    };
  };
</script>

<script lang="ts">
  import type { Project } from '$lib/data/types';
	export let projects: Project[];
</script>

<svelte:head>
	<title>Projects | Karel Frederix</title>
  <meta name="description" content="An overview of some recent projects which I have worked on.">
</svelte:head>

<div>
  <h1 class="font-bold text-2xl mb-6">Projects</h1>
  <div class="mb-6">
    <p class="text-lg">An overview of some recent projects I have worked on.</p>
  </div>
  <div class="w-900">
    {#each projects as project}
    <div class="px-8 pb-8 pt-6 -mx-4 md:rounded-lg bg-white shadow-xl">
      <article>
        <h3 class="leading-none">
          <span class="font-normal text-xl text-green-600">{project.name}</span>
        </h3>
        {@html project.description}
        {#each project.photos as photo}
          <img class="mt-8 rounded-lg border border-gray-100" alt={project.name} src={photo.url} />
        {/each}
      </article>
    </div>
    {/each}
  </div>
</div>

<style>
  article {
    @apply text-base;
  }
</style>
