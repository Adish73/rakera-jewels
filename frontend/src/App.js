import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
  HomePage, 
  JewelleryPage, 
  HighJewelleryPage, 
  AboutPage, 
  StoresPage, 
  ContactPage 
} from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jewellery" element={<JewelleryPage />} />
          <Route path="/high-jewellery" element={<HighJewelleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/stores" element={<StoresPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;