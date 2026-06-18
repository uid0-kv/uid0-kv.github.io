import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SearchDialog from "@/components/SearchDialog";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SearchProvider } from "./contexts/SearchContext";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Publications from "./pages/Publications";
import Intersections from "./pages/Intersections";
import Fun from "./pages/Fun";


function Router() {
  return (
    <Switch>
      <Route path={"\\"} component={Home} />
      <Route path={"/projects"} component={Projects} />
      <Route path={"/blogs"} component={Blogs} />
      <Route path={"/publications"} component={Publications} />
      <Route path={"/intersections"} component={Intersections} />
      <Route path={"/fun"} component={Fun} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
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
        switchable
      >
        <SearchProvider>
          <TooltipProvider>
            <Toaster />
            <SearchDialog />
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <div className="flex-1">
                <Router />
              </div>
              <Footer />
            </div>
          </TooltipProvider>
        </SearchProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
