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

const transactions = [
  {
    campaign: 'Satoshi Slots Campaign',
    offerId: '12345',
    type: 'Payout',
    status: 'Approved',
    date: '2023-06-23',
    amount: 250.0,
    statusVariant: 'outline',
  },
  {
    campaign: 'AdPro Agency Deposit',
    offerId: '67890',
    type: 'Deposit',
    status: 'Completed',
    date: '2023-06-24',
    amount: 1500.0,
    statusVariant: 'outline',
  },
  {
    campaign: 'High-Roller Casino',
    offerId: '78901',
    type: 'Payout',
    status: 'Approved',
    date: '2023-06-25',
    amount: 750.5,
    statusVariant: 'outline',
  },
  {
    campaign: 'CryptoRamp Payout',
    offerId: '23456',
    type: 'Withdrawal',
    status: 'Processing',
    date: '2023-06-26',
    amount: -1000.0,
    statusVariant: 'secondary',
  },
  {
    campaign: 'E-com Brand Promo',
    offerId: '34567',
    type: 'Payout',
    status: 'Declined',
    date: '2023-06-27',
    amount: 120.0,
    statusVariant: 'destructive',
  },
];


export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-headline text-3xl font-bold">Dashboard</h1>
        <Button asChild>
          <Link href="/marketplace">New Campaign</Link>
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
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
            <Users className="h-4 w-4 text-muted-foreground" />
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
            <CreditCard className="h-4 w-4 text-muted-foreground" />
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
            <CardTitle className="text-sm font-medium">ROI</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
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
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              Recent transactions from your account.
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
               {transactions.map((transaction) => (
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
  );
}