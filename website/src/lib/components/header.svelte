<script lang="ts">
  import DarkModeToggle from './dark-mode-toggle.svelte';
  import type { About } from '$lib/data/types';

	export let about: About;
  export let currentPath: string;

  let navigation = [
    { name: 'About', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];
</script>

<nav>
  <div class="flex items-center">
    <div class="mr-6 sm:mr-8 xl:-ml-2">
      <a sveltekit:prefetch href="/" class="no-underline">
        <img class="w-14 h-14 sm:w-20 sm:h-20 rounded-full" alt="avatar" src={about.imageUrl} />
      </a>
    </div>
    <div class="flex flex-col items-start justify-center">
      <div class="py-1">
        <a sveltekit:prefetch href="/" class="">
          <span class="leading-none font-extrabold text-xl text-black dark:text-white sm:text-3xl">
            {about.name}
          </span>
        </a>
      </div>

      <div class="py-1 space-x-2 sm:space-x-5 text-sm uppercase text-gray-600 dark:text-gray-400 flex items-center">
        {#each navigation as navItem}
          <a sveltekit:prefetch
            class="hover:text-green-600 dark:hover:text-green-300 {currentPath === navItem.path ? 'font-bold text-green-600 dark:text-green-300' : ''}"
            href={navItem.path}>
            {navItem.name}
          </a>
        {/each}

        <span class="leading-3 hover:text-gray-600 dark:hover:text-green-300">
          <DarkModeToggle></DarkModeToggle>
        </span>
      </div>
    </div>
  </div>
</nav>
