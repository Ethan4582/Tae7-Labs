"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

interface ComponentPreviewProps {
   children: React.ReactNode;
   code: string;
}

export function ComponentPreview({ children, code }: ComponentPreviewProps) {
   const [tab, setTab] = React.useState<"preview" | "code">("preview");
   const [copied, setCopied] = React.useState(false);

   const copyToClipboard = () => {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
   };

   return (
      <div className="group relative my-8 flex flex-col space-y-2">
         <div className="flex items-center justify-between">
            <div className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
               <button
                  onClick={() => setTab("preview")}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${tab === "preview" ? "bg-background text-foreground shadow-sm" : "hover:bg-background/50 hover:text-foreground"
                     }`}
               >
                  Preview
               </button>
               <button
                  onClick={() => setTab("code")}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${tab === "code" ? "bg-background text-foreground shadow-sm" : "hover:bg-background/50 hover:text-foreground"
                     }`}
               >
                  Code
               </button>
            </div>
            {tab === "code" && (
               <button
                  onClick={copyToClipboard}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-input bg-background text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
               >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
               </button>
            )}
         </div>

         <div className="relative min-h-[400px] w-full rounded-lg border border-border bg-background">
            {tab === "preview" ? (
               <div className="flex min-h-[400px] w-full items-center justify-center overflow-x-auto p-4 md:p-8">
                  <div className="w-full h-full">
                     {children}
                  </div>
               </div>
            ) : (
               <pre className="overflow-x-auto rounded-lg bg-muted p-4 md:p-8">
                  <code className="text-sm font-mono leading-relaxed">{code}</code>
               </pre>
            )}
         </div>
      </div>
   );
}
