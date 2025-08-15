import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { Index } from "@/pages/Index";
import { Test } from "@/pages/Test";
import { Result } from "@/pages/Result";
import { NotFound } from "@/pages/NotFound";
import { Temperaments } from "./pages/Temperaments";

// Este queryClient é necessário para o QueryClientProvider
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* O BrowserRouter foi removido daqui para evitar conflito */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/test" element={<Test />} />
          <Route path="/result" element={<Result />} />
          <Route path="/temperaments" element={<Temperaments />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
