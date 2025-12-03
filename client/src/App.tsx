import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Equipe from "./pages/Equipe";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Agendar from "./pages/Agendar";
import Contato from "./pages/Contato";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import GoogleAdsTracking from "./components/GoogleAdsTracking";

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/equipe" component={Equipe} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/agendar" component={Agendar} />
        <Route path="/contato" component={Contato} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <GoogleAdsTracking />
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
