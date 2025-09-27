import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Coins,
  Globe,
  ListFilter,
  Search,
  TrendingUp,
  ShieldAlert,
  Flame,
} from 'lucide-react';
import Image from 'next/image';


const trendingOffers = [
  {
    title: 'BC.Game Casino',
    category: 'Gambling',
    imageUrl: 'https://picsum.photos/seed/bcgame/400/200',
    payout: '$400 CPA + 20% RevShare',
    geo: 'Tier 1',
    hint: 'crypto casino',
  },
  {
    title: 'ByBit Exchange',
    category: 'Crypto',
    imageUrl: 'https://picsum.photos/seed/bybit/400/200',
    payout: '40% RevShare',
    geo: 'Global',
    hint: 'crypto exchange',
  },
  {
    title: 'NordVPN',
    category: 'Software',
    imageUrl: 'https://picsum.photos/seed/vpn/400/200',
    payout: '50% Commission',
    geo: 'USA, EU',
    hint: 'cyber security',
  },
    {
    title: 'Axie Infinity',
    category: 'Gaming',
    imageUrl: 'https://picsum.photos/seed/axie/400/200',
    payout: '$75 CPA',
    geo: 'SEA',
    hint: 'play to earn',
  },
];

const allOffers = [
  {
    id: 1,
    title: "Roobet Casino",
    description: "by Roobet",
    category: "Gambling",
    payout: "$350 CPA",
    geo: "CA, DE, NO, FI",
    traffic: "Google Ads, SEO",
  },
  {
    id: 2,
    title: "Ledger Wallet",
    description: "by Ledger",
    category: "Crypto",
    payout: "10% Sale Commission",
    geo: "Global",
    traffic: "Content, Email",
  },
  {
    id: 3,
    title: "Manscaped",
    description: "by Manscaped",
    category: "E-commerce",
    payout: "15% Commission",
    geo: "USA, UK, AU",
    traffic: "Facebook Ads, TikTok",
  },
  {
    id: 4,
    title: "eToro",
    description: "by eToro",
    category: "Finance",
    payout: "$200 CPL",
    geo: "EU, LATAM",
    traffic: "Native Ads, Display",
  },
  {
    id: 5,
    title: "Star Atlas",
    description: "by Star Atlas",
    category: "Gaming",
    payout: "$100 CPA",
    geo: "Global",
    traffic: "Twitch, YouTube",
  },
  {
    id: 6,
    title: "HelloFresh",
    description: "by HelloFresh",
    category: "E-commerce",
    payout: "$20 Per Sale",
    geo: "USA, CA",
    traffic: "Influencers, Social",
  },
];


export default function MarketplacePage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="space-y-2">
        <h1 className="font-headline text-4xl font-bold">Marketplace</h1>
        <p className="text-muted-foreground">
          Find offers, manage traffic funnels, and collaborate with partners.
        </p>
      </header>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <Flame className="h-6 w-6 text-orange-500" />
          <h2 className="font-headline text-2xl font-semibold">Trending Offers</h2>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {trendingOffers.map((offer, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <Image
                      src={offer.imageUrl}
                      alt={offer.title}
                      width={400}
                      height={200}
                      className="w-full h-32 object-cover"
                      data-ai-hint={offer.hint}
                    />
                    <CardHeader className="p-4">
                      <CardTitle className="font-headline text-lg">{offer.title}</CardTitle>
                      <Badge variant="secondary" className="w-fit">{offer.category}</Badge>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 space-y-2">
                       <div className="flex items-center text-sm text-muted-foreground">
                          <Coins className="mr-2 h-4 w-4" />
                          <span>{offer.payout}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Globe className="mr-2 h-4 w-4" />
                          <span>{offer.geo}</span>
                        </div>
                    </CardContent>
                     <CardFooter className="p-4 pt-0">
                      <Button size="sm" className="w-full">View Offer</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </section>

      <section className="flex flex-col gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search all listings..." className="pl-10" />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <ListFilter className="h-4 w-4" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>Vertical</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>GEO</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Payout Model</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Traffic Source</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
               <Button>Search</Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {allOffers.map((offer) => (
            <Card key={offer.id} className="flex flex-col hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="font-headline text-lg">
                    {offer.title}
                  </CardTitle>
                  <Badge variant="secondary">{offer.category}</Badge>
                </div>
                <CardDescription>{offer.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Coins className="mr-2 h-4 w-4" />
                  <span>{offer.payout}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Globe className="mr-2 h-4 w-4" />
                  <span>{offer.geo}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  <span>{offer.traffic}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="gap-2" disabled>
                  <ShieldAlert className="h-4 w-4" />
                  Dispute
                </Button>
                <Button size="sm">View Offer</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
