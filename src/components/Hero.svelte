<script>
  export let avatarUrl;
</script>

<style>
  h1 {
    color: #eee;
    margin: 1.5rem 0 1rem 0;
    font-size: 2.5rem;
    font-weight: 500;
  }
  h2 {
    margin: 2rem 0 0 0;
    font-size: 1.7rem;
    font-weight: 700;
    color: #bbb;
    line-height: 1.5;
  }
  h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.5;
    color: #6aa;
  }
  .hero {
    background-color: var(--header-bg-color);
    padding: 2rem 0 3rem 0;
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
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  @media screen and (max-width: 480px) {
    .hero-inner {
      justify-content: center;
      text-align: center;
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
      <h2>I write code.</h2>
      <h3>Mostly for web.</h3>
    </div>
  </div>
</div>
