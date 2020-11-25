<script>
  export let data;
</script>

<style>
  .about {
    margin-bottom: 2rem;
  }
</style>

<div class="about">
  <h1>Hi! I'm Karel</h1>
  <p>{@html data.aboutMe.bio}</p>
</div>