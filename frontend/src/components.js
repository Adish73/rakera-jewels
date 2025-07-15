import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Header Component
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMaleOpen, setIsMaleOpen] = useState(false);
  const [isFemaleOpen, setIsFemaleOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const closeAllMenus = () => {
    setIsCategoryOpen(false);
    setIsMaleOpen(false);
    setIsFemaleOpen(false);
  };

  return (
    <>
      {/* Welcome Bar */}
      <div className="bg-blue-50 text-oxford-blue py-2 px-6 text-center text-xs tracking-wide">
        WELCOME TO THE RAKERA JEWELS WEBSITE
      </div>
      
      <header className="bg-oxford-blue text-white py-4 px-6 relative z-50">
        <div className="max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-3">
              {/* Circular Logo */}
              <div className="w-12 h-12 bg-gradient-to-br from-gold via-light-gold to-gold rounded-full flex items-center justify-center border-2 border-light-gold shadow-lg">
                <div className="w-8 h-8 bg-oxford-blue rounded-full flex items-center justify-center">
                  <span className="text-gold font-bold text-lg font-serif">R</span>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-serif tracking-[0.2em] text-blue-50">RAKERA JEWELS</h1>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-center relative">
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`hover:text-light-gold transition-colors text-sm font-light tracking-wide ${isActive('/') ? 'text-light-gold' : ''}`}
                onClick={closeAllMenus}
              >
                HOME
              </Link>
              <Link 
                to="/collection" 
                className={`hover:text-light-gold transition-colors text-sm font-light tracking-wide ${isActive('/collection') ? 'text-light-gold' : ''}`}
                onClick={closeAllMenus}
              >
                OUR COLLECTION
              </Link>
              <Link 
                to="/story" 
                className={`hover:text-light-gold transition-colors text-sm font-light tracking-wide ${isActive('/story') ? 'text-light-gold' : ''}`}
                onClick={closeAllMenus}
              >
                OUR STORY
              </Link>
              
              {/* Category Dropdown */}
              <div className="relative">
                <button 
                  className="hover:text-light-gold transition-colors text-sm font-light tracking-wide flex items-center space-x-1"
                  onClick={() => {
                    setIsCategoryOpen(!isCategoryOpen);
                    setIsMaleOpen(false);
                    setIsFemaleOpen(false);
                  }}
                >
                  <span>CATEGORY</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isCategoryOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-oxford-blue border border-navy-blue shadow-xl z-50">
                    {/* Male Accessories */}
                    <div className="relative">
                      <button 
                        className="w-full text-left px-4 py-3 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm font-light tracking-wide flex items-center justify-between"
                        onClick={() => {
                          setIsMaleOpen(!isMaleOpen);
                          setIsFemaleOpen(false);
                        }}
                      >
                        <span>MALE ACCESSORIES</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      
                      {isMaleOpen && (
                        <div className="absolute left-full top-0 w-40 bg-oxford-blue border border-navy-blue shadow-xl">
                          <Link to="/male/rings" className="block px-4 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm font-light" onClick={closeAllMenus}>Rings</Link>
                          <Link to="/male/bracelets" className="block px-4 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm font-light" onClick={closeAllMenus}>Bracelets</Link>
                          <Link to="/male/necklaces" className="block px-4 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm font-light" onClick={closeAllMenus}>Necklaces</Link>
                          <Link to="/male/broaches" className="block px-4 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm font-light" onClick={closeAllMenus}>Broaches</Link>
                          <Link to="/male/tie-pins" className="block px-4 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm font-light" onClick={closeAllMenus}>Tie Pins</Link>
                          <Link to="/male/cuff-links" className="block px-4 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm font-light" onClick={closeAllMenus}>Cuff Links</Link>
                        </div>
                      )}
                    </div>

                    {/* Female Accessories */}
                    <div className="relative">
                      <button 
                        className="w-full text-left px-4 py-3 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm font-light tracking-wide flex items-center justify-between"
                        onClick={() => {
                          setIsFemaleOpen(!isFemaleOpen);
                          setIsMaleOpen(false);
                        }}
                      >
                        <span>FEMALE ACCESSORIES</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      
                      {iFemaleOpen && (
                        <div className="absolute left-full top-0 w-40 bg-oxford-blue border border-navy-blue shadow-xl">
                          <Link to="/female/rings" className="block px-4 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm font-light" onClick={closeAllMenus}>Rings</Link>
                          <Link to="/female/bracelets" className="block px-4 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm font-light" onClick={closeAllMenus}>Bracelets</Link>
                          <Link to="/female/necklaces" className="block px-4 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm font-light" onClick={closeAllMenus}>Necklaces</Link>
                          <Link to="/female/pendants" className="block px-4 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm font-light" onClick={closeAllMenus}>Pendants</Link>
                          <Link to="/female/earrings" className="block px-4 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm font-light" onClick={closeAllMenus}>Earrings</Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="absolute right-0 flex items-center space-x-4">
              <button className="hover:text-light-gold transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="hover:text-light-gold transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button className="hover:text-light-gold transition-colors">
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
            <div className="md:hidden absolute top-full left-0 right-0 bg-oxford-blue border-t border-navy-blue z-40">
              <nav className="flex flex-col py-4">
                <Link to="/" className="px-6 py-3 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm tracking-wide">HOME</Link>
                <Link to="/collection" className="px-6 py-3 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm tracking-wide">OUR COLLECTION</Link>
                <Link to="/story" className="px-6 py-3 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm tracking-wide">OUR STORY</Link>
                <div className="px-6 py-3 text-sm tracking-wide text-light-gold font-semibold">CATEGORY</div>
                <div className="ml-4">
                  <div className="px-6 py-2 text-sm tracking-wide text-blue-200 font-medium">Male Accessories</div>
                  <Link to="/male/rings" className="px-8 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm">Rings</Link>
                  <Link to="/male/bracelets" className="px-8 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm">Bracelets</Link>
                  <Link to="/male/necklaces" className="px-8 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm">Necklaces</Link>
                  <Link to="/male/broaches" className="px-8 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm">Broaches</Link>
                  <Link to="/male/tie-pins" className="px-8 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm">Tie Pins</Link>
                  <Link to="/male/cuff-links" className="px-8 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm">Cuff Links</Link>
                </div>
                <div className="ml-4">
                  <div className="px-6 py-2 text-sm tracking-wide text-blue-200 font-medium">Female Accessories</div>
                  <Link to="/female/rings" className="px-8 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm">Rings</Link>
                  <Link to="/female/bracelets" className="px-8 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm">Bracelets</Link>
                  <Link to="/female/necklaces" className="px-8 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm">Necklaces</Link>
                  <Link to="/female/pendants" className="px-8 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm">Pendants</Link>
                  <Link to="/female/earrings" className="px-8 py-2 hover:bg-navy-blue hover:text-light-gold transition-colors text-sm">Earrings</Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

// Collection Card Component
export const CollectionCard = ({ title, description, image, buttonText = "DISCOVER MORE", link = "#" }) => {
  return (
    <div className="group relative overflow-hidden bg-blue-50 h-96 md:h-[500px]">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-oxford-blue/70 via-oxford-blue/20 to-transparent"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
        <h3 className="text-2xl md:text-3xl font-serif font-light mb-4 tracking-wide">{title}</h3>
        <p className="text-sm md:text-base mb-6 font-light leading-relaxed opacity-90">{description}</p>
        <Link 
          to={link}
          className="self-start bg-gold hover:bg-light-gold px-8 py-3 text-xs font-light tracking-[0.2em] transition-all duration-300 border border-light-gold text-oxford-blue"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-oxford-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-gold via-light-gold to-gold rounded-full flex items-center justify-center border-2 border-light-gold">
                <div className="w-6 h-6 bg-oxford-blue rounded-full flex items-center justify-center">
                  <span className="text-gold font-bold text-sm font-serif">R</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-serif tracking-[0.2em] text-blue-50">RAKERA JEWELS</h3>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed mb-6 font-light">
              Crafting dreams in gold and gemstones since generations. Each piece tells a story 
              of heritage, luxury, and timeless elegance rooted in traditional artisanship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-light-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-200 hover:text-light-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-200 hover:text-light-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Male Accessories */}
          <div>
            <h4 className="text-lg font-serif font-light mb-4 tracking-wide">MALE ACCESSORIES</h4>
            <ul className="space-y-3 text-blue-200 font-light">
              <li><Link to="/male/rings" className="hover:text-light-gold transition-colors text-sm">Rings</Link></li>
              <li><Link to="/male/bracelets" className="hover:text-light-gold transition-colors text-sm">Bracelets</Link></li>
              <li><Link to="/male/necklaces" className="hover:text-light-gold transition-colors text-sm">Necklaces</Link></li>
              <li><Link to="/male/broaches" className="hover:text-light-gold transition-colors text-sm">Broaches</Link></li>
              <li><Link to="/male/tie-pins" className="hover:text-light-gold transition-colors text-sm">Tie Pins</Link></li>
              <li><Link to="/male/cuff-links" className="hover:text-light-gold transition-colors text-sm">Cuff Links</Link></li>
            </ul>
          </div>

          {/* Female Accessories */}
          <div>
            <h4 className="text-lg font-serif font-light mb-4 tracking-wide">FEMALE ACCESSORIES</h4>
            <ul className="space-y-3 text-blue-200 font-light">
              <li><Link to="/female/rings" className="hover:text-light-gold transition-colors text-sm">Rings</Link></li>
              <li><Link to="/female/bracelets" className="hover:text-light-gold transition-colors text-sm">Bracelets</Link></li>
              <li><Link to="/female/necklaces" className="hover:text-light-gold transition-colors text-sm">Necklaces</Link></li>
              <li><Link to="/female/pendants" className="hover:text-light-gold transition-colors text-sm">Pendants</Link></li>
              <li><Link to="/female/earrings" className="hover:text-light-gold transition-colors text-sm">Earrings</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-navy-blue pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-xs font-light tracking-wide">
            © 2025 Rakera Jewels. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-200 hover:text-light-gold text-xs font-light tracking-wide transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-200 hover:text-light-gold text-xs font-light tracking-wide transition-colors">Terms of Service</a>
            <a href="#" className="text-blue-200 hover:text-light-gold text-xs font-light tracking-wide transition-colors">Shipping Info</a>
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
    alert('Thank you for subscribing to Rakera Jewels newsletter!');
    setEmail('');
  };

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-oxford-blue tracking-wide">
          STAY CONNECTED
        </h2>
        <p className="text-base text-navy-blue mb-8 leading-relaxed font-light max-w-2xl mx-auto">
          Be the first to discover our latest collections, exclusive events, and 
          behind-the-scenes stories from the world of Rakera Jewels.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex border border-navy-blue">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold font-light text-sm"
              required
            />
            <button
              type="submit"
              className="bg-gold hover:bg-light-gold text-oxford-blue px-6 py-3 font-light text-xs tracking-[0.2em] transition-colors"
            >
              SUBSCRIBE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};