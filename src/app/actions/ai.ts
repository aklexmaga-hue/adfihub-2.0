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
    console.log('Running estimateCampaignPerformance with input:', input);
    const result = await estimateCampaignPerformance(input);
    console.log('Got result from estimateCampaignPerformance:', result);
    return result;
  } catch (error) {
    console.error('Error in estimateCampaignPerformance flow:', error);
    return { error: 'Failed to estimate campaign performance.' };
  }
}

export async function runGenerateCampaignBundle(
  input: GenerateCampaignBundleInput
): Promise<GenerateCampaignBundleOutput | { error: string }> {
  try {
    console.log('Running generateCampaignBundle with input:', input);
    const result = await generateCampaignBundle(input);
    console.log('Got result from generateCampaignBundle:', result);
    return result;
  } catch (error) {
    console.error('Error in generateCampaignBundle flow:', error);
    return { error: 'Failed to generate campaign bundle.' };
  }
}
