import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Header Component
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Welcome Bar */}
      <div className="bg-stone-200 text-stone-600 py-2 px-6 text-center text-xs tracking-wide">
        WELCOME TO THE RAKHERA JEWELS WEBSITE
      </div>
      
      <header className="bg-slate-800 text-white py-4 px-6 relative z-50">
        <div className="max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-3">
              {/* Circular Logo with Arabic-style design */}
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-full flex items-center justify-center border-2 border-amber-300 shadow-lg">
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-lg font-serif">ر</span>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-serif tracking-[0.2em] text-amber-100">RAKHERA JEWELS</h1>
                <div className="text-xs tracking-[0.3em] text-amber-300 font-light">راخرا جواهرات</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-center">
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`hover:text-amber-400 transition-colors text-sm font-light tracking-wide ${isActive('/') ? 'text-amber-400' : ''}`}
              >
                COLLECTIONS
              </Link>
              <Link 
                to="/jewellery" 
                className={`hover:text-amber-400 transition-colors text-sm font-light tracking-wide ${isActive('/jewellery') ? 'text-amber-400' : ''}`}
              >
                JEWELLERY
              </Link>
              <Link 
                to="/high-jewellery" 
                className={`hover:text-amber-400 transition-colors text-sm font-light tracking-wide ${isActive('/high-jewellery') ? 'text-amber-400' : ''}`}
              >
                HIGH JEWELLERY
              </Link>
              <Link 
                to="/about" 
                className={`hover:text-amber-400 transition-colors text-sm font-light tracking-wide ${isActive('/about') ? 'text-amber-400' : ''}`}
              >
                OUR STORY
              </Link>
              <Link 
                to="/stores" 
                className={`hover:text-amber-400 transition-colors text-sm font-light tracking-wide ${isActive('/stores') ? 'text-amber-400' : ''}`}
              >
                STORE LOCATOR
              </Link>
              <Link 
                to="/contact" 
                className={`hover:text-amber-400 transition-colors text-sm font-light tracking-wide ${isActive('/contact') ? 'text-amber-400' : ''}`}
              >
                CONTACT
              </Link>
            </div>

            {/* Right Side Icons */}
            <div className="absolute right-0 flex items-center space-x-4">
              <button className="hover:text-amber-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="hover:text-amber-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button className="hover:text-amber-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0H17" />
                </svg>
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden ml-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-slate-800 border-t border-slate-700 z-40">
              <nav className="flex flex-col py-4">
                <Link to="/" className="px-6 py-3 hover:bg-slate-700 hover:text-amber-400 transition-colors text-sm tracking-wide">COLLECTIONS</Link>
                <Link to="/jewellery" className="px-6 py-3 hover:bg-slate-700 hover:text-amber-400 transition-colors text-sm tracking-wide">JEWELLERY</Link>
                <Link to="/high-jewellery" className="px-6 py-3 hover:bg-slate-700 hover:text-amber-400 transition-colors text-sm tracking-wide">HIGH JEWELLERY</Link>
                <Link to="/about" className="px-6 py-3 hover:bg-slate-700 hover:text-amber-400 transition-colors text-sm tracking-wide">OUR STORY</Link>
                <Link to="/stores" className="px-6 py-3 hover:bg-slate-700 hover:text-amber-400 transition-colors text-sm tracking-wide">STORE LOCATOR</Link>
                <Link to="/contact" className="px-6 py-3 hover:bg-slate-700 hover:text-amber-400 transition-colors text-sm tracking-wide">CONTACT</Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

// Hero Section Component
export const HeroSection = () => {
  return (
    <section 
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(139,69,19,0.3), rgba(160,82,45,0.2)), url('https://images.unsplash.com/photo-1643300866907-032b3baeeb1f')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-900/20 to-stone-900/40"></div>
      
      {/* Decorative jewelry elements positioned like the original */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
        <div className="w-4 h-20 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full shadow-lg"></div>
        <div className="flex justify-center mt-2 space-x-1">
          <div className="w-3 h-3 bg-purple-500 rounded-full shadow-md"></div>
          <div className="w-3 h-3 bg-amber-500 rounded-full shadow-md"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full shadow-md"></div>
        </div>
      </div>

      {/* Cross jewelry formation */}
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center justify-center">
          <div className="w-20 h-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full shadow-lg"></div>
        </div>
        <div className="flex justify-center mt-1">
          <div className="w-4 h-20 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full shadow-lg"></div>
        </div>
      </div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-3xl font-serif tracking-[0.3em] mb-8 font-light">
          HERITAGE COLLECTION
        </h1>
        <p className="text-sm font-light tracking-wider mb-8 opacity-90">
          Discover the artistry of centuries in every piece
        </p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-xs font-light tracking-[0.2em] transition-all duration-300 border border-amber-500">
          DISCOVER MORE
        </button>
      </div>
    </section>
  );
};

// Collection Card Component
export const CollectionCard = ({ title, description, image, buttonText = "DISCOVER MORE", link = "#" }) => {
  return (
    <div className="group relative overflow-hidden bg-stone-100 h-96 md:h-[500px]">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
        <h3 className="text-2xl md:text-3xl font-serif font-light mb-4 tracking-wide">{title}</h3>
        <p className="text-sm md:text-base mb-6 font-light leading-relaxed opacity-90">{description}</p>
        <Link 
          to={link}
          className="self-start bg-amber-600 hover:bg-amber-700 px-8 py-3 text-xs font-light tracking-[0.2em] transition-all duration-300 border border-amber-500"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

// Main Collections Section
export const CollectionsSection = () => {
  const collections = [
    {
      title: "THE RAKHERA X ARTISAN COLLECTION",
      description: "Discover the Calligraphy Collection. Luxury meets heritage in this exclusive collaboration celebrating the art of traditional craftsmanship.",
      image: "https://images.pexels.com/photos/7078360/pexels-photo-7078360.jpeg",
      link: "/jewellery"
    },
    {
      title: "THE FLAGSHIP COLLECTION",
      description: "Visit our Flagship Store. Immerse yourself in the luxurious world of Rakhera Jewels where every piece tells a story.",
      image: "https://images.pexels.com/photos/7629856/pexels-photo-7629856.jpeg",
      link: "/stores"
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

// High Jewellery Section
export const HighJewellerySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-stone-100 to-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <img 
            src="https://images.unsplash.com/photo-1655693487677-683764e20c08"
            alt="Tales of Heritage - High Jewellery Collection"
            className="w-full max-w-4xl mx-auto h-96 object-cover shadow-2xl"
          />
        </div>
        
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-stone-800 tracking-wide">
            TALES OF HERITAGE - HIGH JEWELLERY COLLECTION
          </h2>
          
          <p className="text-base text-stone-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Our High Jewellery collection represents the pinnacle of luxury craftsmanship. 
            Each piece is meticulously handcrafted using the finest materials and techniques 
            passed down through generations of master artisans.
          </p>
          
          <Link 
            to="/high-jewellery"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-xs font-light tracking-[0.2em] transition-all duration-300 border border-amber-500"
          >
            EXPLORE HIGH JEWELLERY
          </Link>
        </div>
      </div>
    </section>
  );
};

// As Seen On Section
export const AsSeenOnSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif font-light mb-12 text-stone-800 tracking-[0.2em]">
          AS SEEN ON
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
          {/* Publication logos represented as elegant boxes */}
          <div className="h-16 bg-stone-100 border border-stone-200 flex items-center justify-center">
            <span className="font-serif text-stone-600 text-sm tracking-wider">VOGUE</span>
          </div>
          <div className="h-16 bg-stone-100 border border-stone-200 flex items-center justify-center">
            <span className="font-serif text-stone-600 text-sm tracking-wider">BAZAAR</span>
          </div>
          <div className="h-16 bg-stone-100 border border-stone-200 flex items-center justify-center">
            <span className="font-serif text-stone-600 text-sm tracking-wider">ELLE</span>
          </div>
          <div className="h-16 bg-stone-100 border border-stone-200 flex items-center justify-center">
            <span className="font-serif text-stone-600 text-sm tracking-wider">TATLER</span>
          </div>
          <div className="h-16 bg-stone-100 border border-stone-200 flex items-center justify-center">
            <span className="font-serif text-stone-600 text-sm tracking-wider">T&C</span>
          </div>
        </div>
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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-full flex items-center justify-center border-2 border-amber-300">
                <div className="w-6 h-6 bg-stone-900 rounded-full flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-sm font-serif">ر</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-serif tracking-[0.2em] text-amber-100">RAKHERA JEWELS</h3>
                <div className="text-xs tracking-[0.3em] text-amber-300 font-light">راخرا جواهرات</div>
              </div>
            </div>
            <p className="text-stone-400 leading-relaxed mb-6 font-light">
              Crafting dreams in gold and gemstones since generations. Each piece tells a story 
              of heritage, luxury, and timeless elegance rooted in traditional artisanship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-serif font-light mb-4 tracking-wide">COLLECTIONS</h4>
            <ul className="space-y-3 text-stone-400 font-light">
              <li><Link to="/jewellery" className="hover:text-amber-400 transition-colors text-sm">Heritage Collection</Link></li>
              <li><Link to="/high-jewellery" className="hover:text-amber-400 transition-colors text-sm">High Jewellery</Link></li>
              <li><Link to="/jewellery" className="hover:text-amber-400 transition-colors text-sm">Artisan Collaboration</Link></li>
              <li><Link to="/jewellery" className="hover:text-amber-400 transition-colors text-sm">Bridal Collection</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-serif font-light mb-4 tracking-wide">CUSTOMER CARE</h4>
            <ul className="space-y-3 text-stone-400 font-light">
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors text-sm">Contact Us</Link></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors text-sm">Size Guide</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors text-sm">Care Instructions</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors text-sm">Returns & Exchanges</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-xs font-light tracking-wide">
            © 2025 Rakhera Jewels. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-stone-400 hover:text-amber-400 text-xs font-light tracking-wide transition-colors">Privacy Policy</a>
            <a href="#" className="text-stone-400 hover:text-amber-400 text-xs font-light tracking-wide transition-colors">Terms of Service</a>
            <a href="#" className="text-stone-400 hover:text-amber-400 text-xs font-light tracking-wide transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Newsletter Component
export const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Rakhera Jewels newsletter!');
    setEmail('');
  };

  return (
    <section className="py-20 bg-stone-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-stone-800 tracking-wide">
          STAY CONNECTED
        </h2>
        <p className="text-base text-stone-600 mb-8 leading-relaxed font-light max-w-2xl mx-auto">
          Be the first to discover our latest collections, exclusive events, and 
          behind-the-scenes stories from the world of Rakhera Jewels.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex border border-stone-300">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-amber-500 font-light text-sm"
              required
            />
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 font-light text-xs tracking-[0.2em] transition-colors"
            >
              SUBSCRIBE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};