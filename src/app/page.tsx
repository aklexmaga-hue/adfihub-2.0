import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Logo } from '@/components/logo';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink, Rss } from 'lucide-react';

const trustBadges = [
  { id: 'target-mafia', name: 'Target Mafia' },
  { id: 'consensus-capital', name: 'Consensus Capital' },
];

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/partners', label: 'Partners' },
  { href: '/roadmap', label: 'Roadmap' },
];

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-6" />
            <span className="font-bold font-headline sm:inline-block">
              AdFiHub
            </span>
          </Link>
          <nav className="hidden flex-1 items-center gap-6 text-sm md:flex">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/60 transition-colors hover:text-foreground/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button asChild variant="ghost">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/whitelist">Join Whitelist</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container py-20 md:py-32">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <Badge
                variant="outline"
                className="w-fit border-accent/50 bg-accent/10 text-accent-foreground"
              >
                Connecting Media Buying with Web3
              </Badge>
              <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                The Future of Performance Marketing is Here
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground">
                AdFiHub is the ultimate marketplace for affiliates, advertisers,
                and agencies. Discover transparent listings, secure payments,
                and powerful AI tools, all on a Web3-friendly platform.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/whitelist">Join the Whitelist</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/dashboard">Explore Dashboard</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 -m-4 rounded-full bg-primary/10 blur-3xl"></div>
              <Image
                src="https://picsum.photos/seed/adtech/600/600"
                alt="AdTech illustration"
                width={600}
                height={600}
                className="relative z-10 rounded-full object-cover shadow-2xl"
                data-ai-hint="abstract adtech"
              />
            </div>
          </div>
        </section>

        <section className="bg-card py-16">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                Trusted by Industry Leaders
              </h2>
              <p className="max-w-[700px] text-muted-foreground">
                Backed by top-tier investors and developed by seasoned experts in
                traffic arbitration.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8">
              {trustBadges.map(badge => (
                <div
                  key={badge.id}
                  className="flex items-center justify-center"
                >
                  <p className="text-xl font-semibold text-muted-foreground">{badge.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-auto md:flex-row md:py-6">
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <div className="flex items-center gap-2">
                <Logo className="h-6 w-6" />
                <p className="text-sm leading-loose text-muted-foreground">
                Built by{' '}
                <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium underline underline-offset-4"
                >
                    Target Mafia
                </a>
                . Since 2025.
                </p>
            </div>
            <p className='text-xs text-muted-foreground max-w-md'>
                This is a demo version of the site. All content, including images and text, is for demonstration purposes and will be replaced.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground md:items-end">
            <a
                href="mailto:main@adfihub.xyz"
                className="font-medium underline-offset-4 hover:text-primary hover:underline"
              >
                main@adfihub.xyz
            </a>
            <div className="flex items-center gap-4">
                 <a
                href="https://find-and-update.company-information.service.gov.uk/company/16701096"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                ADFIHUB LIMITED
              </a>
                <div className="flex items-center gap-2">
                <Rss className="h-4 w-4" />
                <span className="text-muted-foreground/80">In Development</span>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
