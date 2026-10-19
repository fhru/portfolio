'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const LEVEL = ['bg-graph-0', 'bg-graph-1', 'bg-graph-2', 'bg-graph-3', 'bg-graph-4'];

// views: [{ key, label, caption, days: [{ date, count, level }] }], first view is the rolling last year.
export default function ContribGraph({ views }) {
  const [selected, setSelected] = useState(views[0].key);
  const view = views.find((v) => v.key === selected) ?? views[0];

  // Sunday-first columns: pad the first week so rows line up with weekdays.
  const pad = new Date(view.days[0].date + 'T00:00:00Z').getUTCDay();
  const cells = [...Array(pad).fill(null), ...view.days];
  const cols = Math.ceil(cells.length / 7);

  // A month label sits on the first column of that month, skipping ones that would overlap.
  const labels = [];
  let lastMonth = -1;
  let lastCol = -10;
  for (let c = 0; c < cols; c++) {
    const day = cells.slice(c * 7, c * 7 + 7).find(Boolean);
    const month = new Date(day.date + 'T00:00:00Z').getUTCMonth();
    if (month !== lastMonth) {
      if (c - lastCol >= 3) { labels.push({ c, text: MONTHS[month] }); lastCol = c; }
      else if (lastCol === 0) { labels[0] = { c, text: MONTHS[month] }; lastCol = c; } // first month is only a sliver, label the next one instead
      lastMonth = month;
    }
  }

  return (
    <Card className="gap-4 p-4">
      <CardContent className="flex flex-col gap-4 px-0">
        <div className="grid grid-cols-5 gap-1.5 sm:flex sm:flex-wrap sm:gap-2" role="group" aria-label="Select year">
          {views.map((v) => {
            const on = v.key === selected;
            return (
              <Button
                key={v.key}
                size="sm"
                variant={on ? 'default' : 'secondary'}
                aria-pressed={on}
                onClick={() => setSelected(v.key)}
                className={cn('h-8 w-full rounded-lg px-0 text-sm sm:w-auto sm:px-3', on && 'bg-graph-4 text-background hover:bg-graph-4/90')}
              >
                {v.label}
              </Button>
            );
          })}
        </div>

        {/* rtl on the scroller makes it start on the right (latest weeks) when the graph overflows */}
        <div className="overflow-x-auto pb-1" style={{ direction: 'rtl' }}>
          <div className="mr-auto w-max [--cell:9px] [--gap:2px] sm:[--cell:12px] sm:[--gap:3px]" style={{ direction: 'ltr' }}>
            <div className="relative mb-1.5 h-5 text-sm text-muted-foreground" aria-hidden="true">
              {labels.map((l) => (
                <span key={l.c} className="absolute top-0" style={{ left: `calc(${l.c} * (var(--cell) + var(--gap)))` }}>{l.text}</span>
              ))}
            </div>
            <div
              className="grid grid-flow-col gap-(--gap)"
              style={{ gridTemplateRows: 'repeat(7, var(--cell))', gridAutoColumns: 'var(--cell)' }}
              aria-hidden="true"
            >
              {cells.map((d, i) =>
                d ? (
                  <i key={d.date} className={cn('rounded-[3px]', LEVEL[d.level])} title={`${d.count} contributions on ${d.date}`} />
                ) : (
                  <i key={`p${i}`} className="invisible" />
                )
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <p>{view.caption}</p>
          <div className="flex items-center gap-1.5" aria-hidden="true">
            Less
            {LEVEL.map((l) => <i key={l} className={cn('size-2.5 rounded-[3px]', l)} />)}
            More
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
