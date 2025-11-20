import { Book, Code2, Brain, Globe, FlaskConical, Layers } from "lucide-react";

const categories = [
  { icon: Book, name: "Guides", desc: "Step-by-step tutorials and deep dives" },
  { icon: Code2, name: "Development", desc: "Frontend, backend, tooling, and more" },
  { icon: Brain, name: "AI & ML", desc: "Prompts, models, and practical patterns" },
  { icon: Globe, name: "Web", desc: "APIs, performance, architecture" },
  { icon: FlaskConical, name: "Science", desc: "Data, experiments, visualizations" },
  { icon: Layers, name: "Systems", desc: "Design, scalability, reliability" },
];

function Categories() {
  return (
    <section id="categories" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Browse categories</h2>
          <a href="#" className="text-sm text-blue-300/80 hover:text-white">See all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <div
              key={c.name}
              className="group rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 size-20 rounded-full bg-blue-500/10 blur-2xl group-hover:bg-blue-500/20" />
              <div className="flex items-start gap-4">
                <div className="size-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white grid place-items-center shadow-lg shadow-blue-500/20">
                  <c.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{c.name}</h3>
                  <p className="text-sm text-blue-200/80 mt-1">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
