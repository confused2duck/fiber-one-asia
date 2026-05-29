import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { motion } from "motion/react";
import { allTestimonials } from "@/mocks/testimonials";

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-20 bg-primary relative overflow-hidden" style={{ minHeight: "320px" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
        <div className="relative w-full px-4 md:px-8 lg:px-12 py-16 md:py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Client Testimonials</h1>
            <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base">Trusted by leading organizations across Singapore and Southeast Asia.</p>
            <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="w-full px-4 md:px-8 lg:px-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            {allTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-6 md:p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:border-accent/20 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-gray-800 font-bold text-lg flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-base font-bold text-gray-900">{testimonial.name}</h3>
                      <span className="text-xs text-gray-400 hidden sm:inline">|</span>
                      <span className="text-sm text-accent font-medium">{testimonial.company}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{testimonial.role}</p>
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <i key={i} className="ri-star-fill text-accent text-sm" />
                      ))}
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">{testimonial.text}</p>
                    <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-xs font-medium text-primary">
                      <i className="ri-briefcase-line text-accent" />
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}