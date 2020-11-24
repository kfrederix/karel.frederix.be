<script>
  import Header from '../components/Header.svelte';
  export let templateHtml, data, request;
</script>

<style>
  :global(h1) {
    /*font-style: italic;*/
  }
  :global(h3) {
    color: #00ad93;
  }
  .container {
    max-width: 900px;
    margin: 0 auto 2rem auto;
    padding: 0 1.25rem;
  }
  .content {
    padding-top: 1rem;
  }

  :root {
    --balloon-color: #06395a;
    --balloon-font-size: 14px;
  }
</style>

<svelte:head>
  <link rel="stylesheet" href="/style.css" />
  <link rel="stylesheet" href="https://unpkg.com/balloon-css/balloon.min.css" />
  <title>Karel Frederix</title>
</svelte:head>
<div class="container">
  <Header aboutMe={data.aboutMe} permalink={request.permalink} />
  <div class="content">
    {@html templateHtml}
  </div>
</div>
