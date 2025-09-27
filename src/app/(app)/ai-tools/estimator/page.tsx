import { EstimatorForm } from '@/components/ai/estimator-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

export default function EstimatorPage() {
  return (
    <div className="space-y-6">
       <header className="space-y-2">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-8 w-8 text-primary" />
          <h1 className="font-headline text-4xl font-bold">CPA/RevShare Estimator</h1>
        </div>
        <p className="text-muted-foreground">
          Quickly estimate expected CPA, revenue share payouts, and ROI for a given traffic strategy and offer.
        </p>
      </header>
      <Card>
        <CardHeader>
            <CardTitle>Campaign Parameters</CardTitle>
            <CardDescription>
                Provide the details of your campaign to get an AI-powered performance estimate.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <EstimatorForm />
        </CardContent>
      </Card>
    </div>
  );
}
