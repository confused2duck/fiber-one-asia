import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="bg-primary text-gray-900 py-6"
    >
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="https://readdy.ai/api/search-image?query=Compact%20professional%20corporate%20logo%20mark%20for%20a%20technology%20company%20featuring%20simplified%20abstract%20fiber%20optic%20symbol%20and%20bold%20text%20with%20blue%20and%20orange%20accent%20colors%20on%20dark%20navy%20background&width=200&height=80&seq=201&orientation=landscape"
              alt="Fiber One Asia"
              className="h-8 w-auto"
              width={107}
              height={41}
            />
          </div>
          <div className="text-sm text-gray-600 text-center md:text-left">
            Copyright 2021 Fiber One Asia Pte Ltd. All Rights Reserved |{" "}
            <Link to="/privacy-policy" className="underline hover:text-accent transition-colors cursor-pointer">
              Privacy Policy
            </Link>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-sm font-medium tracking-wide cursor-default"
          >
            Vision for Tomorrow
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}