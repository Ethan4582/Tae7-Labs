"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Github } from "lucide-react";

export function Navbar() {
   const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = React.useState(false);

   React.useEffect(() => {
      setMounted(true);
   }, []);

   return (
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
         <div className="container mx-auto flex h-14 items-center justify-between px-4">
            <div className="flex items-center gap-8">
               <Link href="/" className="text-xl font-bold tracking-tight">
                  Tae7
               </Link>
               <div className="hidden md:flex items-center gap-6">
                  <Link
                     href="/doc/components"
                     className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                     Components
                  </Link>
                  <Link
                     href="#"
                     className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                     Templates
                  </Link>
               </div>
            </div>

            <div className="flex items-center gap-4">
               <Link
                  href="https://github.com/Ethan4582/Tae7-Labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
               >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
               </Link>

               {mounted && (
                  <button
                     onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                     className="text-muted-foreground transition-colors hover:text-foreground"
                     aria-label="Toggle theme"
                  >
                     {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </button>
               )}
            </div>
         </div>
      </nav>
   );
}
