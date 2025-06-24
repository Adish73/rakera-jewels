import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
  Header, 
  HeroSection, 
  CollectionsSection, 
  FlagshipSection, 
  HighJewellerySection, 
  LifestyleSection, 
  AsSeenOnSection, 
  NewsletterSection, 
  Footer 
} from './components';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CollectionsSection />
      <FlagshipSection />
      <HighJewellerySection />
      <LifestyleSection />
      <AsSeenOnSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;