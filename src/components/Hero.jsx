import { Sparkles, Search } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.25),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-200/90 text-xs mb-6">
            <Sparkles className="size-4 text-blue-300" />
            <span>New look • Smoother, cleaner, faster</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Explore and grow your knowledge
          </h1>
          <p className="mt-4 text-blue-200/80 max-w-2xl mx-auto">
            A curated hub of articles, tools, and resources to learn faster and build better.
          </p>

          <div className="mt-8 mx-auto max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search topics, tags, or resources..."
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 pr-12 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-blue-200/70" />
            </div>
            <div className="mt-3 text-xs text-blue-300/60">Try: React • System Design • Open Source</div>
          </div>
        </motion.div>
      </div>

      <div className="absolute -top-16 right-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-10 left-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
    </section>
  );
}

export default Hero;
