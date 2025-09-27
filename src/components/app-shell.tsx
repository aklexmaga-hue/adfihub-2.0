'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { NAV_LINKS } from '@/lib/constants';
import { Logo } from '@/components/logo';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-7 w-7" />
            <span className="text-lg font-headline font-semibold">AdFiHub</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {NAV_LINKS.map(link => (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname.startsWith(link.href)}
                  tooltip={{
                    children: link.label,
                    className: 'font-body',
                  }}
                >
                  <Link href={link.href}>
                    <link.icon />
                    <span>{link.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="text-xs text-muted-foreground">
          <p>Since 2025</p>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
          <SidebarTrigger className="md:hidden" />
          <div className="flex-1">
            {/* Optional Header Content (e.g., Breadcrumbs) */}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-8 w-8 rounded-full"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://picsum.photos/seed/user/100/100"
                    alt="@user"
                  />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Demo User</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    user@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem disabled>Profile</DropdownMenuItem>
              <DropdownMenuItem disabled>Billing</DropdownMenuItem>
              <DropdownMenuItem disabled>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 p-4 sm:p-6">{children}</main>
        <footer className="border-t bg-card">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 text-sm text-muted-foreground md:flex-row">
            <p>
              ADFIHUB LIMITED (UK Company No. 16701096) -{' '}
              <a
                href="https://find-and-update.company-information.service.gov.uk/company/16701096"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline underline-offset-4 transition-colors hover:text-primary"
              >
                Official Registry <ExternalLink className="h-3 w-3" />
              </a>
            </p>
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-1 text-muted-foreground/80">
                <span>Twitter</span>
                <Badge variant="secondary" className="text-xs">
                  In Development
                </Badge>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground/80">
                <span>Telegram</span>
                <Badge variant="secondary" className="text-xs">
                  In Development
                </Badge>
              </div>
            </div>
          </div>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}
