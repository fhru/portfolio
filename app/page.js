import {
  ArrowUpRight, Briefcase, Certificate, DownloadSimple, GithubLogo, GraduationCap, LinkedinLogo, Pulse, Rocket, Skull, Stack,
} from '@phosphor-icons/react/dist/ssr';
import Contributions from './contributions';
import CopyEmail from '@/components/copy-email';
import SiteHeader from '@/components/site-header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const name = 'Fahru Rahman';
const email = 'fhrurhmn@gmail.com';
const github = 'fhru';
const githubUrl = `https://github.com/${github}`;
const linkedin = 'https://www.linkedin.com/in/fahru-rahman';

// name -> Simple Icons slug, optional "/hex" color for brands that are too dark on a dark page
const icons = {
  TypeScript: 'typescript', JavaScript: 'javascript', 'HTML/CSS': 'html5', React: 'react',
  'Next.js': 'nextdotjs/e7e5e4', 'Tailwind CSS': 'tailwindcss', 'shadcn/ui': 'shadcnui/e7e5e4',
  'Node.js': 'nodedotjs', Express: 'express/e7e5e4', 'Cloudflare Workers': 'cloudflareworkers',
  'Cloudflare D1': 'cloudflare', 'Cloudflare R2': 'cloudflare', Workers: 'cloudflareworkers', D1: 'cloudflare',
  'Discord bots': 'discord',
  PostgreSQL: 'postgresql', 'Drizzle ORM': 'drizzle', Prisma: 'prisma/e7e5e4', Supabase: 'supabase', Neon: 'neon',
  Lua: 'lua/e7e5e4', 'Roblox Studio': 'robloxstudio/e7e5e4', Roblox: 'roblox/e7e5e4', Python: 'python', Jupyter: 'jupyter', PHP: 'php', Laravel: 'laravel',
  'CodeIgniter 4': 'codeigniter', Java: 'openjdk/e7e5e4', Git: 'git', GitHub: 'github/e7e5e4', Vercel: 'vercel/e7e5e4', Blender: 'blender', Figma: 'figma',
};

const experience = [
  {
    when: 'Ongoing',
    title: 'Founder, Rubot',
    bullets: [
      'Discord community of 3,500+ members and a store selling Lua scripts for Lucifer (Growtopia). Over 5,000 scripts sold.',
      'Built the sales system end to end so orders run on their own: store, deposits, license keys, role delivery, and an affiliate program.',
      'I run all of it myself: development, operations, and the community.',
    ],
    tags: ['Next.js', 'TypeScript', 'Cloudflare Workers', 'Cloudflare D1', 'Discord bots'],
  },
  {
    when: 'Ongoing',
    title: 'Lua script developer',
    bullets: [
      'Day-to-day scripting for Lucifer, a third-party app for Growtopia.',
      'Own the licensing architecture: a custom loader checks each license against a Cloudflare Workers API, tracks runs in D1, and pulls the script from versioned objects in R2.',
    ],
    tags: ['Lua', 'Cloudflare Workers', 'Cloudflare D1', 'Cloudflare R2'],
  },
];

const projects = [
  {
    title: 'Rubot',
    desc: 'Automated Discord store and web platform for Lua scripts: licenses, deposits, affiliates, and a script loader.',
    img: '/projects/rubot.jpg',
    tags: ['Next.js', 'Workers', 'D1'],
    links: [{ label: 'Website', href: 'https://www.rubot.tech', Icon: ArrowUpRight }],
  },
  {
    title: 'Rubot Discord Server',
    desc: 'Community where the scripts are sold and supported, powered by an automated store bot.',
    preview: 'discord',
    tags: ['Discord bots', 'Workers'],
    links: [{ label: 'Join server', href: 'https://discord.gg/YYWCDpVNes', Icon: ArrowUpRight }],
  },
  {
    title: 'Sibarkumen',
    desc: 'Inventory system for Kelurahan Ujung Menteng. Handles SPB, SPPB, and BAST documents, with a dashboard and an AI assistant.',
    img: '/projects/sibarkumen.jpg',
    tags: ['Next.js', 'PostgreSQL'],
    links: [
      { label: 'Website', href: 'https://sibarkumen.my.id', Icon: ArrowUpRight },
      { label: 'Source', href: 'https://github.com/fhru/sibarkumen', Icon: GithubLogo },
    ],
  },
  {
    title: 'Escape Tsunami for Dino Evolution',
    desc: 'Roblox survival and collection game: outrun tsunamis, rescue dinos, and rebirth for permanent multipliers.',
    img: 'https://tr.rbxcdn.com/180DAY-faa45132139dcdc084c0a2501ffed319/768/432/Image/Webp/noFilter',
    tags: ['Roblox', 'Luau'],
    links: [{ label: 'Play on Roblox', href: 'https://www.roblox.com/games/97211913395042/Escape-Tsunami-For-Dino-Evolution', Icon: ArrowUpRight }],
  },
];

const stack = [
  'TypeScript', 'JavaScript', 'HTML/CSS', 'React', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'Node.js', 'Express',
  'Cloudflare Workers', 'Cloudflare D1', 'Cloudflare R2', 'Discord bots', 'PostgreSQL', 'Drizzle ORM', 'Prisma',
  'Supabase', 'Neon', 'Lua', 'Roblox Studio', 'Rojo', 'Python', 'Jupyter', 'PHP', 'Laravel', 'CodeIgniter 4', 'Java', 'Git', 'GitHub', 'Vercel', 'Blender', 'Photoshop', 'Figma',
];

const education = [
  { when: '2022 - 2026', title: 'Gunadarma University', desc: "Bachelor's degree, Informatics" },
  { when: '2025', title: 'Coding Camp 2025 (Dicoding x DBS)', desc: 'Machine Learning path' },
  { when: '2019 - 2022', title: 'SMK Negeri 1 Kota Bekasi', desc: 'Software Engineering (Rekayasa Perangkat Lunak)' },
];

const certs = [
  'Belajar Pengembangan Machine Learning',
  'Belajar Fundamental Pemrosesan Data',
  'Belajar Analisis Data dengan Python',
  'Belajar Machine Learning untuk Pemula',
  'Machine Learning Terapan',
];

const nav = [
  { id: 'activity', label: 'Activity' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Tech Stack' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
];

function Chip({ name }) {
  const [slug, color] = (icons[name] || '').split('/');
  return (
    <li>
      <Badge variant="outline" className="h-7 gap-1.5 rounded-lg px-2.5 text-sm font-medium text-foreground">
        {slug && <img src={`https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ''}`} alt="" width="16" height="16" loading="lazy" className="size-4" />}
        {name}
      </Badge>
    </li>
  );
}

// Stand-in for a screenshot: a Discord-invite style card drawn with the site's own tokens.
function DiscordPreview() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden border-b bg-secondary" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-graph-4/35 via-graph-3/10 to-transparent" />
      <div className="absolute inset-x-[12%] bottom-[10%] top-[12%] flex flex-col justify-between rounded-xl border bg-card p-4 shadow-xl">
        <div className="flex items-center gap-3">
          <span className="grid size-14 shrink-0 place-items-center rounded-xl border bg-background text-graph-4">
            <Skull size={32} weight="fill" />
          </span>
          <div className="min-w-0">
            <p className="text-lg font-semibold leading-tight text-foreground">Rubot</p>
            <p className="flex items-center gap-1.5 whitespace-nowrap text-sm text-muted-foreground">
              <span className="size-2 rounded-full bg-graph-4" />3,500+ members
            </p>
          </div>
        </div>
        <div className="rounded-md bg-graph-3 py-2 text-center text-sm font-medium text-background">Join Server</div>
      </div>
    </div>
  );
}

const Chips =({ names }) => <ul className="flex flex-wrap gap-2">{names.map((t) => <Chip name={t} key={t} />)}</ul>;
const Wave = () => <div role="separator" className="wave my-9 h-1.5 sm:my-12" />;

function Section({ id, title, Icon, children }) {
  return (
    <>
      <section id={id} className="scroll-mt-20">
        <h2 className="mb-5 flex items-center gap-2.5 text-xl font-medium">
          <Icon className="size-5 text-muted-foreground" weight="light" aria-hidden="true" />
          {title}
        </h2>
        {children}
      </section>
      <Wave />
    </>
  );
}

function Entry({ when, title, children }) {
  return (
    <article>
      <p className="text-sm text-subtle">{when}</p>
      <h3 className="mb-3 mt-0.5 text-lg font-medium">{title}</h3>
      {children}
    </article>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader name={name} email={email} github={githubUrl} linkedin={linkedin} items={nav} />

      <main className="mx-auto max-w-[50rem] px-5 pb-8 pt-24 sm:px-6 sm:pt-28">
        <section id="top" className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
          <h1 className="mb-2 font-display text-4xl font-medium text-foreground sm:text-5xl">{name}</h1>
          <p className="max-w-2xl">Hey! I&apos;m a <strong className="font-medium text-foreground">software engineer</strong> and the <strong className="font-medium text-foreground">owner of Rubot</strong>. I write <strong className="font-medium text-foreground">Lua scripts</strong> for Lucifer (Growtopia) and build the systems that sell them.</p>
          <p className="max-w-2xl">I run the Rubot Discord community (<strong className="font-medium text-foreground">3,500+ members</strong>) and built its automated sales system end to end on <strong className="font-medium text-foreground">Cloudflare Workers</strong>, D1, and R2.</p>
          <p className="max-w-2xl">On the side I build web apps with <strong className="font-medium text-foreground">Next.js</strong> and TypeScript, and I&apos;m exploring <strong className="font-medium text-foreground">machine learning</strong>.</p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <CopyEmail email={email} />
            <Button asChild variant="outline" size="icon-lg" className="size-10 rounded-full">
              <a href={githubUrl} aria-label="GitHub"><GithubLogo className="size-5" /></a>
            </Button>
            <Button asChild variant="outline" size="icon-lg" className="size-10 rounded-full">
              <a href={linkedin} aria-label="LinkedIn"><LinkedinLogo className="size-5" /></a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-10 rounded-full px-5 text-base has-data-[icon=inline-start]:pl-5">
              <a href="/cv.pdf" download><DownloadSimple data-icon="inline-start" className="size-5" />Download CV</a>
            </Button>
          </div>
        </section>
        <Wave />

        <Section id="activity" title="Activity" Icon={Pulse}>
          <Contributions user={github} />
        </Section>

        <Section id="experience" title="Experience" Icon={Briefcase}>
          <div className="flex flex-col gap-9">
            {experience.map((j) => (
              <Entry key={j.title} when={j.when} title={j.title}>
                <ul className="mb-4 flex flex-col gap-2.5">
                  {j.bullets.map((b) => (
                    <li key={b} className="relative pl-5 text-base leading-relaxed text-muted-foreground before:absolute before:left-0.5 before:top-[0.7em] before:size-1.5 before:rounded-full before:border before:border-subtle">{b}</li>
                  ))}
                </ul>
                <Chips names={j.tags} />
              </Entry>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" Icon={Rocket}>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <Card key={p.title} className="gap-0 py-0 text-base transition-shadow hover:ring-foreground/25">
                {p.preview === 'discord' ? (
                  <DiscordPreview />
                ) : (
                  <img src={p.img} alt={`${p.title} preview`} width="800" height="500" loading="lazy" className="aspect-[16/10] w-full border-b object-cover object-top" />
                )}
                <CardHeader className="pt-4">
                  <CardTitle className="text-lg">
                    <a href={p.links[0].href} className="underline-offset-4 hover:underline">{p.title}</a>
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">{p.desc}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pb-4 pt-4"><Chips names={p.tags} /></CardContent>
                <CardFooter className="gap-1 px-3 py-2">
                  {p.links.map(({ label, href, Icon }) => (
                    <Button key={label} asChild variant="ghost" size="sm" className="h-9 px-2.5 text-sm has-data-[icon=inline-end]:pr-2.5">
                      <a href={href}>{label}<Icon data-icon="inline-end" className="size-4" /></a>
                    </Button>
                  ))}
                </CardFooter>
              </Card>
            ))}
            <Card className="items-center justify-center py-6 text-base text-muted-foreground transition-shadow hover:ring-foreground/25 sm:col-span-2">
              <Button asChild variant="ghost" className="h-auto gap-2 px-3 py-2 text-base">
                <a href={githubUrl}>See it all on <GithubLogo size={18} weight="regular" /> GitHub</a>
              </Button>
            </Card>
          </div>
        </Section>

        <Section id="stack" title="Tech Stack" Icon={Stack}>
          <Chips names={stack} />
        </Section>

        <Section id="education" title="Education" Icon={GraduationCap}>
          <div className="flex flex-col gap-7">
            {education.map((e) => (
              <Entry key={e.title} when={e.when} title={e.title}>
                <p className="-mt-2 text-base text-muted-foreground">{e.desc}</p>
              </Entry>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications" Icon={Certificate}>
          <ul className="flex flex-col gap-2.5">
            {certs.map((c) => (
              <li key={c} className="relative pl-5 text-base leading-relaxed text-muted-foreground before:absolute before:left-0.5 before:top-[0.7em] before:size-1.5 before:rounded-full before:border before:border-subtle">{c}</li>
            ))}
          </ul>
        </Section>

        <p className="text-base text-muted-foreground">
          Open to work, internships, or just a chat.{' '}
          <a href={`mailto:${email}`} className="text-foreground underline decoration-dotted underline-offset-4">{email}</a>
        </p>
      </main>

      <footer className="mx-auto max-w-[50rem] px-5 pb-10 pt-5 text-sm text-subtle sm:px-6">© {new Date().getFullYear()} {name}</footer>
    </>
  );
}
