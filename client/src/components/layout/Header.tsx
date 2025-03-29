import { useState } from "react";
import { Link, useLocation } from "wouter";
import { LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile as useMobile } from "@/hooks/use-mobile";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About SWP", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "FAQs", path: "/faqs" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [location] = useLocation();
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-primary">
            <LineChart className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary">SWP Calculator</h1>
            <p className="text-xs text-neutral-600">Systematic Withdrawal Plan</p>
          </div>
        </Link>
        
        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col mt-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg ${
                      location === item.path
                        ? "text-primary font-medium"
                        : "text-neutral-600 hover:text-primary"
                    } transition`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`${
                  location === item.path
                    ? "text-primary font-medium"
                    : "text-neutral-600 hover:text-primary"
                } transition`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
