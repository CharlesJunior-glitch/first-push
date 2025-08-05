"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { Search, Menu, User, LogOut, Settings, BookOpen, BarChart2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const isLoggedIn = true // Mock authentication state

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-bold">
                  <BookOpen className="h-5 w-5" />
                  <span>SkillsHub</span>
                </Link>
                <div className="grid gap-3">
                  <Link href="/" className="flex items-center gap-2 text-lg font-medium">
                    Home
                  </Link>
                  <Link href="/courses" className="flex items-center gap-2 text-lg font-medium">
                    Courses
                  </Link>
                  <Link href="/about" className="flex items-center gap-2 text-lg font-medium">
                    About
                  </Link>
                  <Link href="/contact" className="flex items-center gap-2 text-lg font-medium">
                    Contact
                  </Link>
                </div>
                <div className="grid gap-3">
                  <div className="font-medium">Categories</div>
                  <Link href="/courses?category=finance" className="flex items-center gap-2">
                    Finance
                  </Link>
                  <Link href="/courses?category=commerce" className="flex items-center gap-2">
                    Commerce
                  </Link>
                  <Link href="/courses?category=sales" className="flex items-center gap-2">
                    Sales
                  </Link>
                  <Link href="/courses?category=trading" className="flex items-center gap-2">
                    Online Trading
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <BookOpen className="h-5 w-5" />
            <span>SkillsHub</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                          href="/courses"
                        >
                          <BarChart2 className="h-6 w-6 text-white" />
                          <div className="mt-4 mb-2 text-lg font-medium text-white">Browse All Courses</div>
                          <p className="text-sm leading-tight text-white/90">
                            Explore our comprehensive collection of skill-building courses
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link href="/courses?category=finance" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                          )}
                        >
                          <div className="text-sm font-medium leading-none">Finance</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Master financial concepts and investment strategies
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/courses?category=commerce" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                          )}
                        >
                          <div className="text-sm font-medium leading-none">Commerce</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn e-commerce and business operations
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/courses?category=sales" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                          )}
                        >
                          <div className="text-sm font-medium leading-none">Sales</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Develop persuasive sales techniques
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/courses?category=trading" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                          )}
                        >
                          <div className="text-sm font-medium leading-none">Online Trading</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Understand stock markets and trading strategies
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          {isSearchOpen ? (
            <div className="relative w-full max-w-[200px] md:max-w-[300px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="w-full rounded-full bg-background pl-8 md:w-[300px]"
                onBlur={() => setIsSearchOpen(false)}
                autoFocus
              />
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className="hidden md:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <ModeToggle />
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">
                    <User className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/logout">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
