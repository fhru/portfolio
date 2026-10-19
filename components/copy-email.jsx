'use client';

import { useState } from 'react';
import { Check, Copy } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';

export default function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      window.location.href = `mailto:${email}`; // clipboard blocked, fall back to the mail app
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Button size="lg" className="h-10 rounded-full px-5 text-base has-data-[icon=inline-start]:pl-5" onClick={copy} aria-live="polite">
      {copied ? <Check data-icon="inline-start" className="size-5" /> : <Copy data-icon="inline-start" className="size-5" />}
      {copied ? 'Email copied!' : 'Copy my email'}
    </Button>
  );
}
