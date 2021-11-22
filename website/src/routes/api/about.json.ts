import type { RequestHandler } from '@sveltejs/kit';
import type { About } from '$lib/data/types';
import { getAbout } from '$lib/data/dataClient';

// GET /api/about.json
export const get: RequestHandler = async (/*request*/) => {
  const about: About = await getAbout();

	return {
    body: about,
  };
};