import Link from "next/link";
import Footer01 from "@/src/components/sections/footer/footer-01/Footer01";
import { ComponentPreview } from "@/src/components/component-preview";
import { code } from "@/src/components/sections/footer/footer-01/code";

export default function FooterOneDocs() {
   const footerCode = code["Footer01.tsx"];

   return (
      <div className="container mx-auto px-4 py-12 space-y-12">
         {/* Breadcrumbs */}
         <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/doc/components" className="hover:text-foreground">Components</Link>
            <span>/</span>
            <span className="text-foreground font-medium">footer-1</span>
         </nav>

         {/* Header Bento style info */}
         <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Bento Grid</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
               A skewed grid layout with Title, description and a header component.
            </p>
         </div>

         {/* Component Area */}
         <div className="space-y-8">
            <ComponentPreview code={footerCode}>
               <div className="border border-dashed border-border rounded-lg overflow-hidden">
                  <Footer01 />
               </div>
            </ComponentPreview>
         </div>

         {/* Details / Anatomy etc - Minimalist */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-border">
            <div className="space-y-4">
               <h3 className="text-lg font-bold italic">Features</h3>
               <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Interactive explosion animation</li>
                  <li>Smooth scroll integration</li>
                  <li>Responsive layout structure</li>
                  <li>Fully customizable via CSS modules</li>
               </ul>
            </div>
            <div className="space-y-4">
               <h3 className="text-lg font-bold italic">Usage</h3>
               <p className="text-muted-foreground leading-relaxed">
                  The footer component is designed to be placed at the very bottom of your application.
                  It uses GSAP for the explosion effect and Framer Motion for scroll reveals.
               </p>
            </div>
         </div>
      </div>
   );
}
