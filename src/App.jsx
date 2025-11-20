import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.15),transparent_30%)]" />

      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Featured />
      </main>
      <Footer />
    </div>
  );
}

export default App;
