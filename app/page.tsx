import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-3.5rem)]">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24 space-y-8">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Build faster with <span className="text-primary italic">premium</span> components.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated library of high-performance, minimalist UI components designed for modern web applications.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/doc/components"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Explore Components
          </Link>
          <Link
            href="https://github.com/Ethan4582/Tae7-Labs"
            className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            GitHub
          </Link>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm font-bold">Tae7-Labs</p>
            <p className="text-xs text-muted-foreground">© 2026 Tae7-Labs. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">Twitter</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">GitHub</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">Discord</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
