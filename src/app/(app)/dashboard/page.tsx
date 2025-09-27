import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Activity,
  ArrowUpRight,
  CircleDollarSign,
  CreditCard,
  Users,
  Briefcase,
  Target,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const affiliateTransactions = [
  {
    campaign: 'Satoshi Slots Campaign',
    offerId: '12345',
    type: 'Payout',
    status: 'Approved',
    date: '2025-08-23',
    amount: 250.0,
    statusVariant: 'outline',
  },
  {
    campaign: 'High-Roller Casino',
    offerId: '78901',
    type: 'Payout',
    status: 'Approved',
    date: '2025-08-25',
    amount: 750.5,
    statusVariant: 'outline',
  },
  {
    campaign: 'CryptoRamp Payout',
    offerId: '23456',
    type: 'Withdrawal',
    status: 'Processing',
    date: '2025-08-26',
    amount: -1000.0,
    statusVariant: 'secondary',
  },
  {
    campaign: 'E-com Brand Promo',
    offerId: '34567',
    type: 'Payout',
    status: 'Declined',
    date: '2025-08-27',
    amount: 120.0,
    statusVariant: 'destructive',
  },
];

const advertiserTransactions = [
   {
    campaign: 'AdPro Agency Deposit',
    offerId: 'N/A',
    type: 'Deposit',
    status: 'Completed',
    date: '2025-08-24',
    amount: 1500.0,
    statusVariant: 'outline',
  },
  {
    campaign: 'Satoshi Slots Invoice',
    offerId: '12345',
    type: 'Invoice',
    status: 'Paid',
    date: '2025-08-28',
    amount: -250.0,
    statusVariant: 'outline',
  },
   {
    campaign: 'High-Roller Casino Invoice',
    offerId: '78901',
    type: 'Invoice',
    status: 'Due',
    date: '2025-09-01',
    amount: -750.5,
    statusVariant: 'secondary',
  },
]


const AffiliateDashboard = () => (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+23</div>
            <p className="text-xs text-muted-foreground">
              +5 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12.4%</div>
            <p className="text-xs text-muted-foreground">
              +1.9% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average ROI</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573%</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="grid gap-2">
            <CardTitle>Recent Payouts &amp; Withdrawals</CardTitle>
            <CardDescription>
              Recent transactions from your affiliate account.
            </CardDescription>
          </div>
          <Button asChild size="sm" className="ml-auto gap-1">
            <Link href="/withdrawal">
              View All
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign</TableHead>
                <TableHead className="hidden sm:table-cell">Type</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
               {affiliateTransactions.map((transaction) => (
                <TableRow key={transaction.offerId}>
                  <TableCell>
                    <div className="font-medium">{transaction.campaign}</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      Offer ID: {transaction.offerId}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{transaction.type}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge
                      className="text-xs"
                      variant={transaction.statusVariant as any}
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{transaction.date}</TableCell>
                  <TableCell className={`text-right ${transaction.amount < 0 ? 'text-destructive' : ''}`}>
                    {transaction.amount < 0 ? '-' : ''}${Math.abs(transaction.amount).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
)

const AdvertiserDashboard = () => (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Account Balance</CardTitle>
            <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,250.00</div>
            <p className="text-xs text-muted-foreground">
              Remaining account funds
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Offers</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              2 pending approval
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Affiliates</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+78</div>
            <p className="text-xs text-muted-foreground">
              +15 this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payouts</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,845.50</div>
            <p className="text-xs text-muted-foreground">
              Invoices due this cycle
            </p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="grid gap-2">
            <CardTitle>Recent Account Activity</CardTitle>
            <CardDescription>
              Recent deposits and invoices for your account.
            </CardDescription>
          </div>
          <Button asChild size="sm" className="ml-auto gap-1">
            <Link href="/deposit">
              View All
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
           <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead className="hidden sm:table-cell">Type</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
               {advertiserTransactions.map((transaction, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="font-medium">{transaction.campaign}</div>
                     {transaction.offerId !== 'N/A' && <div className="hidden text-sm text-muted-foreground md:inline">
                      Offer ID: {transaction.offerId}
                    </div>}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{transaction.type}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge
                      className="text-xs"
                      variant={transaction.statusVariant as any}
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{transaction.date}</TableCell>
                  <TableCell className={`text-right ${transaction.amount < 0 ? 'text-destructive' : ''}`}>
                     {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
)


export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="font-headline text-3xl font-bold">Dashboard</h1>
        <Button asChild className="w-full sm:w-auto">
          <Link href="/marketplace">Explore Marketplace</Link>
        </Button>
      </div>

       <Tabs defaultValue="affiliate" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="affiliate">Affiliate View</TabsTrigger>
          <TabsTrigger value="advertiser">Advertiser View</TabsTrigger>
        </TabsList>
        <TabsContent value="affiliate" className="mt-6">
          <AffiliateDashboard />
        </TabsContent>
        <TabsContent value="advertiser" className="mt-6">
            <AdvertiserDashboard />
        </TabsContent>
      </Tabs>
    </div>
  );
}

    