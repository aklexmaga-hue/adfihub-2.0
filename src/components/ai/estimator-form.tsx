'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { runEstimateCampaignPerformance } from '@/app/actions/ai';
import type { EstimateCampaignPerformanceOutput } from '@/ai/flows/estimate-campaign-performance';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
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
import { AlertCircle, Bot, Loader2, Sparkles } from 'lucide-react';
import { TRAFFIC_SOURCES, TRACKING_TYPES, VERTICALS } from '@/lib/constants';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  offerPayout: z.coerce.number().min(0, 'Payout must be a positive number.'),
  vertical: z.string().min(1, 'Please select a vertical.'),
  geo: z.string().min(2, 'Please enter a 2-letter country code.').max(2),
  trafficSource: z.string().min(1, 'Please select a traffic source.'),
  monthlyBudget: z.coerce.number().min(1, 'Budget must be at least $1.'),
  expectedCR: z.coerce
    .number()
    .min(0)
    .max(1)
    .optional()
    .transform(val => (val === 0 ? undefined : val)),
  trackingType: z.string().min(1, 'Please select a tracking type.'),
  conversionFunnelSteps: z.coerce.number().int().min(1, 'Must have at least 1 step.'),
});

type FormValues = z.infer<typeof formSchema>;

const EstimatorResults = ({
  data,
}: {
  data: EstimateCampaignPerformanceOutput;
}) => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline text-2xl">
          <Sparkles className="h-6 w-6 text-primary" />
          AI Performance Estimate
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Projected CPA</p>
            <p className="text-2xl font-bold">
              ${data.projectedCPA.toFixed(2)}
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Monthly Conversions</p>
            <p className="text-2xl font-bold">
              {Math.round(data.expectedConversionsPerMonth)}
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Expected ROI</p>
            <p className="text-2xl font-bold text-green-600">
              {Math.round(data.roi * 100)}%
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Break-even CPC</p>
            <p className="text-2xl font-bold">
              ${data.breakEvenCPC.toFixed(3)}
            </p>
          </div>
        </div>
        
        {data.suggestedConversionRate && (
            <Alert>
                <Bot className="h-4 w-4" />
                <AlertTitle>AI Suggestion</AlertTitle>
                <AlertDescription>
                    We suggested a conversion rate of <strong>{(data.suggestedConversionRate * 100).toFixed(2)}%</strong> for this estimate.
                </AlertDescription>
            </Alert>
        )}

        <div>
          <h3 className="font-semibold mb-2">Recommendation</h3>
          <p className="text-sm text-muted-foreground">{data.recommendation}</p>
        </div>
        <Separator />
        <div>
          <h3 className="font-semibold mb-2">Sensitivity Table</h3>
          <p className="whitespace-pre-wrap font-code text-xs p-4 bg-muted rounded-md text-muted-foreground">{data.sensitivityTable}</p>
        </div>
      </CardContent>
    </Card>
  );
};


export function EstimatorForm() {
  const [result, setResult] = useState<
    EstimateCampaignPerformanceOutput | { error: string } | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      offerPayout: 100,
      vertical: 'E-commerce',
      geo: 'US',
      trafficSource: 'Facebook Ads',
      monthlyBudget: 5000,
      expectedCR: undefined,
      trackingType: 'Pixel',
      conversionFunnelSteps: 3,
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setResult(null);
    const response = await runEstimateCampaignPerformance(values);
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
              name="offerPayout"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Offer Payout ($)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="100" {...field} />
                  </FormControl>
                  <FormDescription>
                    Payout per conversion or revenue share percentage (as a whole number, e.g., 50 for 50%).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="monthlyBudget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Monthly Budget ($)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="5000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
             <FormField
              control={form.control}
              name="vertical"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vertical</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a vertical" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {VERTICALS.map(v => <SelectItem key={v} value={v}>{v}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="geo"
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
             <FormField
              control={form.control}
              name="trafficSource"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Traffic Source</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a source" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                       {TRAFFIC_SOURCES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
             <FormField
              control={form.control}
              name="expectedCR"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expected CR (Optional)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.001" placeholder="0.01" {...field} value={field.value ?? ''} />
                  </FormControl>
                  <FormDescription>
                    Decimal between 0-1. Leave blank for AI suggestion.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="trackingType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tracking Type</FormLabel>
                   <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                       {TRACKING_TYPES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="conversionFunnelSteps"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Funnel Steps</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="3" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? 'Estimating...' : 'Run Estimate'}
          </Button>
        </form>
      </Form>
      {isLoading && (
        <div className="mt-6 flex flex-col items-center justify-center gap-4 rounded-lg border p-8 text-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary"/>
            <p className="font-semibold">AI is analyzing the data...</p>
            <p className="text-sm text-muted-foreground">This may take a moment.</p>
        </div>
      )}
      {result && 'error' in result && (
        <Alert variant="destructive" className="mt-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{result.error}</AlertDescription>
        </Alert>
      )}
      {result && !('error' in result) && <EstimatorResults data={result} />}
    </>
  );
}
