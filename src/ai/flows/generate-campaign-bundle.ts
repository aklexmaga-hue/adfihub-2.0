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

Your task is to generate a complete advertising campaign bundle based on the user's input.

Campaign Details:
- Vertical: {{{vertical}}}
- Offer ID: {{{offerId}}}
- Budget: {{{budget}}} USD
- Primary Geo: {{{primaryGeo}}}
- Traffic Source: {{{trafficSource}}}
- Desired KPI: {{{desiredKpi}}}

Instructions:
1.  Create a comprehensive campaign bundle fulfilling all fields in the output schema.
2.  The 'bundleZip' must be a data URI representing a ZIP file containing all generated assets. This is a critical requirement.
3.  Provide at least three distinct 'adCopyVariants'.
4.  Offer at least three 'creativeSuggestions', which can be text descriptions for image generation or concepts for pre-built templates.
5.  Generate a complete 'landingPageTemplate' in HTML, including a headline, call-to-action (CTA), and a placeholder for a tracking pixel.
6.  List relevant 'trackingParameters' (like tracker macros and an example postback URL).
7.  Suggest 'campaignSettings' including bids, budgets, and dayparting.
8.  Outline a clear 'abTestPlan' with KPI targets.
9.  Ensure all output fields are populated with high-quality, relevant content.
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
