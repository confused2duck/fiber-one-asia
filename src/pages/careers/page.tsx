import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { benefits, jobListings } from "@/mocks/careers";

export default function Careers() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-16 bg-primary text-center px-4"><h1 className="text-4xl md:text-5xl font-bold">Join Our Team</h1><p className="mt-4 text-gray-700">Help build the future of intelligent AV across Asia.</p></section>
      <main className="py-16 px-4 max-w-6xl mx-auto grid gap-10 lg:grid-cols-3">
        <section className="lg:col-span-2 space-y-5"><h2 className="text-2xl font-bold">Open Positions</h2>{jobListings.map((job) => <article key={job.id} className="p-5 rounded-xl bg-gray-50 border"><div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3"><div><h3 className="font-bold text-lg">{job.title}</h3><p className="text-sm text-gray-500">{job.department} · {job.location} · {job.type}</p></div><span className="text-sm font-semibold text-accent">{job.salary}</span></div><p className="text-sm text-gray-600 mt-3">{job.description}</p></article>)}</section>
        <aside className="space-y-4"><h2 className="text-2xl font-bold">Why Work Here</h2>{benefits.map((benefit) => <div key={benefit.title} className="p-4 rounded-xl border bg-white"><h3 className="font-semibold">{benefit.title}</h3><p className="text-sm text-gray-600 mt-1">{benefit.description}</p></div>)}</aside>
      </main>
      <Footer />
    </div>
  );
}
