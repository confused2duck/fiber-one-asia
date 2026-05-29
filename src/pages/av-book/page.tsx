import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { useState } from "react";
import { motion } from "motion/react";
import { avBooks } from "@/mocks/av-book";

export default function AVBook() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === "string") params.append(key, value);
    });
    try {
      const response = await fetch("https://readdy.ai/api/form/d8cnduslhp0cimum0of0", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      if (response.ok) { setStatus("success"); setSubmitted(true); form.reset(); }
      else { setStatus("error"); }
    } catch { setStatus("error"); }
  };
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-20 bg-primary relative overflow-hidden" style={{ minHeight: "320px" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
        <div className="relative w-full px-4 md:px-8 lg:px-12 py-16 md:py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">AV Resource Library</h1>
            <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base">Downloadable guides, checklists, and technical resources curated by our engineering team.</p>
            <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="w-full px-4 md:px-8 lg:px-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {avBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group p-5 md:p-6 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">{book.category}</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">{book.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{book.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-5">
                  <span className="flex items-center gap-1"><i className="ri-file-line" />{book.pages} pages</span>
                  <span className="flex items-center gap-1"><i className="ri-hard-drive-line" />{book.fileSize}</span>
                  <span className="flex items-center gap-1"><i className="ri-download-line" />{book.downloads.toLocaleString()}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-2.5 bg-accent text-white text-sm font-semibold rounded-md hover:bg-accent-light transition-colors cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <i className="ri-download-cloud-line" />
                  Download PDF
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Prompt */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-8 md:p-10 rounded-2xl bg-primary text-center"
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Stay Updated</h2>
            <p className="text-sm text-gray-700 mb-6 max-w-lg mx-auto">Get notified when new guides, case studies, and technical resources are published.</p>
            <form id="fiberone-avbook-newsletter" data-readdy-form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input type="email" name="email" required className="w-full sm:flex-1 px-4 py-2.5 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Enter your email" />
              <button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-md hover:bg-accent-light transition-colors whitespace-nowrap cursor-pointer disabled:opacity-60">
                {status === "submitting" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {submitted && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center text-sm text-green-600 mt-4">
                Thanks for subscribing! We'll keep you updated.
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}