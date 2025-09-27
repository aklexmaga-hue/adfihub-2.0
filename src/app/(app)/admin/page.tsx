import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { KeyRound, ShieldAlert } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex items-start justify-between">
        <div>
          <h1 className="font-headline text-4xl font-bold">Admin Console</h1>
          <p className="text-muted-foreground">
            Manage users, listings, and platform settings.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-yellow-300 bg-yellow-50 p-3 text-yellow-800 dark:border-yellow-700 dark:bg-yellow-950 dark:text-yellow-300">
          <ShieldAlert className="h-5 w-5" />
          <span className="text-sm font-medium">Admin Access Only</span>
        </div>
      </header>
      <Tabs defaultValue="users">
        <TabsList>
          <TabsTrigger value="users">User Moderation</TabsTrigger>
          <TabsTrigger value="listings">Listing Approvals</TabsTrigger>
          <TabsTrigger value="whitelist">Whitelist</TabsTrigger>
          <TabsTrigger value="payouts">Payouts</TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
              <CardDescription>
                Manage user accounts and roles.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">User management interface coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="listings">
           <Card>
            <CardHeader>
              <CardTitle>Pending Listings</CardTitle>
              <CardDescription>
                Review and approve new marketplace listings.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Listing approval queue coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="whitelist">
           <Card>
            <CardHeader>
              <CardTitle>Whitelist Applications</CardTitle>
              <CardDescription>
                Manage applications for early access.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Whitelist management coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
         <TabsContent value="payouts">
           <Card>
            <CardHeader>
              <CardTitle>Payout Requests</CardTitle>
              <CardDescription>
                Process withdrawal requests.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Payout processing interface coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
