import Image from "next/image";
import { Button } from "./ui/button";
import { Bell, User } from "lucide-react";

export function Header() {
  return (
    <header className="bg-card border-b border-border px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md flex items-center justify-center">
            <Image src="/logo.svg" alt="Library Logo" width={24} height={24} />
          </div>
          <h1 className="font-medium">Library Reserve</h1>
        </div>
      </div>

      <nav
        className="hidden md:flex items-center gap-6"
        role="navigation"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Browse
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          My Books
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Account
        </a>
      </nav>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" aria-label="Notifications">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="sm" aria-label="User profile">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
