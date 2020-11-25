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
  <title>Karel Frederix</title>
  <meta name="description" content="Karel Frederix is a Software Engineer based in Hasselt, BE" />
  <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/manifest.json" />
  <link rel="stylesheet" href="/style.css" />
</svelte:head>
<Header aboutMe={data.aboutMe} permalink={request.permalink} />
<section>
  <div class="container">
    {@html templateHtml}
  </div>
</section>
