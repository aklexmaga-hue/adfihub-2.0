import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Shield } from 'lucide-react';

export default function WithdrawalPage() {
  return (
    <div className="container mx-auto max-w-2xl py-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl">
            Request Withdrawal
          </CardTitle>
          <CardDescription>
            Securely withdraw your funds. Please ensure your payout information
            is correct.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertTitle>KYC Required</AlertTitle>
            <AlertDescription>
              For security and compliance, you must complete KYC verification before
              making a withdrawal.
              <Button variant="link" className="p-0 h-auto ml-1">Start Verification</Button>
            </AlertDescription>
          </Alert>

          <div className="space-y-4 opacity-50 pointer-events-none">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="amount">Amount (USD)</Label>
              <Input id="amount" type="number" placeholder="1000.00" disabled />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="method">Payout Method</Label>
              <Select disabled>
                <SelectTrigger id="method">
                  <SelectValue placeholder="Select a method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usdc">USDC (ERC-20)</SelectItem>
                  <SelectItem value="btc">Bitcoin</SelectItem>
                  <SelectItem value="wire">Wire Transfer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="address">Wallet Address / Account Info</Label>
              <Input id="address" placeholder="0x..." disabled />
            </div>

            <Button className="w-full" disabled>
              Request Withdrawal
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
