'use server';

import {
  estimateCampaignPerformance,
  type EstimateCampaignPerformanceInput,
  type EstimateCampaignPerformanceOutput,
} from '@/ai/flows/estimate-campaign-performance';

import {
  generateCampaignBundle,
  type GenerateCampaignBundleInput,
  type GenerateCampaignBundleOutput,
} from '@/ai/flows/generate-campaign-bundle';

export async function runEstimateCampaignPerformance(
  input: EstimateCampaignPerformanceInput
): Promise<EstimateCampaignPerformanceOutput | { error: string }> {
  try {
    const result = await estimateCampaignPerformance(input);
    return result;
  } catch (e: any) {
    console.error('Error in estimateCampaignPerformance flow:', e);
    const message = e.message || 'An unexpected error occurred.';
    return { error: `Failed to estimate campaign performance: ${message}` };
  }
}

export async function runGenerateCampaignBundle(
  input: GenerateCampaignBundleInput
): Promise<GenerateCampaignBundleOutput | { error: string }> {
  try {
    const result = await generateCampaignBundle(input);
    return result;
  } catch (e: any) {
    console.error('Error in generateCampaignBundle flow:', e);
    const message = e.message || 'An unexpected error occurred.';
    return { error: `Failed to generate campaign bundle: ${message}` };
  }
}
