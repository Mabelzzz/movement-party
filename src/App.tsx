import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// About
import Ideology from "./pages/about/Ideology";
import History from "./pages/about/History";
import Executives from "./pages/about/Executives";
import Policies from "./pages/about/Policies";
import Merchandise from "./pages/about/Merchandise";
import StoreMap from "./pages/about/StoreMap";

// Candidates
import Constituency from "./pages/candidates/Constituency";
import PartyList from "./pages/candidates/PartyList";

// Participate
import News from "./pages/participate/News";
import Activities from "./pages/participate/Activities";

// Auth
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
// Other
import Donate from "./pages/Donate";
import { ScrollToTop } from "@/components/ScrollToTop";

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

          {/* About */}
          <Route path="/about/ideology" element={<Ideology />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/executives" element={<Executives />} />
          <Route path="/about/policies" element={<Policies />} />
          <Route path="/about/merchandise" element={<Merchandise />} />
          <Route path="/about/store-map" element={<StoreMap />} />

          {/* Candidates */}
          <Route path="/candidates/constituency" element={<Constituency />} />
          <Route path="/candidates/party-list" element={<PartyList />} />

          {/* Participate */}
          <Route path="/participate/news" element={<News />} />
          <Route path="/participate/activities" element={<Activities />} />

          {/* Auth */}
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />

          {/* Other */}
          <Route path="/donate" element={<Donate />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
