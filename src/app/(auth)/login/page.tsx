import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function LoginPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Login</CardTitle>
                <CardDescription>
                    Welcome back. Please sign in to your account.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link href="/recovery" className="text-sm underline underline-offset-4">
                            Forgot password?
                        </Link>
                    </div>
                    <Input id="password" type="password" />
                </div>
                <Button className="w-full">Sign In</Button>
                <Separator className="my-4" />
                <div className="space-y-2">
                    <Button variant="outline" className="w-full">Sign in with Google</Button>
                    <Button variant="outline" className="w-full">Sign in with Wallet</Button>
                </div>
            </CardContent>
            <CardFooter>
                <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link href="/whitelist" className="underline underline-offset-4">
                        Join the whitelist
                    </Link>
                </p>
            </CardFooter>
        </Card>
    );
}
