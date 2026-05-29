import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Testimonials", href: "/testimonials" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "AI Interactive Touch", href: "/solutions" },
      { label: "AI Command Centre", href: "/solutions" },
      { label: "AI AV Automation", href: "/solutions" },
      { label: "AI Lighting Control", href: "/solutions" },
      { label: "Chope AI Room Booking", href: "/solutions" },
      { label: "AI Digital Signage", href: "/solutions" },
      { label: "AI Video Wall", href: "/solutions" },
      { label: "AI Unified Communications", href: "/solutions" },
      { label: "AI Managed Services", href: "/solutions" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Download AV Book", href: "/av-book", icon: "ri-book-open-line" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("nav")) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [mobileOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm"
    >
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link to="/" className="flex items-center cursor-pointer">
              <img
                src="https://static.readdy.ai/image/df75ddbe126af1b251cb2de8db121689/d8aba5172dfc0b67f067719ae51ee820.png"
                alt="Fiber One Asia"
                className="h-10 md:h-12 w-auto"
                width={250}
                height={95}
              />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.div whileHover={{ y: -1 }} whileTap={{ y: 0 }}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium whitespace-nowrap cursor-pointer transition-colors text-gray-800 hover:text-accent"
                  >
                    {link.icon && <i className={`${link.icon} text-sm`}></i>}
                    {link.label}
                  </Link>
                </motion.div>
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[240px] border border-gray-100"
                    >
                      {link.children.map((child) => (
                        <motion.div
                          key={child.label}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.15 }}
                        >
                          <Link
                            to={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-accent hover:bg-gray-50 whitespace-nowrap cursor-pointer transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <motion.button
            className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-0.5 bg-gray-800"
            ></motion.span>
            <motion.span
              animate={mobileOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: 24 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-gray-800"
            ></motion.span>
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-0.5 bg-gray-800"
            ></motion.span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden bg-white border-t shadow-lg max-h-[80vh] overflow-y-auto overflow-hidden"
          >
            <div className="px-4 py-3">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="border-b border-gray-100 last:border-0"
                >
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 py-3 text-sm font-medium text-gray-800 cursor-pointer"
                    onClick={() => !link.children && setMobileOpen(false)}
                  >
                    {link.icon && <i className={`${link.icon}`}></i>}
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 pb-2 space-y-1">
                      {link.children.map((child, ci) => (
                        <motion.div
                          key={child.label}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04 + ci * 0.03, duration: 0.25 }}
                        >
                          <Link
                            to={child.href}
                            className="block py-2 text-sm text-gray-600 cursor-pointer hover:text-accent transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}