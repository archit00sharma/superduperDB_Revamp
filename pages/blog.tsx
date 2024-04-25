/* eslint-disable prettier/prettier */
import { useEffect } from 'react';

const BlogPage = () => {
  useEffect(() => {
    // Redirect to your custom site URL when the component mounts
    window.location.href = 'https://blog.superduperdb.com/';
  }, []);

  return null;
};

export default BlogPage;
