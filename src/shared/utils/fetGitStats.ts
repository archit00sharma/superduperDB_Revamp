import axios from 'axios';
import { useEffect, useState } from 'react';

const useGitHubRepoStats = () => {
  const [stats, setStats] = useState({ starCount: null, forksCount: null });

  useEffect(() => {
    const fetchRepoStats = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/SuperDuperDB/superduperdb`);
        const { stargazers_count, forks_count } = response.data;
        setStats({ starCount: stargazers_count, forksCount: forks_count });
      } catch (error) {
        console.error('Error fetching GitHub repository stats:', error);
      }
    };

    fetchRepoStats();
  }, []);

  return stats;
};

export default useGitHubRepoStats;
