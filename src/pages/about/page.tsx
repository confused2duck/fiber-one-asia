import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { certifications, companyTimeline, offices, teamMembers } from "@/mocks/about";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-16 bg-primary text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About Fiber One Asia</h1>
        <p className="mt-4 max-w-3xl mx-auto text-gray-700">Pioneering AI-powered AV integration across Singapore and Southeast Asia.</p>
      </section>
      <section className="py-16 px-4 max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">Fiber One Asia bridges hardware engineering with intelligent software, delivering adaptive AV systems for collaboration, command, signage, and automation.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[["15+", "Years"], ["500+", "Projects"], ["5", "Countries"], ["80+", "Experts"]].map(([value, label]) => <div key={label} className="p-5 bg-gray-50 rounded-xl text-center"><div className="text-3xl font-bold text-accent">{value}</div><div className="text-sm text-gray-500">{label}</div></div>)}
        </div>
      </section>
      <section className="py-16 px-4 bg-gray-50"><div className="max-w-5xl mx-auto"><h2 className="text-2xl font-bold mb-8 text-center">Our Journey</h2><div className="grid gap-4">{companyTimeline.map((item) => <div key={item.year} className="p-5 bg-white rounded-xl border"><span className="text-accent font-bold">{item.year}</span><h3 className="font-semibold mt-1">{item.title}</h3><p className="text-sm text-gray-600 mt-1">{item.description}</p></div>)}</div></div></section>
      <section className="py-16 px-4 max-w-6xl mx-auto"><h2 className="text-2xl font-bold mb-8 text-center">Leadership</h2><div className="grid gap-5 md:grid-cols-4">{teamMembers.map((member) => <div key={member.id} className="p-5 rounded-xl bg-gray-50 border text-center"><div className="w-14 h-14 rounded-full bg-primary mx-auto mb-3 flex items-center justify-center font-bold">{member.initial}</div><h3 className="font-bold">{member.name}</h3><p className="text-xs text-accent font-semibold">{member.role}</p><p className="text-sm text-gray-600 mt-2">{member.bio}</p></div>)}</div></section>
      <section className="py-16 px-4 bg-gray-50"><div className="max-w-6xl mx-auto grid gap-5 md:grid-cols-3">{certifications.map((cert) => <div key={cert.name} className="p-5 bg-white rounded-xl border"><h3 className="font-bold">{cert.name}</h3><p className="text-sm text-gray-600">{cert.description}</p></div>)}</div></section>
      <section className="py-16 px-4 max-w-6xl mx-auto grid gap-5 md:grid-cols-3">{offices.map((office) => <div key={office.city} className="p-5 rounded-xl bg-gray-50 border"><h3 className="font-bold text-lg">{office.city}</h3><p className="text-sm text-accent font-semibold">{office.name}</p><p className="text-sm text-gray-600 mt-2">{office.address}</p></div>)}</section>
      <Footer />
    </div>
  );
}
