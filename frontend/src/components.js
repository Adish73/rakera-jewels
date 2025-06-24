import React, { useState } from 'react';

// Header Component
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-white py-4 px-6 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full flex items-center justify-center">
            <span className="text-slate-800 font-bold text-sm">R</span>
          </div>
          <h1 className="text-xl font-bold tracking-wide">RAKHERA JEWELS</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-amber-400 transition-colors text-sm font-medium">COLLECTIONS</a>
          <a href="#collections" className="hover:text-amber-400 transition-colors text-sm font-medium">HIGH JEWELLERY</a>
          <a href="#about" className="hover:text-amber-400 transition-colors text-sm font-medium">OUR STORY</a>
          <a href="#store" className="hover:text-amber-400 transition-colors text-sm font-medium">STORE LOCATOR</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors text-sm font-medium">CONTACT</a>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <button className="hover:text-amber-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="hover:text-amber-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button className="hover:text-amber-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0H17" />
            </svg>
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-800 border-t border-slate-700">
          <nav className="flex flex-col py-4">
            <a href="#home" className="px-6 py-2 hover:bg-slate-700 hover:text-amber-400 transition-colors">COLLECTIONS</a>
            <a href="#collections" className="px-6 py-2 hover:bg-slate-700 hover:text-amber-400 transition-colors">HIGH JEWELLERY</a>
            <a href="#about" className="px-6 py-2 hover:bg-slate-700 hover:text-amber-400 transition-colors">OUR STORY</a>
            <a href="#store" className="px-6 py-2 hover:bg-slate-700 hover:text-amber-400 transition-colors">STORE LOCATOR</a>
            <a href="#contact" className="px-6 py-2 hover:bg-slate-700 hover:text-amber-400 transition-colors">CONTACT</a>
          </nav>
        </div>
      )}
    </header>
  );
};

// Hero Section Component
export const HeroSection = () => {
  return (
    <section 
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1643300866907-032b3baeeb1f')`
      }}
    >
      <div className="text-center text-white z-10">
        <h1 className="text-6xl md:text-8xl font-light mb-4 tracking-wide">
          RAKHERA JEWELS
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Crafting Dreams in Gold & Gemstones
        </p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors">
          DISCOVER COLLECTIONS
        </button>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-20">
        <img 
          src="https://images.pexels.com/photos/7723554/pexels-photo-7723554.jpeg" 
          alt="Decorative jewelry"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1720686615374-ea04dac6a66e" 
          alt="Decorative jewelry"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </section>
  );
};

// Collection Card Component
export const CollectionCard = ({ title, description, image, buttonText = "DISCOVER MORE" }) => {
  return (
    <div className="group relative overflow-hidden bg-stone-100 h-96 md:h-[500px]">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
        <h3 className="text-2xl md:text-3xl font-light mb-4 tracking-wide">{title}</h3>
        <p className="text-sm md:text-base mb-6 font-light leading-relaxed">{description}</p>
        <button className="self-start bg-amber-600 hover:bg-amber-700 px-6 py-2 text-xs font-medium tracking-wider transition-colors">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

// Main Collections Section
export const CollectionsSection = () => {
  const collections = [
    {
      title: "HERITAGE COLLECTION",
      description: "Inspired by ancient craftsmanship and timeless beauty. Each piece tells a story of tradition and elegance.",
      image: "https://images.unsplash.com/photo-1543295204-2ae345412549"
    },
    {
      title: "RAKHERA X ARTISAN COLLECTION",
      description: "A collaboration with master artisans, blending contemporary design with traditional techniques.",
      image: "https://images.pexels.com/photos/7078360/pexels-photo-7078360.jpeg"
    }
  ];

  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <CollectionCard key={index} {...collection} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Flagship Store Section
export const FlagshipSection = () => {
  return (
    <section className="py-20 bg-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-stone-800">
              THE RAKHERA FLAGSHIP
            </h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Experience luxury redefined at our flagship store. Immerse yourself in a world where 
              every detail speaks of craftsmanship and every piece tells a story of heritage.
            </p>
            <button className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors">
              VISIT OUR BOUTIQUE
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/7629856/pexels-photo-7629856.jpeg"
              alt="Rakhera Flagship Store"
              className="w-full h-80 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-400 rounded-lg opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// High Jewellery Section
export const HighJewellerySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-light mb-12 text-stone-800">
          TALES OF LUXURY - HIGH JEWELLERY COLLECTION
        </h2>
        
        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1655693487677-683764e20c08"
            alt="High Jewellery Collection"
            className="w-full max-w-4xl mx-auto h-96 object-cover rounded-lg shadow-2xl"
          />
        </div>
        
        <p className="text-lg text-stone-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Our High Jewellery collection represents the pinnacle of luxury craftsmanship. 
          Each piece is meticulously handcrafted using the finest materials and techniques 
          passed down through generations.
        </p>
        
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors">
          EXPLORE HIGH JEWELLERY
        </button>
      </div>
    </section>
  );
};

// Lifestyle Section
export const LifestyleSection = () => {
  return (
    <section className="py-20 bg-stone-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1562088746-125fc60079ae"
              alt="Lifestyle"
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-transparent opacity-30 rounded-lg"></div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              TIMELESS ELEGANCE
            </h2>
            <p className="text-lg text-stone-300 mb-8 leading-relaxed">
              From everyday elegance to special occasions, Rakhera Jewels complements 
              every moment of your life with pieces that speak to your soul and 
              celebrate your unique story.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors">
              SHOP LIFESTYLE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// As Seen On Section
export const AsSeenOnSection = () => {
  const publications = [
    { name: "VOGUE", logo: "V" },
    { name: "HARPER'S BAZAAR", logo: "HB" },
    { name: "ELLE", logo: "E" },
    { name: "VANITY FAIR", logo: "VF" },
    { name: "TOWN & COUNTRY", logo: "T&C" }
  ];

  return (
    <section className="py-16 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-light mb-12 text-stone-800 tracking-wide">
          AS SEEN ON
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {publications.map((pub, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-stone-300 rounded-full flex items-center justify-center mb-2">
                <span className="font-bold text-stone-600">{pub.logo}</span>
              </div>
              <span className="text-xs text-stone-500 font-medium tracking-wider">{pub.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Newsletter Section
export const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Rakhera Jewels newsletter!');
    setEmail('');
  };

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-6 text-stone-800">
          STAY CONNECTED
        </h2>
        <p className="text-lg text-stone-600 mb-8 leading-relaxed">
          Be the first to discover our latest collections, exclusive events, and 
          behind-the-scenes stories from the world of Rakhera Jewels.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-stone-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-r-lg font-medium transition-colors"
            >
              SUBSCRIBE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-stone-800 font-bold text-sm">R</span>
              </div>
              <h3 className="text-xl font-bold tracking-wide">RAKHERA JEWELS</h3>
            </div>
            <p className="text-stone-400 leading-relaxed mb-6">
              Crafting dreams in gold and gemstones since generations. Each piece tells a story 
              of heritage, luxury, and timeless elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-semibold mb-4">COLLECTIONS</h4>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Heritage Collection</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">High Jewellery</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Artisan Collaboration</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Bridal Collection</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-semibold mb-4">CUSTOMER CARE</h4>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Returns & Exchanges</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-sm">
            © 2025 Rakhera Jewels. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-stone-400 hover:text-amber-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-stone-400 hover:text-amber-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-stone-400 hover:text-amber-400 text-sm transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};