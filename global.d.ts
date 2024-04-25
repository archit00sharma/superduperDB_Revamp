declare module 'remark-html' {
  const html: any;
  export default html;
}

type CMSAsset = {
  alt: string;
  filename: string;
};

type ArticleContent = {
  heading: string;
  meta_description: string;
  publish_date: string;
  content: any;
  image: CMSAsset;
  author: {
    story: {
      content: {
        name: string;
        photo: CMSAsset;
        position: string;
      };
    };
  };
};

type Article = {
  content: ArticleContent;
  full_slug: string;
  name: string;
  published_at: string | null;
  slug: string;
  uuid: string;
  tag_list: string[];
};

type StoriesResponse = {
  stories: Article[];
  totalPages: number;
};

type StoryTag = { name: string; taggings_count: number };

interface IError {
  errorType?: string;
  message: string;
}
