const slugify = require('slugify');
const dataClient = require('../../dataClient');

module.exports = {
  // the all function returns an array of all of the 'request' objects of a route.
  // In this route, we're only returning one.
  // if all() is ommited, an array of [{slug: 'route-name'}] will be set.
  all: async () => [{ slug: 'projects' }],
  // the permalink function takes a 'request' object and returns a relative permalink.
  // In this case "/projects"
  // If permalink() is ommited, ({request}) => `/${request.slug}/` will be placed as the default.
  permalink: ({ request }) => `/${request.slug}`,
  data: async ({ request }) => {
    const projects = (await dataClient.getProjects()).map((p) => {
      return { ...p, slug: slugify(p.name, { lower: true }) };
    });
    return {
      projects,
    };
  },
};
