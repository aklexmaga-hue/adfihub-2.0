import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bot, Package, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const tools = [
  {
    title: 'CPA/RevShare Estimator',
    description: 'Quickly estimate expected CPA, revenue share payouts, and ROI for any traffic strategy and offer. Get data-driven recommendations in seconds.',
    href: '/ai-tools/estimator',
    icon: TrendingUp,
  },
  {
    title: 'Campaign Bundle Generator',
    description: 'Generate a ready-to-deploy campaign bundle. Includes ad copy, creative suggestions, landing page templates, tracking parameters, and more.',
    href: '/ai-tools/bundle-generator',
    icon: Package,
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {tools.map((tool) => (
          <Card key={tool.href} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-4">
                <tool.icon className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-xl">{tool.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription>{tool.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={tool.href}>
                  Launch Tool <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
