import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Repair from "./pages/Repair";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import "./App.css";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"        element={<Index />} />
        <Route path="/about"   element={<About />} />
        <Route path="/repair"   element={<Repair />} />
        <Route path="/services" element={<Services />} />
        <Route path="/brands"  element={<Brands />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*"        element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
