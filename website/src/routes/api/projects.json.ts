import type { RequestHandler } from '@sveltejs/kit';
import type { Project } from '$lib/data/types';
import { getProjects } from '$lib/data/dataClient';

// GET /api/projects.json
export const get: RequestHandler = async (/*request*/) => {
  const projects: Project[] = await getProjects();

	return {
    body: projects,
  };
};