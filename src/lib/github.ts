import axios from 'axios';
import Repository from './Repository';

const CACHE_KEY_PREFIX = 'github_repos_';
const CACHE_EXPIRATION_MS = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Function to get data from localStorage
function getCache(username: string): { data: Repository[]; timestamp: number } | null {
  const cachedData = localStorage.getItem(CACHE_KEY_PREFIX + username);
  return cachedData ? JSON.parse(cachedData) : null;
}

// Function to set data to localStorage
function setCache(username: string, data: Repository[]): void {
  const cacheObject = {
    data,
    timestamp: Date.now() // Save the current timestamp
  };
  localStorage.setItem(CACHE_KEY_PREFIX + username, JSON.stringify(cacheObject));
}

export async function fetchGitHubRepos(username: string): Promise<Repository[]> {
  const apiUrl = `https://api.github.com/users/${username}/repos`;

  // Check if data is already in cache
  const cachedRepos = getCache(username);
  if (cachedRepos && (Date.now() - cachedRepos.timestamp < CACHE_EXPIRATION_MS)) {
    return cachedRepos.data;
  }

  try {
    const { data } = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      }
    });

    const repositories: Repository[] = await Promise.all(
      data.map(async (repo: any) => {
        return {
          id: repo.id,
          name: repo.name,
          description: repo.description || '',
          topics: repo.topics || [], 
          html_url: repo.html_url,
          stars: repo.stargazers_count || 'N/A',
          views: repo.watchers_count || 'N/A',
        };
      })
    );

    // Store fetched data in cache
    setCache(username, repositories);

    return repositories;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
}
