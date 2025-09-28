import { placeholderPosts } from '@/app/(app)/blog/page';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = placeholderPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-3xl py-8">
      <article className="space-y-8">
        <header className="space-y-4">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <Badge variant="secondary" className="w-fit">
            {post.date}
          </Badge>
          <h1 className="font-headline text-4xl font-bold tracking-tight">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground">By {post.author}</p>
        </header>
        <div
          className="prose prose-lg dark:prose-invert max-w-none text-foreground/80"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
