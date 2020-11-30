<script>
  export let data;
</script>

<style>
  .about {
    margin-bottom: 2rem;
  }
</style>

<div class="about">
  <h1>About me</h1>
  <p>
    {@html data.aboutMe.bio}
  </p>
</div>
