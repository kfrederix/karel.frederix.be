<script>
  export let data;
</script>

<style>
  .about {
    margin-bottom: 2rem;
  }
</style>

<svelte:head>
  <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ -->
  <link rel="prefetch" href="/projects" />
</svelte:head>

<div class="about">
  <h1>About me</h1>
  <p>
    {@html data.aboutMe.bio}
  </p>
</div>
