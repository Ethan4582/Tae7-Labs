import Link from "next/link";

export default function ComponentsPage() {
   const componentTypes = [
      { name: "Footer", count: 1, path: "/doc/components/footer/footer-1" },
      { name: "Button", count: 0, path: "#" },
      { name: "Text Animation", count: 0, path: "#" },
   ];

   return (
      <div className="container mx-auto px-4 py-16 space-y-12">
         <div className="space-y-4 max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight">Components</h1>
            <p className="text-lg text-muted-foreground">
               Here you can find all the components available in the library. We are working on adding more components.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {componentTypes.map((type) => (
               <div key={type.name} className="space-y-3">
                  <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                     {type.name}
                  </h2>
                  <div className="flex flex-col gap-2">
                     {type.count > 0 ? (
                        <Link
                           href={type.path}
                           className="text-lg font-medium hover:underline decoration-primary underline-offset-4"
                        >
                           {type.name}-1
                        </Link>
                     ) : (
                        <span className="text-lg font-medium text-muted-foreground/50 italic">
                           Coming soon...
                        </span>
                     )}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
