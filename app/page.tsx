import { RepoList } from '@/components/repo-list';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { languages, times } from '@/lib/constants';
import { formatParams, getRepos } from '@/lib/query';
import { QueryResult } from '@/lib/types';

async function getData(): Promise<QueryResult> {
  const { params } = formatParams(languages.C, times['Past Day']);
  const res = await getRepos(params);
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col space-y-12">
      <h1 className="text-4xl font-bold mt-20 px-4 text-center">
        Githab trends
      </h1>
      <RepoList repos={data.items} />
    </main>
  );
}
