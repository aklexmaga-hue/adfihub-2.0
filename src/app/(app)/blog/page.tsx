import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Rss } from 'lucide-react';
import Link from 'next/link';

const placeholderPosts = [
  {
    id: 1,
    slug: 'future-of-affiliate-marketing-with-web3',
    title: 'The Future of Affiliate Marketing with Web3',
    description: 'Explore how blockchain technology is set to revolutionize the world of performance marketing, bringing transparency and trust to the forefront.',
    date: 'August 28, 2025',
    author: 'The AdFiHub Team',
    content: `
<p>The digital advertising landscape is ripe for disruption. For years, issues like fraud, lack of transparency, and payment inefficiencies have plagued the affiliate marketing industry. Web3, with its core tenets of decentralization, immutability, and user ownership, offers a compelling solution to these long-standing problems.</p>
<br/>
<h3 class="font-headline text-xl font-semibold">Trust Through Transparency</h3>
<p>By leveraging smart contracts on a blockchain, we can create an ecosystem where all transactions—from clicks to conversions—are recorded on an immutable ledger. This eliminates the "black box" of traditional ad networks and provides a single source of truth for both advertisers and affiliates. At AdFiHub, this is our foundational principle.</p>
<br/>
<h3 class="font-headline text-xl font-semibold">Solving the Payment Problem</h3>
<p>Delayed payouts and high transaction fees are a major pain point for affiliates. With cryptocurrency payments, we can enable instant, global payouts with minimal fees. Smart contracts can automatically trigger payments the moment a conversion is verified, creating a more efficient and fair system for everyone involved.</p>
    `
  },
  {
    id: 2,
    slug: 'ai-in-media-buying-strategies',
    title: 'AI in Media Buying: 5 Strategies to Maximize Your ROI',
    description: 'Our new AI tools are just the beginning. Learn about the strategies that will help you leverage artificial intelligence for campaign optimization.',
    date: 'August 25, 2025',
    author: 'The AdFiHub Team',
        content: `
<p>Artificial Intelligence is no longer a buzzword; it's a powerful tool that media buyers can use to gain a significant competitive edge. By analyzing vast datasets and identifying patterns invisible to the human eye, AI can optimize every aspect of your campaigns.</p>
<br/>
<h3 class="font-headline text-xl font-semibold">1. Predictive Performance Analysis</h3>
<p>Before you even spend a dollar, AI models can estimate the potential performance of a campaign. Our CPA/RevShare Estimator is a perfect example, giving you a baseline ROI to make data-driven decisions.</p>
<br/>
<h3 class="font-headline text-xl font-semibold">2. Automated Creative Generation</h3>
<p>Struggling with creative burnout? AI can generate dozens of ad copy variations, headlines, and even image concepts in seconds, allowing you to A/B test at a scale that was previously impossible.</p>
    `
  },
  {
    id: 3,
    slug: 'q3-2025-update',
    title: 'AdFiHub Q3 2025 Update: What We\'ve Built and What\'s Next',
    description: 'A look at our progress over the last quarter and a sneak peek into the exciting features coming in Q4, including our on-ramp integration.',
    date: 'August 20, 2025',
    author: 'The AdFiHub Team',
        content: `
<p>The third quarter of 2025 has been a period of intense development and growth for AdFiHub. We've moved from a foundational MVP to a more robust platform, focusing on the core feedback from our early users and partners.</p>
<br/>
<h3 class="font-headline text-xl font-semibold">What We've Accomplished</h3>
<ul class="list-disc pl-6 space-y-2">
  <li>Launched the initial version of our AI-powered CPA Estimator and Campaign Bundle Generator.</li>
  <li>Implemented Web3 wallet sign-in capabilities alongside traditional email login.</li>
  <li>Onboarded our first cohort of advertisers and affiliates from the whitelist.</li>
</ul>
<br/>
<h3 class="font-headline text-xl font-semibold">What's Next: Q4 and Beyond</h3>
<p>Our primary focus for the next quarter is hardening our financial infrastructure. This includes finalizing the integration with our on-ramp and KYC partner, which will allow for seamless fiat-to-crypto deposits and secure withdrawals. We are committed to building the most trusted and efficient marketplace in the industry.</p>
    `
  },
];

export { placeholderPosts };


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
              <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 text-sm font-semibold text-primary">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
