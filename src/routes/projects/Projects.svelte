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
  h3 {
    margin-top: 0;
  }
</style>

<h2>Projects</h2>
<p>
  An overview of some recent projects which I have worked on.
</p>
<div class="projects">
  {#each data.projects as project}
    <div class="project box">
      <h3>{project.name}</h3>
      {@html project.description}
      <div class="photo-gallery">
        {#each project.photos as photo, index}
          <img class="thumbnail" alt="{project.name} {index+1}" src="{photo.url}?w=80&h=80&fit=crop&crop=center" />
        {/each}
      </div>
    </div>
  {/each}
</div>
