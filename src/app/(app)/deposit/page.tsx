import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Terminal } from 'lucide-react';

export default function DepositPage() {
  return (
    <div className="container mx-auto max-w-2xl py-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl">
            Deposit Funds
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive" className="bg-accent/20 border-accent text-accent-foreground">
            <Terminal className="h-4 w-4" />
            <AlertTitle className="font-headline">
              Deposit Feature Currently Disabled
            </AlertTitle>
            <AlertDescription className="space-y-3 mt-2">
              <p>
                This page is currently disabled because our on-ramp partner has
                not yet been approved.
              </p>
              <p>
                Any deposits made in a private test environment will be credited
                to user accounts after public launch, along with a special
                launch bonus.
              </p>
            </AlertDescription>
          </Alert>

          <div className="mt-8 text-center text-muted-foreground">
            <p>Further instructions will be available here soon.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
