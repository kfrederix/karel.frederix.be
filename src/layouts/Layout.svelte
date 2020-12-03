<script>
  import Header from '../components/Header.svelte';
  import Hero from '../components/Hero.svelte';
  export let templateHtml, data, request;
</script>

<style>
  @import url('../../assets/style.css');

  .container {
    max-width: 900px;
    margin: 0 auto 2rem auto;
    padding: 0 1.25rem;
  }
  section {
    padding: 2rem 0 1.25rem 0;
  }
</style>

<svelte:head>
  <title>Karel Frederix</title>
  <meta name="description" content="Karel Frederix is a Software Engineer based in Hasselt, BE" />
  <meta name="theme-color" content="#3a3a3a" />
  <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
</svelte:head>

<Header aboutMe={data.aboutMe} permalink={request.permalink} />

{#if request.permalink === '/'}
  <Hero avatarUrl={data.aboutMe.imageUrl} />
{/if}

<section>
  <div class="container">
    {@html templateHtml}
  </div>
</section>
