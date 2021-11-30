import dotenv from 'dotenv';
import sanityClient from '@sanity/client';
import blocksToHtml from '@sanity/block-content-to-html';
import type { About, Project } from './types';

dotenv.config();

const client = sanityClient({
  projectId: process.env['SANITY_PROJECTID'],
  dataset: process.env['SANITY_DATASET'],
  //token: 'sanity-auth-token', // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
});

export const getAbout = async (): Promise<About> => {
  const aboutMe = await client.fetch<About>(
    `*[_type == "about"] { name, title, bio, 'imageUrl': image.asset->url } [0]`
  );
  aboutMe.bio = blocksToHtml({ blocks: aboutMe.bio }); //toMarkdown(data.aboutMe.bio)
  aboutMe.imageUrl += '?h=361';
  return aboutMe;
};

export const getProjects = async (): Promise<Project[]> => {
  const query = `*[_type == "project"] {
    name,
    description,
    "photos": photos[].asset->{
      url,
      "width": metadata.dimensions.width,
      "height": metadata.dimensions.height,
    }
  }`;
  const projects = await client.fetch<Project[]>(query);
  projects.forEach((proj) => {
    proj.description = blocksToHtml({ blocks: proj.description });
    (proj.photos ?? []).forEach((photo) => {
      photo.url += '?w=560';
    });
  });
  return projects;
};
