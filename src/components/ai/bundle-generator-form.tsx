'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { runGenerateCampaignBundle } from '@/app/actions/ai';
import type { GenerateCampaignBundleOutput } from '@/ai/flows/generate-campaign-bundle';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Download, Loader2, Package, Sparkles } from 'lucide-react';
import { TRAFFIC_SOURCES, KPIS, VERTICALS } from '@/lib/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  vertical: z.string().min(1, 'Please select a vertical.'),
  offerId: z.string().min(1, 'Please enter an offer ID.'),
  budget: z.coerce.number().min(1, 'Budget must be at least $1.'),
  primaryGeo: z.string().min(2, 'Please enter a 2-letter country code.').max(2),
  trafficSource: z.string().min(1, 'Please select a traffic source.'),
  desiredKpi: z.string().min(1, 'Please select a desired KPI.'),
});

type FormValues = z.infer<typeof formSchema>;

const BundleResults = ({
  data,
}: {
  data: GenerateCampaignBundleOutput;
}) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = data.bundleZip;
    link.download = 'campaign_bundle.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    
  return (
    <Card className="mt-6">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2 font-headline text-2xl">
          <Sparkles className="h-6 w-6 text-primary" />
          AI Generated Campaign Bundle
        </CardTitle>
        <Button onClick={handleDownload} className="gap-2">
            <Download className="h-4 w-4" />
            Download Bundle.zip
        </Button>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Ad Copy Variants</AccordionTrigger>
            <AccordionContent className="space-y-4">
              {data.adCopyVariants.map((copy, index) => (
                <div key={index} className="rounded-md border bg-background p-4">
                  <p className="font-semibold">Variant {index + 1}</p>
                  <p className="whitespace-pre-wrap font-code text-sm text-muted-foreground">{copy}</p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Creative Suggestions</AccordionTrigger>
            <AccordionContent className="space-y-4">
               {data.creativeSuggestions.map((suggestion, index) => (
                <div key={index} className="rounded-md border bg-background p-4">
                  <p className="font-semibold">Suggestion {index + 1}</p>
                  <p className="whitespace-pre-wrap font-code text-sm text-muted-foreground">{suggestion}</p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Landing Page Template</AccordionTrigger>
            <AccordionContent>
                 <Textarea readOnly value={data.landingPageTemplate} className="h-64 font-code text-xs" />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Tracking Parameters</AccordionTrigger>
             <AccordionContent>
                 <Textarea readOnly value={data.trackingParameters} className="h-48 font-code text-xs" />
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="item-5">
            <AccordionTrigger>Campaign Settings</AccordionTrigger>
            <AccordionContent>
                <p className="whitespace-pre-wrap font-code text-sm text-muted-foreground bg-muted p-4 rounded-md">{data.campaignSettings}</p>
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="item-6">
            <AccordionTrigger>A/B Test Plan</AccordionTrigger>
            <AccordionContent>
                <p className="whitespace-pre-wrap font-code text-sm text-muted-foreground bg-muted p-4 rounded-md">{data.abTestPlan}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export function BundleGeneratorForm() {
  const [result, setResult] = useState<
    GenerateCampaignBundleOutput | { error: string } | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vertical: 'E-commerce',
      offerId: 'OFFER-123',
      budget: 1000,
      primaryGeo: 'US',
      trafficSource: 'Facebook Ads',
      desiredKpi: 'ROI',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setResult(null);
    const response = await runGenerateCampaignBundle(values);
    setResult(response);
    setIsLoading(false);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <FormField
              control={form.control}
              name="vertical"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vertical</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a vertical" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {VERTICALS.map(v => (
                        <SelectItem key={v} value={v}>
                          {v}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="offerId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Offer ID</FormLabel>
                  <FormControl>
                    <Input placeholder="OFFER-123" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget ($)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="1000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="primaryGeo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primary Geo</FormLabel>
                  <FormControl>
                    <Input placeholder="US" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <FormField
              control={form.control}
              name="trafficSource"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Traffic Source</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a source" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TRAFFIC_SOURCES.map(s => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="desiredKpi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Desired KPI</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a KPI" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {KPIS.map(k => (
                        <SelectItem key={k} value={k}>
                          {k}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full md:w-auto"
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? 'Generating Bundle...' : 'Generate Bundle'}
          </Button>
        </form>
      </Form>
      {isLoading && (
        <div className="mt-6 flex flex-col items-center justify-center gap-4 rounded-lg border p-8 text-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary"/>
            <p className="font-semibold">AI is building your campaign bundle...</p>
            <p className="text-sm text-muted-foreground">This may take a few moments.</p>
        </div>
      )}
      {result && 'error' in result && (
        <Alert variant="destructive" className="mt-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{result.error}</AlertDescription>
        </Alert>
      )}
      {result && !('error' in result) && <BundleResults data={result} />}
    </>
  );
}
