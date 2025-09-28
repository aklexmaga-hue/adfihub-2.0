import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-muted/40 py-12">
        <div className="container mx-auto max-w-4xl">
        <Card>
            <CardHeader>
            <CardTitle className="font-headline text-4xl">Privacy Policy</CardTitle>
            <p className="text-muted-foreground">Last Updated: August 29, 2025</p>
            </CardHeader>
            <CardContent className="space-y-6 text-foreground/80">
            <p>
                Welcome to AdFiHub ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>

            <section className="space-y-2">
                <h2 className="font-headline text-2xl font-semibold">1. Information We Collect</h2>
                <p>We may collect personal information that you voluntarily provide to us, such as your name, email address, and wallet address when you join our whitelist or use our services. We also collect non-personal information, such as browser type, operating system, and website usage data.</p>
            </section>

            <section className="space-y-2">
                <h2 className="font-headline text-2xl font-semibold">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-1">
                <li>Provide, operate, and maintain our services.</li>
                <li>Improve, personalize, and expand our services.</li>
                <li>Communicate with you, including for customer service and promotional purposes.</li>
                <li>Process your transactions and manage your account.</li>
                <li>Comply with legal obligations, including KYC/AML requirements.</li>
                </ul>
            </section>

            <section className="space-y-2">
                <h2 className="font-headline text-2xl font-semibold">3. Information Sharing and Disclosure</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this policy. We may share information with trusted third-party service providers to assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
            </section>

             <section className="space-y-2">
                <h2 className="font-headline text-2xl font-semibold">4. Data Security</h2>
                <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
            </section>

            <section className="space-y-2">
                <h2 className="font-headline text-2xl font-semibold">5. Your Rights</h2>
                <p>You have the right to access, correct, or delete your personal information. Please contact us at main@adfihub.xyz to make such a request.</p>
            </section>

            <section className="space-y-2">
                <h2 className="font-headline text-2xl font-semibold">6. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
            </section>
            </CardContent>
        </Card>
        </div>
    </div>
  );
}
