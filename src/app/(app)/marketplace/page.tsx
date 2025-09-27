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
  Coins,
  Globe,
  ListFilter,
  Search,
  TrendingUp,
  ShieldAlert,
} from 'lucide-react';

export default function MarketplacePage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="space-y-2">
        <h1 className="font-headline text-4xl font-bold">Marketplace</h1>
        <p className="text-muted-foreground">
          Find offers, manage traffic funnels, and collaborate with partners.
        </p>
      </header>
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search listings..." className="pl-10" />
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
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="flex flex-col hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="font-headline text-lg">
                  High-Roller Casino Offer
                </CardTitle>
                <Badge variant="secondary">Gambling</Badge>
              </div>
              <CardDescription>by Roll & Win Casino</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Coins className="mr-2 h-4 w-4" />
                <span>$250 CPA</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Globe className="mr-2 h-4 w-4" />
                <span>USA, Canada, UK</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <TrendingUp className="mr-2 h-4 w-4" />
                <span>Google Ads, Facebook Ads</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="gap-2">
                <ShieldAlert className="h-4 w-4" />
                Dispute
              </Button>
              <Button size="sm">View Offer</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
