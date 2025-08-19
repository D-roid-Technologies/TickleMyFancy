import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Layout from "./app/ui/components/Layout"

import ScrollToTop from "./app/ui/components/ScrollToTop"
import "./index.css"
import HomePage from "./app/ui/pages/home/Home"
import FAQsPage from "./app/ui/pages/FAQ/FAQsPage"
import HowItWorksPage from "./app/ui/pages/HowItWorks/HowItWorksPage"
import SafetyPage from "./app/ui/pages/SafetyPage/SafetyPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage/>} />
              <Route path="/how-it-works" element={<HowItWorksPage/>} />
            <Route path="/safety" element={<SafetyPage/>} />
            <Route path="/faqs" element={<FAQsPage/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
