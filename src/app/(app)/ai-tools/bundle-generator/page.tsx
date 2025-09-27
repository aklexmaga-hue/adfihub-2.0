import { BundleGeneratorForm } from '@/components/ai/bundle-generator-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package } from 'lucide-react';

export default function BundleGeneratorPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <div className="flex items-center gap-2">
          <Package className="h-8 w-8 text-primary" />
          <h1 className="font-headline text-4xl font-bold">Campaign Bundle Generator</h1>
        </div>
        <p className="text-muted-foreground">
          Generate a ready-to-deploy bundle with ad copy, creatives, landing pages, and more.
        </p>
      </header>
      <Card>
        <CardHeader>
            <CardTitle>Bundle Parameters</CardTitle>
            <CardDescription>
                Provide the details for your campaign to generate a complete bundle.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <BundleGeneratorForm />
        </CardContent>
      </Card>
    </div>
  );
}
