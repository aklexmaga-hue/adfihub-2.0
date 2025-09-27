'use server';

/**
 * @fileOverview This file defines a Genkit flow for estimating campaign performance.
 *
 * - estimateCampaignPerformance - An async function that takes campaign parameters and returns performance estimates.
 * - EstimateCampaignPerformanceInput - The input type for the estimateCampaignPerformance function.
 * - EstimateCampaignPerformanceOutput - The return type for the estimateCampaignPerformance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EstimateCampaignPerformanceInputSchema = z.object({
  offerPayout: z
    .number()
    .describe('Payout per conversion or revenue share percentage.'),
  vertical: z.string().describe('The industry or category of the offer.'),
  geo: z.string().describe('The geographical target of the campaign.'),
  trafficSource: z
    .string()
    .describe('The source of traffic (e.g., Google Ads, Facebook Ads).'),
  monthlyBudget: z.number().describe('The monthly budget for the campaign.'),
  expectedCR: z
    .number()
    .optional()
    .describe(
      'Expected conversion rate (optional, AI will suggest if not provided).' +
        'Should be represented as a decimal between 0 and 1 (e.g. 0.01 for 1%).'
    ),
  trackingType: z
    .string()
    .describe('The type of tracking used (e.g., pixel, postback).'),
  conversionFunnelSteps: z
    .number()
    .describe('The number of steps in the conversion funnel.'),
});

export type EstimateCampaignPerformanceInput = z.infer<
  typeof EstimateCampaignPerformanceInputSchema
>;

const EstimateCampaignPerformanceOutputSchema = z.object({
  projectedCPA: z.number().describe('The projected cost per acquisition.'),
  expectedConversionsPerMonth: z
    .number()
    .describe('The expected number of conversions per month.'),
  expectedRevenue: z
    .number()
    .describe('The expected revenue (for revshare campaigns).'),
  roi: z.number().describe('The return on investment.'),
  breakEvenCPC: z.number().describe('The break-even cost per click.'),
  breakEvenCPM: z
    .number()
    .describe('The break-even cost per mille (1000 impressions).'),
  confidenceInterval: z
    .string()
    .describe('The confidence interval for the estimates.'),
  sensitivityTable: z
    .string()
    .describe(
      'A table showing the sensitivity of the estimates to changes in input parameters.'
    ),
  recommendation: z
    .string()
    .describe('A plain-English recommendation based on the estimates.'),
  suggestedConversionRate: z
    .number()
    .optional()
    .describe(
      'Suggested conversion rate based on vertical, geo, and traffic source.' +
        'Should be represented as a decimal between 0 and 1 (e.g. 0.01 for 1%).'
    ),
});

export type EstimateCampaignPerformanceOutput = z.infer<
  typeof EstimateCampaignPerformanceOutputSchema
>;

export async function estimateCampaignPerformance(
  input: EstimateCampaignPerformanceInput
): Promise<EstimateCampaignPerformanceOutput> {
  return estimateCampaignPerformanceFlow(input);
}

const estimateCampaignPerformancePrompt = ai.definePrompt({
  name: 'estimateCampaignPerformancePrompt',
  input: {schema: EstimateCampaignPerformanceInputSchema},
  output: {schema: EstimateCampaignPerformanceOutputSchema},
  model: 'googleai/gemini-2.5-flash',
  prompt: `You are an expert marketing analyst specializing in predicting campaign performance.

  Your task is to provide a detailed performance estimate based on the campaign parameters provided.

  Parameters:
  - Offer Payout: {{{offerPayout}}}
  - Vertical: {{{vertical}}}
  - Geo: {{{geo}}}
  - Traffic Source: {{{trafficSource}}}
  - Monthly Budget: {{{monthlyBudget}}}
  - Tracking Type: {{{trackingType}}}
  - Conversion Funnel Steps: {{{conversionFunnelSteps}}}

  Conversion Rate:
  {{#if expectedCR}}
  - The user has provided an expected conversion rate of {{{expectedCR}}}. Use this value for your calculations.
  {{else}}
  - The user has NOT provided an expected conversion rate. You MUST estimate a realistic conversion rate based on the Vertical, Geo, and Traffic Source provided. You MUST use this estimated rate for all subsequent calculations and populate the 'suggestedConversionRate' field with your estimated value.
  {{/if}}

  Instructions:
  1.  Calculate and return the best estimates for all fields in the output schema: projectedCPA, expectedConversionsPerMonth, expectedRevenue, roi, breakEvenCPC, breakEvenCPM, confidenceInterval, and sensitivityTable.
  2.  Provide a concise, plain-English 'recommendation' based on your analysis.
  3.  If you estimated the conversion rate, you MUST populate the 'suggestedConversionRate' field with your estimated value. If the user provided the rate, this field MUST be empty.
  4.  Ensure any conversion rate value (provided or estimated) is treated as a decimal between 0 and 1 (e.g., 1% is 0.01).
  `,
});

const estimateCampaignPerformanceFlow = ai.defineFlow(
  {
    name: 'estimateCampaignPerformanceFlow',
    inputSchema: EstimateCampaignPerformanceInputSchema,
    outputSchema: EstimateCampaignPerformanceOutputSchema,
  },
  async input => {
    const {output} = await estimateCampaignPerformancePrompt(input);
    return output!;
  }
);
