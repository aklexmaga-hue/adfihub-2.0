import { Badge } from '@/components/ui/badge';
import { ROADMAP_STAGES } from '@/lib/constants';
import { CheckCircle2, CircleDashed, Rocket } from 'lucide-react';

export default function RoadmapPage() {
  return (
    <div className="container mx-auto max-w-4xl py-8">
      <header className="mb-12 space-y-2 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight">
          Our Roadmap
        </h1>
        <p className="text-lg text-muted-foreground">
          Our vision for building the future of performance marketing.
        </p>
      </header>

      <div className="relative">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-border"
          aria-hidden="true"
        ></div>

        {ROADMAP_STAGES.map((stage, index) => {
          const isLeft = index % 2 === 0;
          const statusIcon =
            stage.status === 'Completed' ? (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            ) : stage.status === 'In Progress' ? (
              <Rocket className="h-5 w-5 text-primary animate-pulse" />
            ) : (
              <CircleDashed className="h-5 w-5 text-muted-foreground" />
            );

          return (
            <div
              key={stage.id}
              className={`relative mb-12 flex w-full items-center ${
                isLeft ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`w-1/2 ${isLeft ? 'pr-8' : 'pl-8'}`}
              >
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{`${stage.quarter} ${stage.year}`}</Badge>
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-2"
                    >
                      {statusIcon}
                      <span>{stage.status}</span>
                    </Badge>
                  </div>
                  <h3 className="mt-4 font-headline text-xl font-semibold">
                    {stage.name}
                  </h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                    {stage.features.map(feature => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
