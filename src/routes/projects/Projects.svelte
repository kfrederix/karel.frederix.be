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
  .photo-gallery {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
  }
  .thumbnail {
    margin: 0.5rem 0.2rem;
    width: 100%;
    max-width: 400px;
  }
  .thumbnail img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    /*box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);*/
    border: solid 1px #efefef;
  }
  h2 {
    margin-top: 0;
    color: #007b69;
    font-size: 1.3rem;
    line-height: 1;
  }

  /*
    a nice trick for aestetically pleasing anchor offsets,
    taking into account our fixed header on top:
    https://stackoverflow.com/a/13184714
    (also see: https://css-tricks.com/hash-tag-links-padding/)
  */
  .project-anchor {
    display: block;
    position: relative;
    top: -2rem;
    visibility: hidden;
  }
</style>

<svelte:head>
  <meta name="description" content="An overview of recent work by Karel Frederix" />

  <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ -->
  <link rel="prefetch" href="/" />
</svelte:head>

<h1>Projects</h1>
<p>An overview of some recent projects which I have worked on.</p>
<div class="projects">
  {#each data.projects as project}
    <div class="project box">
      <div class="project-anchor" id={project.slug}></div>
      <h2>{project.name}</h2>
      {@html project.description}
      <div class="photo-gallery">
        {#each project.photos as photo, index}
          <div class="thumbnail">
            <img alt="{project.name} {index + 1}" src="{photo.url}?w=400" />
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>
