import { StarFilledIcon } from '@radix-ui/react-icons';
import { Repo } from '@/lib/types';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';

interface RepoCardProps {
  repo: Repo;
}

export function RepoCard({ repo }: RepoCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>{repo.name}</CardTitle>
        <div className="flex flex-row items-center space-x-1">
          <span>{repo.stargazers_count}</span>
          <StarFilledIcon className="w-4 h-4" color="#FFCA16" />
        </div>
      </CardHeader>
      <CardContent>{repo.description}</CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full" asChild>
          <a href={repo.html_url} target="_blank">
            Open
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
