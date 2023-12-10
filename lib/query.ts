import { stringify } from 'querystring';

export function formatParams(lang: string, time: number) {
  const language = lang !== 'any' ? ` language:${lang}` : '';

  const startDate = new Date();

  startDate.setDate(startDate.getDate() - time);

  const startDateString = `
      ${startDate.getFullYear()}-${('0' + (startDate.getMonth() + 1)).slice(
        -2,
      )}-${('0' + startDate.getDate()).slice(-2)}
    `.trim();

  const key = startDateString + language;

  const params = stringify({
    sort: 'stars',
    order: 'desc',
    q: 'created:>' + key,
    per_page: 10,
  });

  return { key, params };
}

export async function getRepos(searchParams = '') {
  const url = `https://api.github.com/search/repositories?${searchParams}`;

  console.log('getRepos URL', { url });

  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github.preview',
    },
  });

  return response;
}
