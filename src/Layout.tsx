import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import "./App.css";

const queryClient = new QueryClient();

/** Resets scroll on route change. No-op during SSG (no effects on the server). */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/** App shell shared across every route. The page itself renders in <Outlet />. */
const Layout = () => (
  <QueryClientProvider client={queryClient}>
    <ScrollToTop />
    <Navbar />
    <Outlet />
    <Footer />
    <WhatsAppButton />
  </QueryClientProvider>
);

export default Layout;
