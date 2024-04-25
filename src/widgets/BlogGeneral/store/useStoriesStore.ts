import { ParsedUrlQuery } from 'querystring';
import useSWR from 'swr';

import axiosInstance from 'shared/lib/axiosInstance';

export const STORY_STORE_KEY = (page: number, tag?: string) =>
  `/api/blog/getStories?page=${page}${tag ? '&tag=' + tag : ''}`;

export const storyFetcher = async (key: string) => {
  const { data } = await axiosInstance.get(key);

  return data;
};

interface IStoriesOptions {
  query?: ParsedUrlQuery;
  page?: number;
}

const useStoriesStore = ({ query, page = 1 }: IStoriesOptions) => {
  return useSWR<StoriesResponse | null>(
    STORY_STORE_KEY(page, (query?.tag ?? '').toString()),
    storyFetcher,
    {
      keepPreviousData: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: true,
    },
  );
};

export default useStoriesStore;
