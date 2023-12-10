export interface Repo {
  id: number;
  name: string;
  full_name: string;
  forks: number;
  language: string;
  description?: string;
  stargazers_count: string;
  html_url: string;
}

export interface QueryResult {
  total_count: number;
  incomplete_results: boolean;
  items: Repo[];
}
