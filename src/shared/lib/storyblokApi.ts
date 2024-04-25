import { apiPlugin, getStoryblokApi, storyblokInit } from '@storyblok/react';

const accessToken = process.env.STORYBLOK_ACCESS_TOKEN;

storyblokInit({
  accessToken,
  use: [apiPlugin],
  apiOptions: { region: 'us' },
});

const storyblokApi = getStoryblokApi();

export default storyblokApi;
