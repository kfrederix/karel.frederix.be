<script>
  export let data, helpers;
</script>

<style>
  .about {
    margin-bottom: 2rem;
  }
</style>

<svelte:head>
  <!-- <title>Karel Frederix</title> -->
</svelte:head>

<div class="about">
  <h2>Hi! I'm Karel</h2>
  <p>{@html data.aboutMe.bio}</p>
</div>