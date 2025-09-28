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
      <header className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="font-headline text-4xl font-bold">Admin Console</h1>
          <p className="text-muted-foreground">
            Manage users, listings, and platform settings.
          </p>
        </div>
        <div className="flex w-full items-center gap-2 rounded-md border border-yellow-300 bg-yellow-50 p-3 text-yellow-800 dark:border-yellow-700 dark:bg-yellow-950 dark:text-yellow-300 sm:w-auto">
          <ShieldAlert className="h-5 w-5 flex-shrink-0" />
          <span className="text-sm font-medium">Admin Access Only</span>
        </div>
      </header>
      <Tabs defaultValue="users" className="w-full">
        <TabsList className="grid h-auto w-full grid-cols-2 sm:grid-cols-4">
          <TabsTrigger value="users">User Moderation</TabsTrigger>
          <TabsTrigger value="listings">Listing Approvals</TabsTrigger>
          <TabsTrigger value="whitelist">Whitelist</TabsTrigger>
          <TabsTrigger value="payouts">Payouts</TabsTrigger>
        </TabsList>
        <TabsContent value="users" className="mt-4">
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
        <TabsContent value="listings" className="mt-4">
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
        <TabsContent value="whitelist" className="mt-4">
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
         <TabsContent value="payouts" className="mt-4">
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
