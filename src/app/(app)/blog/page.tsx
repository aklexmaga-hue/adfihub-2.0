import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Rss } from 'lucide-react';
import Link from 'next/link';

const placeholderPosts = [
  {
    id: 1,
    title: 'The Future of Affiliate Marketing with Web3',
    description: 'Explore how blockchain technology is set to revolutionize the world of performance marketing, bringing transparency and trust to the forefront.',
    date: 'August 28, 2025',
    author: 'Jane Doe',
  },
  {
    id: 2,
    title: 'AI in Media Buying: 5 Strategies to Maximize Your ROI',
    description: 'Our new AI tools are just the beginning. Learn about the strategies that will help you leverage artificial intelligence for campaign optimization.',
    date: 'August 25, 2025',
    author: 'John Smith',
  },
  {
    id: 3,
    title: 'AdFiHub Q3 2025 Update: What We\'ve Built and What\'s Next',
    description: 'A look at our progress over the last quarter and a sneak peek into the exciting features coming in Q4, including our on-ramp integration.',
    date: 'August 20, 2025',
    author: 'The AdFiHub Team',
  },
];


export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-4xl py-8">
      <header className="mb-8 space-y-2">
        <div className="flex items-center gap-2">
          <Rss className="h-8 w-8 text-primary" />
          <h1 className="font-headline text-4xl font-bold">Blog</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          News, insights, and updates from the AdFiHub team.
        </p>
      </header>

      <div className="space-y-8">
        {placeholderPosts.map(post => (
          <Card key={post.id} className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{post.title}</CardTitle>
              <CardDescription>
                Posted by {post.author} on {post.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{post.description}</p>
            </CardContent>
            <CardFooter>
              <Link href="#" className="flex items-center gap-2 text-sm font-semibold text-primary">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
