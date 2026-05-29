import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { offices } from "@/mocks/about";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-16 bg-primary text-center px-4"><h1 className="text-4xl md:text-5xl font-bold">Contact Fiber One Asia</h1><p className="mt-4 text-gray-700">Tell us about your AV project and our team will get back to you.</p></section>
      <main className="py-16 px-4 max-w-6xl mx-auto grid gap-8 lg:grid-cols-2">
        <form className="p-6 rounded-xl bg-gray-50 border space-y-4"><input className="w-full p-3 rounded border" placeholder="Name" /><input className="w-full p-3 rounded border" placeholder="Email" /><input className="w-full p-3 rounded border" placeholder="Company" /><textarea className="w-full p-3 rounded border min-h-36" placeholder="Project details" /><button className="px-6 py-3 bg-accent text-white rounded-lg font-semibold" type="button">Send Message</button></form>
        <div className="space-y-4">{offices.map((office) => <div key={office.city} className="p-5 rounded-xl border"><h3 className="font-bold text-lg">{office.city}</h3><p className="text-sm text-gray-600 mt-1">{office.address}</p><p className="text-sm text-accent mt-2">{office.phones.join(" · ")}</p></div>)}</div>
      </main>
      <Footer />
    </div>
  );
}
