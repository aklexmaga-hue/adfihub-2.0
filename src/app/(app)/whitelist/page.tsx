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

export default function WhitelistPage() {
  return (
    <div className="container mx-auto max-w-2xl py-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl">
            Join the Whitelist
          </CardTitle>
          <CardDescription>
            Apply for early access to AdFiHub. Approved members will be the
            first to access our marketplace and AI tools.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="wallet">Wallet Address (Optional)</Label>
              <Input
                id="wallet"
                placeholder="0x... (ETH/ERC-20)"
              />
               <p className="text-xs text-muted-foreground">
                For Web3 feature access and potential airdrops.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="invite-code">Invite Code (Optional)</Label>
              <Input id="invite-code" placeholder="Enter invite code" />
            </div>
            <Button type="submit" className="w-full">
              Apply for Access
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
