import { LangSelect } from '@/components/lang-select';
import { RepoList } from '@/components/repo-list';
import { TimeSelect } from '@/components/time-select';
import { languages, times } from '@/lib/constants';
import { formatParams, getRepos } from '@/lib/query';
import { QueryResult } from '@/lib/types';

async function getData(lang: string, time: number): Promise<QueryResult> {
  const { params } = formatParams(lang, time);
  const res = await getRepos(params);
  return res.json();
}

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    lang?: string;
    time?: string;
  };
}) {
  const lang = searchParams?.lang || languages['Any'];
  const time = Number(searchParams?.time) || times['Past Day'];
  const data = await getData(lang, time);

  return (
    <main className="flex min-h-screen flex-col space-y-12">
      <h1 className="text-4xl font-extrabold tracking-tight mt-20 px-4 text-center lg:text-5xl">
        Githab trends
      </h1>
      <div className="flex px-4 justify-center space-x-4">
        <LangSelect />
        <TimeSelect />
      </div>
      <RepoList repos={data.items} />
    </main>
  );
}
