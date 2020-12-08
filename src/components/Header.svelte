<script>
  export let aboutMe;
  export let permalink;
</script>

<style>
  header {
    padding: 0;
    margin: 0;
    background-color: var(--header-bg-color);
  }
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 940px;
    margin: 0 auto;
    padding: 1rem .75rem 1rem 1.25rem;
    /*border-bottom: solid 1px #666;*/

    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
  }
  a.brand {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 800;
    text-transform: lowercase;
    text-decoration: none;
  }
  nav {
    /* margin-top: 1rem;
    padding: 0 0 0.5rem 0; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav a {
    display: block;
    margin: 0;
    padding: 0 0.5rem;
    color: #00d1b2;
    text-decoration: none;
    /*border-bottom: solid 2px transparent;*/
  }
  nav a:hover:not(.is-active),
  nav a:active:not(.is-active) {
    color: #00ffd9;
  }
  nav a.is-active {
    color:  #00ffd9;
    pointer-events: none;
  }

  @media screen and (max-width: 1024px) {
    .header-container {
      padding: 1rem 0.5rem 1rem 1rem;
    }
  }

  /*@media screen and (min-width: 1200px) {
    header {
      border-radius: 0 0 1rem 1rem;
      max-width: 940px;
    }
  }*/
</style>

<header>
  <div class="header-container">
    <a class="brand" href="/">kfrederix</a>
    <nav class="nav-links" role="navigation">
      <a href="/" class:is-active={permalink === '/'}>About</a>
      <a href="/projects"  class:is-active={permalink.indexOf('/projects') === 0}>Projects</a>
    </nav>
  </div>
</header>
