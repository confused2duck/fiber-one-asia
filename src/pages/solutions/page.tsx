import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { Link } from "react-router-dom";
import { solutionsDetails } from "@/mocks/solutions";
import { solutionsDetailData } from "@/mocks/solutions-detail";

export default function Solutions() {
  const getSlug = (id: number) => solutionsDetailData.find((s) => s.id === id)?.slug || "#";
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-16 bg-primary text-center px-4"><h1 className="text-4xl md:text-5xl font-bold">AI AV Solutions</h1><p className="mt-4 max-w-2xl mx-auto text-gray-700">Integrated hardware, software, and AI for modern communication spaces.</p></section>
      <section className="py-16 px-4 max-w-7xl mx-auto grid gap-6 md:grid-cols-3">{solutionsDetails.map((solution) => <Link key={solution.id} to={`/solutions/${getSlug(solution.id)}`} className="block p-6 rounded-xl border bg-gray-50 hover:border-accent transition-colors"><i className={`${solution.icon} text-3xl text-accent`} /><h2 className="text-xl font-bold mt-4">{solution.title}</h2><p className="text-sm text-gray-600 mt-2">{solution.shortDesc}</p></Link>)}</section>
      <Footer />
    </div>
  );
}
