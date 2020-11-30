<script>
  export let aboutMe;
  export let permalink;
  export let isLarge;
</script>

<style>
  h1, h2 {
    color: #fff;
  }
  h1 {
    margin: 1.5rem 0 1.0rem 0;
  }
  h2 {
    margin: 0.5rem 0 1.5rem 0;
    font-size: 1.3rem;
    color: #ccc;
  }
  header {
    text-align: center;
    padding: 2.0rem 0 0 0;
    background-color: #4A4A4A;
    margin: 0 auto;
  }
  .avatar {
    vertical-align: middle;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    /*border: solid 4px #ddd;*/
    box-shadow: 0 0 1rem 0 rgba(220,220,220,0.3);
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  nav {
    margin-top: 1rem;
    padding: 0 0 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav a {
    display: block;
    margin: 0;
    padding: 0.2rem 1rem;
    color: #00d1b2;
    text-decoration: none;
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

  @media screen and (min-width: 1200px) {
    header {
      border-radius: 0 0 1rem 1rem;
      max-width: 940px;
    }
  }
</style>

<header>
  <!--
    Best Practice:
     specifying width and height on the img tag explicitly allows 
     the image to take up the space before it loads
  -->
  <img class="avatar" alt="avatar" src="{aboutMe.imageUrl}?h=361" width="120" height="120"/>

  <h1>Hi! I'm Karel</h1>
  <h2>I build web things.</h2>
  <nav class="nav-links" role="navigation">
    <a href="/" class:is-active={permalink === '/'}>About</a>
    <a href="/projects"  class:is-active={permalink.indexOf('/projects') === 0}>Projects</a>
  </nav>
</header>
