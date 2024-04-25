import storyblokApi from 'shared/lib/storyblokApi';

const fetchStoryBySlug = async (slug: string) => {
  const response = await storyblokApi.get(`cdn/stories/blog/${slug}`, {
    version: process.env.NODE_SERVER === 'RELEASE' ? 'published' : 'draft',
    resolve_links: 'story',
  });

  return response;
};

export default fetchStoryBySlug;
