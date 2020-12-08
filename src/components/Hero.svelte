<script>
  export let avatarUrl;
</script>

<style>
  h1 {
    color: #eee;
    margin: 1rem 0 0rem 0;
    font-size: 2.25rem;
    font-weight: 500;
  }
  h2 {
    margin: 0.75rem 0 0.5rem 0;
    font-size: 1.5rem;
    font-weight: 400;
    color: #bbb;
    line-height: 1.5;
  }
  .hero {
    background-color: var(--header-bg-color);
    padding: 2rem 0 2.5rem 0;
  }
  .hero-inner {
    padding: 0 1.25rem;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 940px;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .avatar {
    vertical-align: middle;
    /* width: 120px;
    height: 120px; */
    border-radius: 50%;
    /*border: solid 4px #ddd;*/
    box-shadow: 0 0 1rem 0 rgba(220,220,220,0.3);
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    .hero-inner {
      justify-content: center;
      text-align: center;
      width: 100%;
    }
  }
</style>


<div class="hero">
  <div class="hero-inner">
    <div>
      <!--
        Best Practice:
         specifying width and height on the img tag explicitly allows 
         the image to take up the space before it loads
      -->
      <img class="avatar" alt="avatar" src="{avatarUrl}?h=361" width="120" height="120"/>
    </div>
    <div>
      <h1>Hi! I'm Karel.</h1>
      <h2>I build web things.</h2>
    </div>
  </div>
</div>
