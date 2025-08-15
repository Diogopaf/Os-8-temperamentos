// Imports dos providers e UI
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Imports do layout e rotas
import { Route, Routes, Link } from "react-router-dom";
import { Flame, Menu } from "lucide-react";
import { Sidebar } from "./components/ui/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import { Button } from "./components/ui/button";

// Imports das páginas
import { Index } from "./pages/Index";
import { Test } from "./pages/Test";
import { Result } from "./pages/Result";
import { Temperaments } from "./pages/Temperaments";
import { NotFound } from "./pages/NotFound";

// Cria uma instância do QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    // Adiciona os providers à volta de toda a aplicação
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Componentes de notificação */}
        <Toaster />
        <Sonner />

        {/* A estrutura visual original do site */}
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <Sidebar />
          <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                  <nav className="grid gap-2 text-lg font-medium">
                    <Link
                      to="/"
                      className="flex items-center gap-2 text-lg font-semibold mb-4"
                    >
                      <Flame className="h-6 w-6" />
                      <span>Temperamentos</span>
                    </Link>
                    <Link
                      to="/test"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      Fazer o Teste
                    </Link>
                    <Link
                      to="/temperaments"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      Temperamentos
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
              <div className="w-full flex-1">
                {/* Pode adicionar uma barra de busca aqui */}
              </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/test" element={<Test />} />
                <Route path="/result/:temperamentId" element={<Result />} />
                <Route path="/temperaments" element={<Temperaments />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
