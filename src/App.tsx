import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./app/ui/components/Layout";
import ScrollToTop from "./app/ui/components/ScrollToTop";
import "./index.css";
import HomePage from "./app/ui/pages/home/Home";
import FAQsPage from "./app/ui/pages/FAQ/FAQsPage";
import SafetyPage from "./app/ui/pages/SafetyPage/SafetyPage";
import Welcome from "./app/ui/components/authentication/Welcome";
import FeaturesPage from "./app/ui/pages/Features/FeaturesPage";
import HowItWorksPage from "./app/ui/pages/HowItWorks/HowItWorksPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage/>} />
            <Route path="/how-it-works" element={<HowItWorksPage/>} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route
              path="/welcome-to-get-started"
              element={
                <Welcome
                  onNavigate={function (
                    screen:
                      | "welcome"
                      | "signup"
                      | "signin"
                      | "forgot-password"
                      | "verification"
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
