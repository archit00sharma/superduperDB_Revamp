/* eslint @next/next/no-img-element: 0 */

import { ISbStoryData, useStoryblokState } from '@storyblok/react';
import type { GetStaticProps, NextPage } from 'next';
import type { AppProps } from 'next/app';

import { Article } from 'features/Article';
import { MainLayout } from 'widgets/MainLayout';

type ArticlePageProps = AppProps & {
  article: ISbStoryData<ArticleContent>;
};

const ArticlePage: NextPage<ArticlePageProps> = ({ article }) => {
  const story = useStoryblokState(article);

  if (story === null || !story.content) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout
      title={article.content.heading}
      metaTitle={article.content.heading}
      ogTitle={article.content.heading}
      metaDescription={article.content.meta_description}
      url={article.full_slug}
    >
      <Article article={story} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };

  const fetchStoryBySlug = (await import('shared/utils')).fetchStoryBySlug;

  const { data } = await fetchStoryBySlug(slug);

  return {
    props: {
      article: data ? data.story : false,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  const fetchStories = (await import('shared/utils')).fetchStories;

  const { data } = await fetchStories({});

  const paths = data.stories.map(({ slug }: ISbStoryData<ArticleContent>) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export default ArticlePage;
