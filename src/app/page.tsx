import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Logo } from '@/components/logo';
import { ExternalLink, Rss } from 'lucide-react';
import { PARTNERS } from '@/lib/constants';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const featuredPartners = PARTNERS.filter(p => p.integrationStatus === 'Live');

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/partners', label: 'Partners' },
  { href: '/roadmap', label: 'Roadmap' },
];

export default function LandingPage() {
  const allPartners = [
    {
      id: 'target-mafia',
      name: 'Target Mafia',
    },
    {
      id: 'consensus-capital',
      name: 'Consensus Capital',
    },
    ...featuredPartners.map(p => ({ id: p.id, name: p.name })),
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-6" />
            <span className="hidden font-headline font-bold sm:inline-block">
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
          <div className="flex flex-1 items-center justify-end space-x-2">
             <div className="hidden sm:flex items-center gap-2">
                <Button asChild variant="ghost">
                  <Link href="/login">Log In</Link>
                </Button>
                <Button asChild>
                  <Link href="/whitelist">Join Whitelist</Link>
                </Button>
              </div>
             <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                 <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <Link href={link.href} className="text-lg font-medium">
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-8 flex flex-col gap-2">
                   <SheetClose asChild>
                    <Button asChild variant="outline">
                      <Link href="/login">Log In</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button asChild>
                      <Link href="/whitelist">Join Whitelist</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container grid items-center gap-8 py-20 md:grid-cols-2 md:py-32">
          <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
            <Badge
              variant="outline"
              className="border-accent/50 bg-accent/10 text-accent-foreground"
            >
              Connecting Media Buying with Web3
            </Badge>
            <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
              The Future of Performance Marketing is Here
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground">
              AdFiHub is the ultimate marketplace for affiliates, advertisers,
              and agencies. Discover transparent listings, secure payments,
              and powerful AI tools, all on a Web3-friendly platform.
            </p>
            <div className="flex w-full flex-col gap-4 sm:max-w-md sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/whitelist">Join the Whitelist</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="/dashboard">Explore Dashboard</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
             <div className="absolute inset-0 -m-4 rounded-full bg-primary/10 blur-3xl"></div>
            <Image
              src="https://picsum.photos/seed/adtech/600/600"
              alt="AdTech illustration"
              width={600}
              height={600}
              className="relative z-10 aspect-square w-full rounded-full object-cover shadow-2xl"
              data-ai-hint="abstract adtech"
              priority
            />
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
            <div className="relative mt-10">
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {allPartners.map(partner => (
                    <CarouselItem
                      key={partner.id}
                      className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                    >
                      <div className="p-4">
                        <div className="flex h-20 items-center justify-center">
                          <p className="text-center font-semibold text-muted-foreground transition-colors hover:text-foreground">
                            {partner.name}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
                <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
              </Carousel>
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
