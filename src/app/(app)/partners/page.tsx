import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PARTNERS, type Partner } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink, Building } from 'lucide-react';
import Image from 'next/image';

const PartnerCard = ({ partner }: { partner: Partner }) => {
  const statusColor =
    partner.integrationStatus === 'Live'
      ? 'bg-green-100 text-green-800 border-green-300 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700'
      : partner.integrationStatus === 'In Progress'
      ? 'bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-700'
      : 'bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-800/50 dark:text-gray-300 dark:border-gray-600';

  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="flex-row items-start justify-between gap-4">
        <div className="flex-1 space-y-1">
          <CardTitle className="text-lg font-headline">{partner.name}</CardTitle>
          <Badge
            variant="outline"
            className={`text-xs ${statusColor}`}
          >
            {partner.integrationStatus}
          </Badge>
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-lg border bg-secondary p-1">
          <Building className="h-8 w-8 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between">
        <p className="mb-4 text-sm text-muted-foreground">
          {partner.description}
        </p>
        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          Visit Partner <ExternalLink className="h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
};

export default function PartnersPage() {
  const categories = [
    'Crypto Casinos',
    'Ad Agencies',
    'Traffic Networks',
    'SDK/Tech Partners',
    'On-ramp / KYC',
  ] as const;

  return (
    <div className="container mx-auto py-8">
      <header className="mb-8 space-y-2">
        <h1 className="font-headline text-4xl font-bold">Our Partners</h1>
        <p className="text-lg text-muted-foreground">
          A curated ecosystem of trusted partners to fuel your growth.
        </p>
      </header>

      <div className="space-y-12">
        {categories.map(category => (
          <section key={category}>
            <h2 className="mb-4 font-headline text-2xl font-semibold">
              {category}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PARTNERS.filter(p => p.category === category).map(partner => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
