/* eslint-disable prettier/prettier */
import type { ISbStoryData } from '@storyblok/react';
import type { GetStaticProps, NextPage } from 'next';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import { metaData } from 'shared/constants';
import { BlogGeneral, STORY_STORE_KEY } from 'widgets/BlogGeneral';
import { MainLayout } from 'widgets/MainLayout';
type BlogPageProps = AppProps & {
  fallback: ISbStoryData<ArticleContent>[];
  tags: StoryTag[];
};

const BlogPage: NextPage<BlogPageProps> = ({ fallback, tags }) => (
  <MainLayout {...metaData.blog}>
    <SWRConfig value={{ fallback }}>
      <BlogGeneral tags={tags} />
    </SWRConfig>
  </MainLayout>
);

export const getStaticProps: GetStaticProps = async () => {
  let stories = [];
  let tags = [];

  const fetchStories = (await import('shared/utils')).fetchStories;
  const fetchStoryTags = (await import('shared/utils')).fetchStoryTags;

  try {
    const storiesResponse = await fetchStories({});

    if (storiesResponse) stories = storiesResponse.data;

    const tagsResponse = await fetchStoryTags();

    if (tagsResponse) tags = tagsResponse;
  } catch (error) {
    console.log('Error', error);
  }

  return {
    props: {
      fallback: { [STORY_STORE_KEY(1)]: stories },
      tags,
    },
    revalidate: 10,
  };
};

export default BlogPage;
