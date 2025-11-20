import { Menu, Library, Github, Sparkles } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 blur-md bg-blue-500/40 rounded-full -z-10" />
            <div className="size-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 grid place-items-center text-white shadow-lg shadow-blue-500/30">
              <Library className="size-5" />
            </div>
          </div>
          <span className="font-semibold tracking-tight text-white text-lg">Knowledge Library</span>
          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-white/5 text-blue-200/80 border border-white/10">Revamped</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#discover" className="text-blue-200/80 hover:text-white transition">Discover</a>
          <a href="#categories" className="text-blue-200/80 hover:text-white transition">Categories</a>
          <a href="#featured" className="text-blue-200/80 hover:text-white transition">Featured</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/ameen11s"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-blue-200/80 hover:text-white transition text-sm"
          >
            <Github className="size-4" />
            <span>GitHub</span>
          </a>
          <button className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white">
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
