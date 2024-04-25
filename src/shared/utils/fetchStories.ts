import { ISbStoriesParams } from '@storyblok/react';

import { storyBlokBlogFolder } from 'shared/constants';
import storyblokApi from 'shared/lib/storyblokApi';

type FetchStoriesOptions = {
  options?: { with_tag?: string };
  page?: number;
};

const fetchStories = async ({ page = 1, options }: FetchStoriesOptions) => {
  const fetchOptions: ISbStoriesParams = {
    version: process.env.NODE_SERVER === 'RELEASE' ? 'published' : 'draft',
    starts_with: storyBlokBlogFolder,
    ...options,
    page,
  };

  const response = await storyblokApi.get('cdn/stories', { ...fetchOptions });

  return response;
};

export default fetchStories;
