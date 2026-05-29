import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Solutions from "../pages/solutions/page";
import SolutionDetail from "../pages/solutions/detail/page";
import Gallery from "../pages/gallery/page";
import Testimonials from "../pages/testimonials/page";
import Contact from "../pages/contact/page";
import Careers from "../pages/careers/page";
import AVBook from "../pages/av-book/page";
import PrivacyPolicy from "../pages/privacy-policy/page";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/solutions", element: <Solutions /> },
  { path: "/solutions/:slug", element: <SolutionDetail /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/testimonials", element: <Testimonials /> },
  { path: "/contact", element: <Contact /> },
  { path: "/careers", element: <Careers /> },
  { path: "/av-book", element: <AVBook /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "*", element: <NotFound /> },
];

export default routes;