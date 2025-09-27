import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const consensusCapitalLogo = PlaceHolderImages.find(
  p => p.id === 'consensus-capital'
);
const targetMafiaLogo = PlaceHolderImages.find(p => p.id === 'target-mafia');

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl py-8">
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="font-headline text-4xl font-bold tracking-tight">
            About AdFiHub
          </h1>
          <p className="text-xl text-muted-foreground">
            Forging trust and transparency in the digital advertising
            ecosystem.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/80">
            <p>
              AdFiHub was born from the collective experience of the{' '}
              <strong>Target Mafia</strong> team, a veteran group of traffic
              arbitration and media buying experts. After years of navigating the
              opaque and often inefficient landscape of digital advertising, we
              saw a clear need for a platform built on transparency, security,
              and cutting-edge technology.
            </p>
            <p>
              Our mission is to create a centralized marketplace where
              affiliates, advertisers, and agencies can collaborate with
              confidence. We are leveraging the power of Web3 principles and AI
              to build a more equitable and effective ecosystem for everyone, from
              individual media buyers to large-scale traffic networks.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Developed By</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center space-y-4">
              {targetMafiaLogo && (
                <Image
                  src={targetMafiaLogo.imageUrl}
                  alt={targetMafiaLogo.description}
                  width={200}
                  height={80}
                  className="object-contain"
                  data-ai-hint={targetMafiaLogo.imageHint}
                />
              )}
              <p className="text-center text-muted-foreground">
                The Target Mafia arbitration/traffic team.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Venture Investor</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center space-y-4">
              {consensusCapitalLogo && (
                <Image
                  src={consensusCapitalLogo.imageUrl}
                  alt={consensusCapitalLogo.description}
                  width={200}
                  height={80}
                  className="object-contain"
                  data-ai-hint={consensusCapitalLogo.imageHint}
                />
              )}
              <p className="text-center text-muted-foreground">
                Proudly backed by Consesus Capital.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Official Company Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              AdFiHub is a registered entity in the United Kingdom, ensuring we
              operate with a clear legal footprint and adhere to strict
              compliance standards.
            </p>
            <div className="rounded-md border bg-background p-4">
              <p>
                <strong>Company Name:</strong> ADFIHUB LIMITED
              </p>
              <p>
                <strong>Company Number:</strong> 16701096
              </p>
              <a
                href="https://find-and-update.company-information.service.gov.uk/company/16701096"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm text-primary underline-offset-4 hover:underline"
              >
                View on Companies House <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
