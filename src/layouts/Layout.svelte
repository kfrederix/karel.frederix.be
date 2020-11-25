<script>
  import Header from '../components/Header.svelte';
  export let templateHtml, data, request;
</script>

<style>
  .container {
    max-width: 900px;
    margin: 0 auto 2rem auto;
    padding: 0 1.25rem;
  }
  section {
    padding-top: 1rem;
  }

  :root {
    --balloon-color: #06395a;
    --balloon-font-size: 14px;
  }
</style>

<svelte:head>
  <link rel="stylesheet" href="/style.css" />
  <title>Karel Frederix</title>
  <meta name="description" content="Karel Frederix is a Software Engineer based in Hasselt, BE" />
</svelte:head>
<Header aboutMe={data.aboutMe} permalink={request.permalink} />
<section>
  <div class="container">
    {@html templateHtml}
  </div>
</section>
