import Link from 'next/link';
import { type FC, useMemo } from 'react';

import { Tags } from 'features/Tags';
import { Img } from 'shared/components/Img';

import './article-teaser.scss';

type Props = {
  article: ArticleContent;
  slug: string;
  tags: string[];
  priority?: boolean;
};

const ArticleTeaser: FC<Props> = ({ article, slug, tags, priority = false }) => {
  const tagsList = useMemo(() => tags.map((tag) => ({ name: tag, isActive: false })), [tags]);

  return (
    <div className="article-teaser">
      <div>
        <Link href={`/blog/${slug}`}>
          {article?.image?.filename && (
            <Img
              className="article-teaser__cover"
              imgClassName="article-teaser__image"
              src={article.image.filename}
              alt={article.heading}
              width={450}
              height={272}
              blur={!priority}
              priority={priority}
            />
          )}
        </Link>
      </div>
      <div>
        <Tags tags={tagsList} />
      </div>

      <div>
        <Link href={`/blog/${slug}`}>
          <h3>{article?.heading}</h3>
        </Link>
      </div>
    </div>
  );
};

export default ArticleTeaser;
