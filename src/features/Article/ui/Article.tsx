/* eslint-disable prettier/prettier */
import { DateTime } from 'luxon';
import { createElement, FC, ReactNode } from 'react';
import {
  MARK_LINK,
  NODE_CODEBLOCK,
  NODE_HEADING,
  render,
} from 'storyblok-rich-text-react-renderer';

import { BlogSubscribe } from 'features/BlogSubscribe';
import { Tags } from 'features/Tags';
import { CodeHighlighter } from 'shared/components/CodeHighlighter';
import { Img } from 'shared/components/Img';

import './article.scss';

type Props = {
  article: Article;
};

const headingNodeResolver = (
  children: ReactNode | ReactNode[], // Specify a more specific type here
  props: { level: 1 | 2 | 3 | 4 | 5 | 6 },
): JSX.Element => {
  return createElement(
    `h${props.level}`,
    { className: 'article__content-title' },
    // Ensure children is an array of strings or a single string
    typeof children === 'string' ? children.replace('’', "'") : children,
  );
};

const codeResolver = (children: ReactNode, props: { class: string }) => {
  return <CodeHighlighter code={children as string} codeClassName={props.class} />;
};

const linkMarkResolver = (
  children: ReactNode,
  {
    linktype,
    href,
  }: {
    linktype?: string;
    href?: string;
    target?: string;
  },
) => {
  const props = {
    href: linktype === 'email' ? `mailto:${href}` : href,
    target: '_blank',
  };

  return createElement('a', props, children);
};

const Article: FC<Props> = ({ article }) => {
  const { content, tag_list } = article;
  const tags = tag_list.map((tag) => ({ name: tag, isActive: false }));

  const publishDate = content.publish_date
    ? DateTime.fromSQL(content.publish_date).toFormat('LLLL d, yyyy')
    : null;

  return (
    <section className="article">
      <div className="article__container">
        <Tags tags={tags} size="small" centered />
        <div className="article__body">
          <h1 className="article__title">{content?.heading}</h1>

          {content?.image?.filename && (
            <Img
              className="article__cover"
              imgClassName="article__image"
              src={content.image.filename}
              alt={content.heading}
              width={1064}
              height={500}
            />
          )}

          <div className="article__content">
            {content?.content &&
              render(content.content, {
                markResolvers: {
                  [MARK_LINK]: linkMarkResolver,
                },
                nodeResolvers: {
                  [NODE_HEADING]: headingNodeResolver,
                  [NODE_CODEBLOCK]: codeResolver,
                },
              })}
          </div>

          <div className="article__footer">
            <div className="article__author">
              {content?.author?.story?.content?.photo?.filename && (
                <Img
                  className="article__author-photo"
                  imgClassName="article__author-photo"
                  src={content.author.story.content.photo.filename}
                  sizes="60px, (min-width: 992px) 70px"
                  alt={content?.author?.story?.content?.name}
                  width={60}
                  height={60}
                />
              )}

              <div className="article__author-content">
                <h3 className="article__author-name">{content?.author?.story?.content?.name}</h3>
                <p className="article__author-position">
                  {content?.author?.story?.content?.position}
                </p>
              </div>
            </div>
            <div className="article__date">
              <p className="white-text article__date-heading">Created</p>
              <p>{publishDate}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="article__subscribe-form">
        <BlogSubscribe />
      </div>
    </section>
  );
};

export default Article;
