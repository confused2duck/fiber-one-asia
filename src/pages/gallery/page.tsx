import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { galleryImages } from "@/mocks/gallery";

const categories = ["All", "Video Wall", "Command Centre", "Interactive", "Digital Signage", "Education", "Video Conference", "AV Automation", "Room Booking"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? galleryImages : galleryImages.filter((g) => g.category === filter);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-20 bg-primary relative overflow-hidden" style={{ minHeight: "320px" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
        <div className="relative w-full px-4 md:px-8 lg:px-12 py-16 md:py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Project Gallery</h1>
            <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base">See our work across Singapore and Southeast Asia.</p>
            <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs md:text-sm font-medium rounded-full border transition-all cursor-pointer whitespace-nowrap ${
                  filter === cat
                    ? "bg-accent text-white border-accent"
                    : "bg-white text-gray-600 border-gray-200 hover:border-accent hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-xl overflow-hidden border border-gray-100 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      width={800}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <span className="text-xs text-accent font-semibold uppercase tracking-wide">{item.category}</span>
                        <p className="text-sm text-gray-200 leading-snug mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-gray-800 group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{item.location}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}