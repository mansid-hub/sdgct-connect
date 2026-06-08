import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import About from "./pages/About.tsx";
import Trustees from "./pages/Trustees.tsx";
import TrusteeDetail from "./pages/TrusteeDetail.tsx";
import Contact from "./pages/Contact.tsx";
import Donate from "./pages/Donate.tsx";
import Institution from "./pages/Institution.tsx";
import Colleges from "./pages/Colleges.tsx";
import Hospitals from "./pages/Hospitals.tsx";
import InstitutionRouter from "./pages/InstitutionRouter.tsx";
import InstitutionList from "./pages/InstitutionList.tsx";
import ScrollToTop from "./components/site/ScrollToTop.tsx";
import WhyUs from "@/pages/WhyUs";
import Media from "@/pages/Media";
import BlogsMedia from "@/pages/BlogsMedia";
import PressRelease from "@/pages/PressRelease";
import MissionVision from "@/pages/MissionVision";
import FoundersJourney from "@/pages/FoundersJourney";
import PdfViewer from "@/pages/PdfViewer";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media/blogs" element={<BlogsMedia />} />
          <Route path="/media/blogs/:slug" element={<BlogsMedia />} />
          <Route path="/media/press" element={<PressRelease />} />

          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/about/mission-vision" element={<MissionVision />} />
          <Route path="/about/founders-journey" element={<FoundersJourney />} />
          <Route path="/about" element={<About />} />
          <Route path="/trustees" element={<Trustees />} />
          <Route path="/trustees/:slug" element={<TrusteeDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/institution" element={<Institution />} />
          <Route path="/institution/schools" element={<InstitutionList categorySlug="schools" />} />
          <Route path="/institution/colleges" element={<Colleges />} />
          <Route path="/institution/hospitals" element={<Hospitals />} />
          <Route path="/institution/:parent/:slug" element={<InstitutionRouter />} />
          <Route path="/docs/:slug" element={<PdfViewer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
