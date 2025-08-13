// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppEntry from "./app/ui/AppEntry";
import ScrollToTop from "./app/ui/components/ScrollToTop";
import './index.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <AppEntry />
      </BrowserRouter>
    </>
  );
}

export default App;
