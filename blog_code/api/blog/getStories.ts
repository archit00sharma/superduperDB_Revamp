/* eslint-disable prettier/prettier */
import { NextApiRequest, NextApiResponse } from 'next';

import { storyBlokBlogFolder } from 'shared/constants';
import storyblokApi from 'shared/lib/storyblokApi';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  if (req.method === 'GET') {
    const { query } = req;
    const tags = [query?.tag] ?? query['tag[]'] ?? [];
    const page = Number(query?.page) ?? 1;

    try {
      const response = await storyblokApi.get('cdn/stories', {
        version: process.env.NODE_SERVER === 'RELEASE' ? 'published' : 'draft',
        starts_with: storyBlokBlogFolder,
        with_tag: tags.toString(),
        page,
      });

      if (response) return res.status(200).json({ ...response.data, totalPages: response.total });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
};

export default handler;
