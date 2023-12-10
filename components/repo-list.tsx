import { Repo } from '@/lib/types';
import { RepoCard } from './repo-card';

interface RepoListProps {
  repos: Repo[];
}

export function RepoList({ repos }: RepoListProps) {
  return (
    <div className="grid grid-cols-1 px-4 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {repos && repos.length > 0 ? (
        repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)
      ) : (
        <span>Rate limit exceeded, try again in a moment</span>
      )}
    </div>
  );
}
