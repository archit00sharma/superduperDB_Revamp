import { useRouter } from 'next/router';
import { FC, useCallback } from 'react';

import { Tag } from 'shared/components/Tag';

import './tags.scss';

const allTopics = 'All topics';

type TagsProps = {
  tags: { name: string; taggings_count?: number; isActive: boolean }[];
  centered?: boolean;
  size?: 'small' | 'big';
  withAllTopics?: boolean;
};

const Tags: FC<TagsProps> = ({ tags, centered = false, size = 'small', withAllTopics = false }) => {
  const router = useRouter();
  const { pathname } = router;

  const handleTagClick = useCallback(
    (tagName: string) => {
      router.replace(tagName === allTopics ? '/blog' : `/blog/tags/${tagName}`);
    },
    [router],
  );

  return (
    <div className={`tags__container ${centered ? 'tags__container_centered' : ''}`}>
      {withAllTopics ? (
        <Tag
          name={allTopics}
          isActive={pathname === '/blog'}
          size={size}
          onClick={() => handleTagClick(allTopics)}
        />
      ) : null}
      {tags.map(({ name, isActive }) => (
        <Tag
          key={name}
          name={name}
          isActive={isActive}
          size={size}
          onClick={() => handleTagClick(name)}
        />
      ))}
    </div>
  );
};

export default Tags;
