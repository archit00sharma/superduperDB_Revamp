import storyblokApi from 'shared/lib/storyblokApi';

const fetchStoryTags = async () => {
  const response = await storyblokApi.get('cdn/tags', {
    version: process.env.NODE_SERVER === 'RELEASE' ? 'published' : 'draft',
    token: process.env.STORYBLOK_ACCESS_TOKEN ?? '',
  });

  return response ? response.data.tags : [];
};

export default fetchStoryTags;
