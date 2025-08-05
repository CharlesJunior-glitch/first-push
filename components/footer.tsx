import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold">
              <BookOpen className="h-5 w-5" />
              <span>SkillsHub</span>
            </Link>
            <p className="text-muted-foreground">
              Empowering individuals with practical skills in finance, commerce, sales, and online trading.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/courses?category=finance"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Finance
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=commerce"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Commerce
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=sales"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sales
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=trading"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Online Trading
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-4">Get the latest updates on new courses and special offers.</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="max-w-[220px]" />
              <Button type="submit">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">© 2023 SkillsHub. All rights reserved.</p>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
