import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Bot, Images, Package, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const tools = [
  {
    title: 'CPA/RevShare Estimator',
    description: 'Quickly estimate expected CPA, revenue share payouts, and ROI for any traffic strategy and offer. Get data-driven recommendations in seconds.',
    href: '/ai-tools/estimator',
    icon: TrendingUp,
    status: 'Live',
  },
  {
    title: 'Campaign Bundle Generator',
    description: 'Generate a ready-to-deploy campaign bundle. Includes ad copy, creative suggestions, landing page templates, tracking parameters, and more.',
    href: '/ai-tools/bundle-generator',
    icon: Package,
    status: 'Live',
  },
   {
    title: 'Ad Creative Generator',
    description: 'Instantly create high-converting ad creatives. Provide a prompt and get multiple visual options tailored to your campaign vertical and audience.',
    href: '#',
    icon: Images,
    status: 'In Development',
  },
];

export default function AiToolsPage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="space-y-2">
        <div className="flex items-center gap-2">
          <Bot className="h-8 w-8 text-primary" />
          <h1 className="font-headline text-4xl font-bold">AI Tools</h1>
        </div>
        <p className="text-muted-foreground">
          Leverage our powerful AI to optimize your campaigns and maximize profit.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.title} className={`flex flex-col ${tool.status !== 'Live' ? 'border-dashed' : ''}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-4">
                  <tool.icon className={`h-8 w-8 ${tool.status !== 'Live' ? 'text-muted-foreground' : 'text-primary'}`} />
                  <CardTitle className={`font-headline text-xl ${tool.status !== 'Live' ? 'text-muted-foreground' : ''}`}>{tool.title}</CardTitle>
                </div>
                {tool.status !== 'Live' && (
                  <Badge variant="outline">{tool.status}</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className={tool.status !== 'Live' ? 'text-muted-foreground/80' : ''}>
                {tool.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" disabled={tool.status !== 'Live'}>
                <Link href={tool.href}>
                  {tool.status === 'Live' ? 'Launch Tool' : 'Coming Soon'}
                  {tool.status === 'Live' && <ArrowRight className="ml-2 h-4 w-4" />}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
