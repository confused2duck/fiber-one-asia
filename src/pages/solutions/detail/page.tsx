import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { Link, useParams } from "react-router-dom";
import { getRelatedSolutions, getSolutionBySlug } from "@/mocks/solutions-detail";

export default function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const solution = slug ? getSolutionBySlug(slug) : undefined;
  if (!solution) return <div className="min-h-screen bg-white"><Navbar /><main className="pt-32 pb-20 text-center"><h1 className="text-3xl font-bold">Solution Not Found</h1><Link className="text-accent mt-4 inline-block" to="/solutions">Back to Solutions</Link></main><Footer /></div>;
  const related = getRelatedSolutions(solution.id, 3);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-16 bg-primary px-4"><div className="max-w-5xl mx-auto"><Link to="/solutions" className="text-accent text-sm">All Solutions</Link><h1 className="text-4xl md:text-5xl font-bold mt-4">{solution.title}</h1><p className="mt-4 text-gray-700 max-w-3xl">{solution.heroDescription}</p></div></section>
      <main className="py-16 px-4 max-w-6xl mx-auto space-y-16"><section className="grid gap-8 lg:grid-cols-2"><div><h2 className="text-2xl font-bold">Overview</h2><p className="mt-4 text-gray-600 leading-relaxed">{solution.overview}</p></div><img src={solution.overviewImageUrl} alt={solution.title} className="rounded-xl aspect-video object-cover w-full" /></section><section><h2 className="text-2xl font-bold mb-6">Key Features</h2><div className="grid gap-4 md:grid-cols-3">{solution.features.map((feature) => <div key={feature.title} className="p-5 rounded-xl border bg-gray-50"><i className={`${feature.icon} text-accent text-2xl`} /><h3 className="font-bold mt-3">{feature.title}</h3><p className="text-sm text-gray-600 mt-2">{feature.description}</p></div>)}</div></section><section><h2 className="text-2xl font-bold mb-6">Related Solutions</h2><div className="grid gap-4 md:grid-cols-3">{related.map((item) => <Link key={item.id} to={`/solutions/${item.slug}`} className="p-5 rounded-xl border bg-white hover:border-accent"><h3 className="font-bold">{item.title}</h3><p className="text-sm text-gray-600 mt-2">{item.tagline}</p></Link>)}</div></section></main>
      <Footer />
    </div>
  );
}
