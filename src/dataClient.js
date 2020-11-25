const sanityClient = require('@sanity/client');
//const toMarkdown = require('@sanity/block-content-to-markdown')
const blocksToHtml = require('@sanity/block-content-to-html');

const client = sanityClient({
  projectId: process.env.SANITY_PROJECTID,
  dataset: process.env.SANITY_DATASET,
  //token: 'sanity-auth-token', // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
});

module.exports = {
  getAbout,
  getProjects,
};

async function getAbout() {
  const aboutMe = await client.fetch(`*[_type == "about"] { name, title, bio, 'imageUrl': image.asset->url } [0]`);
  aboutMe.bio = blocksToHtml({ blocks: aboutMe.bio }); //toMarkdown(data.aboutMe.bio)
  return aboutMe;
}

async function getProjects() {
  const query = `*[_type == "project"] {
    name,
    description,
    "photos": photos[].asset->{
      url,
      "width": metadata.dimensions.width,
      "height": metadata.dimensions.height,
    }
  }`;
  const projects = await client.fetch(query);
  projects.forEach(proj => {
    proj.description = blocksToHtml({ blocks: proj.description });
  })
  return projects;
}
