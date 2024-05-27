import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import RoomsPage from "./views/RoomsPage";
import DestinationsPage from "./views/DestinationsPage";
import TermsOfUsePage from "./views/TermsOfUsePage";
import ContactInfo from "./components/ContactInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="font-[Poppins]">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/terms" element={<TermsOfUsePage />} />
        </Routes>
        <ContactInfo />
      </div>
    </BrowserRouter>
  );
}

export default App;
