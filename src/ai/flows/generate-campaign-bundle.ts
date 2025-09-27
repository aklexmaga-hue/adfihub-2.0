'use server';

/**
 * @fileOverview An AI agent for generating advertising campaign bundles.
 *
 * - generateCampaignBundle - A function that generates an advertising campaign bundle.
 * - GenerateCampaignBundleInput - The input type for the generateCampaignBundle function.
 * - GenerateCampaignBundleOutput - The return type for the generateCampaignBundle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCampaignBundleInputSchema = z.object({
  vertical: z
    .string()
    .describe('The advertising vertical, e.g., gambling, e-commerce.'),
  offerId: z.string().describe('The ID of the offer to promote.'),
  budget: z.number().describe('The total budget for the campaign, in USD.'),
  primaryGeo: z.string().describe('The primary geographical target, e.g., US, CA.'),
  trafficSource: z.string().describe('The primary source of traffic, e.g., Google Ads, Facebook Ads.'),
  desiredKpi: z.string().describe('The desired key performance indicator, e.g., CPA, ROI.'),
});
export type GenerateCampaignBundleInput = z.infer<
  typeof GenerateCampaignBundleInputSchema
>;

const GenerateCampaignBundleOutputSchema = z.object({
  bundleZip: z
    .string()
    .describe(
      'A zip file containing the campaign bundle, encoded as a data URI.'
    ),
  adCopyVariants: z.array(z.string()).describe('Ad copy variations.'),
  creativeSuggestions: z
    .array(z.string())
    .describe('Creative suggestions for the ads.'),
  landingPageTemplate: z
    .string()
    .describe('HTML content for the landing page template.'),
  trackingParameters: z
    .string()
    .describe('Tracking parameters to include in the campaign URLs.'),
  campaignSettings: z
    .string()
    .describe('Suggested campaign settings (bids, budgets, dayparting).'),
  abTestPlan: z.string().describe('A/B test plan and KPI targets.'),
});
export type GenerateCampaignBundleOutput = z.infer<
  typeof GenerateCampaignBundleOutputSchema
>;

export async function generateCampaignBundle(
  input: GenerateCampaignBundleInput
): Promise<GenerateCampaignBundleOutput> {
  return generateCampaignBundleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCampaignBundlePrompt',
  input: {schema: GenerateCampaignBundleInputSchema},
  output: {schema: GenerateCampaignBundleOutputSchema},
  prompt: `You are an expert advertising campaign creator.

You will generate a complete advertising campaign bundle based on the user's input.

Vertical: {{{vertical}}}
Offer ID: {{{offerId}}}
Budget: {{{budget}}}
Primary Geo: {{{primaryGeo}}}
Traffic Source: {{{trafficSource}}}
Desired KPI: {{{desiredKpi}}}

Create a bundle.zip file containing:
- 3 ad copy variants (headlines + descriptions)
- 3 suggested creatives (text + image prompts or prebuilt templates)
- landing page template (HTML) + recommended headline, CTA, basic tracking pixel snippet
- tracker macros & example postback URL
- suggested campaign settings (bids, budgets, dayparting)
- A/B test plan and KPI targets.

Return ad copy variants, creative suggestions, landing page template, tracking parameters, campaign settings, and A/B test plan.
Return the bundle zip as a data URI.
`, 
});

const generateCampaignBundleFlow = ai.defineFlow(
  {
    name: 'generateCampaignBundleFlow',
    inputSchema: GenerateCampaignBundleInputSchema,
    outputSchema: GenerateCampaignBundleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
