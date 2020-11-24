<script>
  export let aboutMe;
  export let permalink;
</script>

<style>
  h1, h3 {
    margin: 0.5rem 0;
    color: #222;
  }
  h1 {
    margin-top: 1.5rem;
  }
  .site-header {
    text-align: center;
    padding: 2.0rem 0.5rem 1.0rem 0.5rem;
    background-color: #efefef;
    margin: 0 -1.25rem;
  }
  .avatar {
    vertical-align: middle;
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  .nav-links {
    margin-top: 1rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav-links a {
    display: block;
    margin: 0 0.5rem;
    color: #00d1b2;
    text-decoration: none;
    border-radius: 5%;
    padding: 4px 8px;
    border-bottom: solid 2px transparent;
  }
  .nav-links a:hover,
  .nav-links a:active,
  .nav-links a.is-active {
    border-bottom-color:  #444;
  }
</style>

<div class="site-header">
  <img class="avatar" alt="avatar" src="{aboutMe.imageUrl}?h=120"/>
  <h1>{aboutMe.name}</h1>
  <h3>{aboutMe.title}</h3>
  <div class="nav-links" role="navigation">
    <a href="/" class:is-active={permalink === '/'}>About</a>
    <a href="/projects"  class:is-active={permalink.indexOf('/projects') === 0}>Projects</a>
  </div>
</div>