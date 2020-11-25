<script>
  export let data;
</script>

<style>
  .projects {
    margin-block-start: 2rem;
  }
  .project {
    margin: 0 -0.5rem;
  }
  .project:not(:first-child) {
    margin-top: 1.5rem;
  }
  .thumbnail {
    width: 80;
    height: 80;
    margin: 1rem;
  }
  h2 {
    margin-top: 0;
    color: #007b69;
    font-size: 1.3rem;
  }
</style>

<svelte:head>
  <meta name="description" content="An overview of recent work by Karel Frederix" />
</svelte:head>

<h1>Projects</h1>
<p>An overview of some recent projects which I have worked on.</p>
<div class="projects">
  {#each data.projects as project}
    <div class="project box">
      <h2 id={project.slug}>{project.name}</h2>
      {@html project.description}
      <div class="photo-gallery">
        {#each project.photos as photo, index}
          <img class="thumbnail" alt="{project.name} {index + 1}" src="{photo.url}?w=80&h=80&fit=crop&crop=center" />
        {/each}
      </div>
    </div>
  {/each}
</div>
