import { useRouter } from 'next/router';
import { FC, useCallback, useMemo, useState } from 'react';

import { ArticleTeaser } from 'features/ArticleTeaser';
import { BlogSubscribe } from 'features/BlogSubscribe';
import { Tags } from 'features/Tags';
import { Button } from 'shared/components/Button';
import { handleScrollToTop } from 'shared/utils';

import './blog-general.scss';
import useStoriesStore from '../store/useStoriesStore';

type BlogGeneralProps = {
  tags: StoryTag[];
};

const BlogGeneral: FC<BlogGeneralProps> = ({ tags }) => {
  const router = useRouter();
  const { query } = router;

  const [page, setPage] = useState(1);

  const { data } = useStoriesStore({ query, page });
  const { stories: articles, totalPages } = data ?? {};

  const mappedTags = useMemo(() => {
    return tags
      ? tags?.map((t) => {
          if (query.tag?.includes(t.name)) return { ...t, isActive: true };

          return { ...t, isActive: false };
        })
      : [];
  }, [query, tags]);

  const handleShowMoreClick = useCallback(() => {
    setPage((prev) => prev + 1);
    handleScrollToTop();
  }, []);

  return (
    <section className="blog-general">
      <div className="blog-general__container">
        <Tags tags={mappedTags} size="big" withAllTopics />

        {articles && articles?.length > 0 ? (
          <div className="blog-general__stories">
            {articles.map((article) => (
              <div key={article.uuid}>
                <ArticleTeaser
                  article={article.content}
                  slug={article.slug}
                  tags={article.tag_list}
                />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h3>There are no articles yet</h3>
          </div>
        )}
        {page < Number(totalPages) ? (
          <div className="blog-general__buttons">
            <div className="blog-general__button">
              <Button
                label="Show more"
                fullWidth={true}
                variant="outlined"
                isDisabled={false}
                onClick={handleShowMoreClick}
              />
            </div>
          </div>
        ) : null}
        <div className="blog-general__subscribe-form">
          <BlogSubscribe />
        </div>
      </div>
    </section>
  );
};

export default BlogGeneral;
