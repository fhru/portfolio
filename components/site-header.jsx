'use client';

import { useEffect, useState } from 'react';
import {
  Briefcase, Certificate, Check, Copy, GithubLogo, GraduationCap, LinkedinLogo, List, Pulse, Rocket, Stack,
} from '@phosphor-icons/react';
import {
  Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator,
} from '@/components/ui/command';

const ICONS = {
  activity: Pulse,
  experience: Briefcase,
  projects: Rocket,
  stack: Stack,
  education: GraduationCap,
  certifications: Certificate,
};

// Floating pill with a rotating status line. Click it or press Ctrl/Cmd+K to open the command palette.
export default function SiteHeader({ name, email, github, linkedin, items }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [step, setStep] = useState(0);
  const [mac, setMac] = useState(false);
  const key = items.map((n) => n.id).join(',');

  const statuses = [
    { text: 'Software Engineer' },
    { text: 'Open to work', dot: true },
    { text: email },
  ];

  useEffect(() => setMac(/Mac|iPhone|iPad/.test(navigator.platform)), []);

  // Status rotation. Reduced motion keeps the first line.
  useEffect(() => {
    if (open || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setStep((s) => (s + 1) % statuses.length), 3500);
    return () => clearInterval(t);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Track the section in view so the palette can show where the reader is.
  useEffect(() => {
    const els = ['top', ...key.split(',')].map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id === 'top' ? '' : e.target.id)),
      { rootMargin: '-20% 0px -70% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);

  const run = (fn) => () => {
    setOpen(false);
    setTimeout(fn, 120); // let the dialog release scroll lock first
  };
  const go = (id) => run(() => document.getElementById(id)?.scrollIntoView());
  const openLink = (url) => run(() => window.open(url, '_blank', 'noopener'));
  const copyEmail = run(() => navigator.clipboard?.writeText(email));

  const s = statuses[step];

  return (
    <>
      <button
        type="button"
        aria-label="Open navigation"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="fixed left-1/2 top-3 z-30 flex -translate-x-1/2 items-center gap-3 rounded-full border bg-card/70 p-1.5 pr-4 text-left shadow-lg backdrop-blur-xl outline-none transition-colors hover:bg-card/90 focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <span className="grid size-10 place-items-center rounded-full border bg-secondary">
          <img src="/logo.svg" alt="" width="20" height="20" className="size-5" />
        </span>
        <span className="grid min-w-44">
          <span className="text-base font-semibold leading-tight">{name}</span>
          <span key={step} className="flex items-center gap-1.5 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-1 duration-300">
            {s.dot && <span className="size-1.5 rounded-full bg-graph-4" aria-hidden="true" />}
            {s.text}
          </span>
        </span>
        <kbd className="ml-2 hidden rounded-md border bg-secondary px-1.5 py-0.5 text-xs font-medium text-muted-foreground sm:block" aria-hidden="true">
          {mac ? '⌘ K' : 'Ctrl K'}
        </kbd>
        <List className="size-5 text-muted-foreground sm:hidden" weight="light" aria-hidden="true" />
      </button>

      <CommandDialog open={open} onOpenChange={setOpen} title="Navigation" description="Jump to a section or open a link">
        <Command>
        <CommandInput placeholder="Jump to..." />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
          <CommandGroup heading="Sections">
            {items.map((n) => {
              const Icon = ICONS[n.id];
              return (
                <CommandItem key={n.id} value={n.label} onSelect={go(n.id)} className="py-2 text-base">
                  {Icon && <Icon />}
                  {n.label}
                  {active === n.id && <Check className="ml-auto" />}
                </CommandItem>
              );
            })}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Links">
            <CommandItem value="Copy email" onSelect={copyEmail} className="py-2 text-base"><Copy />Copy email</CommandItem>
            <CommandItem value="GitHub" onSelect={openLink(github)} className="py-2 text-base"><GithubLogo weight="regular" />GitHub</CommandItem>
            <CommandItem value="LinkedIn" onSelect={openLink(linkedin)} className="py-2 text-base"><LinkedinLogo weight="regular" />LinkedIn</CommandItem>
          </CommandGroup>
        </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
