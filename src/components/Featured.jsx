import { ArrowUpRight, Star, Clock } from "lucide-react";

const featured = [
  {
    title: "Modern React Patterns",
    desc: "From hooks to advanced state management and performance.",
    tag: "React",
    time: "8 min read",
  },
  {
    title: "System Design Basics",
    desc: "Scaling, queues, caching, and trade-offs with examples.",
    tag: "Architecture",
    time: "12 min read",
  },
  {
    title: "Prompt Engineering 101",
    desc: "Techniques to get better results from LLMs.",
    tag: "AI",
    time: "6 min read",
  },
];

function Featured() {
  return (
    <section id="featured" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured picks</h2>
          <a href="#" className="text-sm text-blue-300/80 hover:text-white">View more</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((f) => (
            <a
              href="#"
              key={f.title}
              className="group rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-5 hover:from-white/10 hover:to-white/20 transition block"
            >
              <div className="flex items-center gap-2 text-xs text-blue-300/80">
                <Star className="size-4 text-yellow-300" />
                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10">{f.tag}</span>
              </div>
              <h3 className="mt-3 text-white font-semibold group-hover:underline underline-offset-4">{f.title}</h3>
              <p className="text-sm text-blue-200/80 mt-1">{f.desc}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-blue-300/70">
                <span className="inline-flex items-center gap-1"><Clock className="size-4" />{f.time}</span>
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
