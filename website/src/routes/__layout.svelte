<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import type { About, Project } from '$lib/data/types';

  // see https://kit.svelte.dev/docs#loading
  export const load: Load = async ({ fetch, page, stuff }) => {
    const currentPath = page.path;
    let { about, projects } = stuff as { about: About, projects: Project[] };

    if (!about || !projects) {
      const [resAbout, resProjects] = await Promise.all([
        fetch('/api/about.json'),
        fetch('/api/projects.json'),
      ]);
  
      if (resAbout.ok) {
        about = await resAbout.json();
      }
      if (resProjects.ok) {
        projects = await resProjects.json();
      }
    }

    return {
      props: { about, currentPath },
      stuff: { about, projects },
    };
  };
</script>

<script lang="ts">
	import '../app.css';
	import Header from '../lib/header.svelte';

	export let about: About;
  export let currentPath: string;
</script>

<header class="max-w-screen-md mx-auto p-4 pt-6">
  <Header {about} {currentPath} />
</header>
<main class="max-w-screen-md mx-auto px-4 py-6">
  <slot />
</main>
