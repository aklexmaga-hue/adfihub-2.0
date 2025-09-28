import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsOfServicePage() {
  return (
    <div className="bg-muted/40 py-12">
      <div className="container mx-auto max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-4xl">Terms of Service</CardTitle>
            <p className="text-muted-foreground">Last Updated: August 29, 2025</p>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground/80">
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the AdFiHub website (the "Service") operated by ADFIHUB LIMITED ("us", "we", or "our").
            </p>

            <section className="space-y-2">
              <h2 className="font-headline text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service. This is a demo version and these terms are for illustrative purposes.</p>
            </section>

            <section className="space-y-2">
              <h2 className="font-headline text-2xl font-semibold">2. Accounts</h2>
              <p>When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
            </section>

            <section className="space-y-2">
              <h2 className="font-headline text-2xl font-semibold">3. Marketplace and AI Tools</h2>
              <p>Our marketplace and AI tools are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </section>

             <section className="space-y-2">
                <h2 className="font-headline text-2xl font-semibold">4. Prohibited Activities</h2>
                <p>You are expressly prohibited from all of the following:</p>
                <ul className="list-disc pl-6 space-y-1">
                <li>Engaging in any fraudulent activity, including but not limited to click fraud, lead fraud, or any other type of fraudulent conversions.</li>
                <li>Using the Service for any illegal or unauthorized purpose.</li>
                <li>Attempting to circumvent any security features of the Service.</li>
                </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-headline text-2xl font-semibold">5. Limitation of Liability</h2>
              <p>In no event shall AdFiHub, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
            </section>

            <section className="space-y-2">
              <h2 className="font-headline text-2xl font-semibold">6. Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.</p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
