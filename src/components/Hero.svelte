<script>
  export let avatarUrl;
  export let title;
  export let subTitle;
</script>

<style>
  h1 {
    color: #eee;
    margin: 1.5rem 0 1rem 0;
    font-size: 2.5rem;
  }
  h2 {
    margin: 0.5rem 0 0 0;
    font-size: 1.3rem;
    color: #cdd;
  }
  .hero {
    background-color: var(--header-bg-color);
    padding: 2rem 0 3rem 0;
  }
  .hero-inner {
    padding: 0 1rem;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 940px;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .hero-inner-part {
    padding: 0 1rem;
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
    <div class="hero-inner-part">
      <!--
        Best Practice:
          specifying width and height on the img tag explicitly allows 
          the image to take up the space before it loads
      -->
      <img class="avatar" alt="avatar" src="{avatarUrl}?h=361" width="120" height="120"/>
    </div>
    <div class="hero-inner-part">
    <h1>{title}</h1>
    <h2>{subTitle}</h2>
    </div>
  </div>
</div>
