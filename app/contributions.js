import ContribGraph from '@/components/contrib-graph';

// ponytail: third-party public API (no token). If you need official/stable, switch to GitHub GraphQL + a token in env.
export default async function Contributions({ user }) {
  let data;
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${user}?y=all`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    data = await res.json();
  } catch {
    return null;
  }

  const all = data.contributions.slice().sort((a, b) => (a.date < b.date ? -1 : 1));
  const today = new Date().toISOString().slice(0, 10);
  const thisYear = Number(today.slice(0, 4));

  // Rolling last year starts on the Sunday on or before today minus 364 days, like GitHub's own graph.
  const start = new Date(today + 'T00:00:00Z');
  start.setUTCDate(start.getUTCDate() - 364);
  start.setUTCDate(start.getUTCDate() - start.getUTCDay());
  const startStr = start.toISOString().slice(0, 10);
  const rolling = all.filter((d) => d.date >= startStr && d.date <= today);
  const rollingTotal = rolling.reduce((n, d) => n + d.count, 0);
  if (!rolling.length) return null;

  const years = Object.keys(data.total)
    .map(Number)
    .filter((y) => y < thisYear && data.total[y] > 0)
    .sort((a, b) => b - a)
    .slice(0, 4);

  const views = [
    { key: 'last', label: String(thisYear), caption: `${rollingTotal} contributions in the last year`, days: rolling },
    ...years.map((y) => ({
      key: String(y),
      label: String(y),
      caption: `${data.total[y]} contributions in ${y}`,
      days: all.filter((d) => d.date.startsWith(String(y))),
    })),
  ];

  return <ContribGraph views={views} />;
}
