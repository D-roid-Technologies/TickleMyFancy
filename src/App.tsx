import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./app/ui/components/ScrollToTop";
import Layout from "./app/ui/components/Layout";
import AppEntry from "./app/ui/AppEntry";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <ScrollToTop />
          <AppEntry />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
