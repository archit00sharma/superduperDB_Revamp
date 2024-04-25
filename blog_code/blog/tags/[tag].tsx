import type { ISbStoryData } from '@storyblok/react';
import type { GetStaticProps, NextPage } from 'next';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import { metaData } from 'shared/constants';
import { BlogGeneral, STORY_STORE_KEY } from 'widgets/BlogGeneral';
import { MainLayout } from 'widgets/MainLayout';

type TagPageProps = AppProps & {
  fallback: ISbStoryData<ArticleContent>[];
  tags: StoryTag[];
};

const TagPage: NextPage<TagPageProps> = ({ fallback, tags }) => (
  <MainLayout {...metaData.blog}>
    <SWRConfig value={{ fallback }}>
      <BlogGeneral tags={tags} />
    </SWRConfig>
  </MainLayout>
);

export const getStaticProps: GetStaticProps = async (context) => {
  const { tag } = context.params as { tag: string };
  let stories = [];
  let tags = [];

  const fetchStories = (await import('shared/utils')).fetchStories;
  const fetchStoryTags = (await import('shared/utils')).fetchStoryTags;

  try {
    const storiesResponse = await fetchStories({ options: { with_tag: tag } });

    if (storiesResponse) stories = storiesResponse.data;

    const tagsResponse = await fetchStoryTags();

    if (tagsResponse) tags = tagsResponse;
  } catch (error) {
    console.log('Error', error);
  }

  const key = STORY_STORE_KEY(1, tag);

  return {
    props: {
      fallback: { [key]: stories },
      tags,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  const fetchStories = (await import('shared/utils')).fetchStories;

  const { data } = await fetchStories({});

  const paths = data.stories
    .map(({ tag_list }: ISbStoryData<ArticleContent>) => {
      const allTags = tag_list.map((tag) => ({
        params: {
          tag,
        },
      }));

      return allTags;
    })
    .flat();

  return {
    paths,
    fallback: 'blocking',
  };
}

export default TagPage;
