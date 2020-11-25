<script>
  export let aboutMe;
  export let permalink;
</script>

<style>
  h1, h2 {
    color: #fff;
  }
  h1 {
    margin: 1.5rem 0 1.0rem 0;
  }
  h2 {
    margin: 0.5rem 0;
    font-size: 1.3rem;
    color: #ddd;
    text-transform: uppercase;
  }
  header {
    text-align: center;
    padding: 2.0rem 0.5rem 1.0rem 0.5rem;
    background-color: #4A4A4A;
    max-width: 900px;
    margin: 0 auto;
  }
  .avatar {
    vertical-align: middle;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: solid 4px #ddd;
  }
  nav {
    margin-top: 1rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav a {
    display: block;
    margin: 0 0.5rem;
    color: #00d1b2;
    text-decoration: none;
    padding: 4px 0;
    border-bottom: solid 2px transparent;
  }
  nav a:hover:not(.is-active),
  nav a:active:not(.is-active) {
    color: #00ffd9;
  }
  nav a.is-active {
    border-bottom-color:  #00ffd9;
    pointer-events: none;
  }
</style>

<header>
  <!--
    Best Practice:
     specifying width and height on the img tag explicitly allows 
     the image to take up the space before it loads
  -->
  <img class="avatar" alt="avatar" src="{aboutMe.imageUrl}?h=361" width="120" height="120"/>

  <h1>{aboutMe.name}</h1>
  <h2>{aboutMe.title}</h2>
  <nav class="nav-links" role="navigation">
    <a href="/" class:is-active={permalink === '/'}>About</a>
    <a href="/projects"  class:is-active={permalink.indexOf('/projects') === 0}>Projects</a>
  </nav>
</header>