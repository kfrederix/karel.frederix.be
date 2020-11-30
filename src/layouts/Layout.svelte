<script>
  import Header from '../components/Header.svelte';
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

  :root {
    --balloon-color: #06395a;
    --balloon-font-size: 14px;
  }
</style>

<svelte:head>
  <title>Karel Frederix</title>
  <meta name="description" content="Karel Frederix is a Software Engineer based in Hasselt, BE" />
  <meta name="theme-color" content="#4A4A4A" />
  <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/turbolinks/5.2.0/turbolinks.js" integrity="sha512-G3jAqT2eM4MMkLMyQR5YBhvN5/Da3IG6kqgYqU9zlIH4+2a+GuMdLb5Kpxy6ItMdCfgaKlo2XFhI0dHtMJjoRw==" crossorigin="anonymous" defer></script>
</svelte:head>
<Header aboutMe={data.aboutMe} permalink={request.permalink} isLarge={request.permalink === '/'} />
<section>
  <div class="container">
    {@html templateHtml}
  </div>
</section>
