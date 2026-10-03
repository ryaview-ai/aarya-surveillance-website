import type { RouteRecord } from "vite-react-ssg";

import Layout from "./Layout";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Repair from "./pages/Repair";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

/**
 * Route table for vite-react-ssg. Each child path is prerendered to static
 * HTML at build time. The "*" route is the client-side fallback for unknown
 * paths (served via the SPA rewrite in vercel.json).
 */
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    entry: "src/Layout.tsx",
    children: [
      { index: true, element: <Index /> },
      { path: "about", element: <About /> },
      { path: "repair", element: <Repair /> },
      { path: "services", element: <Services /> },
      { path: "brands", element: <Brands /> },
      { path: "contact", element: <Contact /> },
      // Prerendered to dist/404.html; Vercel serves it (404 status) for any
      // unmatched path. The "*" route renders the same NotFound at runtime, so
      // the static 404.html hydrates without a mismatch.
      { path: "404", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
