import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function RecoveryPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Account Recovery</CardTitle>
                <CardDescription>
                    Enter your email to receive a password reset link.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <Button className="w-full">Send Reset Link</Button>
            </CardContent>
            <CardFooter>
                 <Button variant="link" asChild className="w-full">
                    <Link href="/login">
                        Back to Login
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
