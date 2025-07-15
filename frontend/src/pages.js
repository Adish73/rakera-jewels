import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer, NewsletterSection } from './components';

// Home Page
export const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(139,69,19,0.3), rgba(160,82,45,0.2)), url('https://images.unsplash.com/photo-1643300866907-032b3baeeb1f')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-oxford-blue/20 to-oxford-blue/40"></div>
        
        {/* Decorative jewelry elements */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
          <div className="w-4 h-20 bg-gradient-to-b from-gold to-light-gold rounded-full shadow-lg"></div>
          <div className="flex justify-center mt-2 space-x-1">
            <div className="w-3 h-3 bg-oxford-blue rounded-full shadow-md"></div>
            <div className="w-3 h-3 bg-gold rounded-full shadow-md"></div>
            <div className="w-3 h-3 bg-oxford-blue rounded-full shadow-md"></div>
          </div>
        </div>

        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center justify-center">
            <div className="w-20 h-4 bg-gradient-to-r from-gold to-light-gold rounded-full shadow-lg"></div>
          </div>
          <div className="flex justify-center mt-1">
            <div className="w-4 h-20 bg-gradient-to-b from-gold to-light-gold rounded-full shadow-lg"></div>
          </div>
        </div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl font-serif tracking-[0.3em] mb-8 font-light">
            HERITAGE COLLECTION
          </h1>
          <p className="text-sm font-light tracking-wider mb-8 opacity-90">
            Discover the artistry of centuries in every piece
          </p>
          <Link 
            to="/jewellery"
            className="inline-block bg-gold hover:bg-light-gold text-oxford-blue px-8 py-3 text-xs font-light tracking-[0.2em] transition-all duration-300 border border-gold"
          >
            DISCOVER MORE
          </Link>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Collection 1 */}
            <div className="group relative overflow-hidden bg-stone-100 h-96 md:h-[500px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('https://images.pexels.com/photos/7078360/pexels-photo-7078360.jpeg')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-serif font-light mb-4 tracking-wide">THE RAKERA X ARTISAN COLLECTION</h3>
                <p className="text-sm md:text-base mb-6 font-light leading-relaxed opacity-90">
                  Discover the Heritage Collection. Luxury meets heritage in this exclusive collaboration celebrating the art of traditional craftsmanship.
                </p>
                <Link 
                  to="/jewellery"
                  className="self-start bg-gold hover:bg-light-gold text-oxford-blue px-8 py-3 text-xs font-light tracking-[0.2em] transition-all duration-300 border border-gold"
                >
                  DISCOVER MORE
                </Link>
              </div>
            </div>

            {/* Collection 2 */}
            <div className="group relative overflow-hidden bg-stone-100 h-96 md:h-[500px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('https://images.pexels.com/photos/7629856/pexels-photo-7629856.jpeg')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-serif font-light mb-4 tracking-wide">THE FLAGSHIP COLLECTION</h3>
                <p className="text-sm md:text-base mb-6 font-light leading-relaxed opacity-90">
                  Visit our Flagship Store. Immerse yourself in the luxurious world of Rakera Jewels where every piece tells a story.
                </p>
                <Link 
                  to="/stores"
                  className="self-start bg-gold hover:bg-light-gold text-oxford-blue px-8 py-3 text-xs font-light tracking-[0.2em] transition-all duration-300 border border-gold"
                >
                  VISIT OUR BOUTIQUE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High Jewellery Showcase */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <img 
              src="https://images.unsplash.com/photo-1655693487677-683764e20c08"
              alt="Tales of Heritage - High Jewellery Collection"
              className="w-full max-w-4xl mx-auto h-96 object-cover shadow-2xl"
            />
          </div>
          
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-oxford-blue tracking-wide">
              TALES OF HERITAGE - HIGH JEWELLERY COLLECTION
            </h2>
            
            <p className="text-base text-navy-blue mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Our High Jewellery collection represents the pinnacle of luxury craftsmanship. 
              Each piece is meticulously handcrafted using the finest materials and techniques 
              passed down through generations of master artisans.
            </p>
            
            <Link 
              to="/high-jewellery"
              className="inline-block bg-gold hover:bg-light-gold text-oxford-blue px-8 py-3 text-xs font-light tracking-[0.2em] transition-all duration-300 border border-gold"
            >
              EXPLORE HIGH JEWELLERY
            </Link>
          </div>
        </div>
      </section>

      {/* As Seen On */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif font-light mb-12 text-oxford-blue tracking-[0.2em]">
            AS SEEN ON
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
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

      <NewsletterSection />
      <Footer />
    </div>
  );
};

// Jewellery Collections Page
export const JewelleryPage = () => {
  const collections = [
    {
      title: "Heritage Collection",
      description: "Timeless pieces inspired by ancient artistry and traditional craftsmanship.",
      image: "https://images.unsplash.com/photo-1543295204-2ae345412549",
      pieces: ["Heritage Rings", "Heritage Necklaces", "Traditional Bracelets", "Artisan Earrings"]
    },
    {
      title: "Contemporary Collection", 
      description: "Modern designs that blend innovation with classical elegance.",
      image: "https://images.unsplash.com/photo-1720686615374-ea04dac6a66e",
      pieces: ["Modern Rings", "Statement Necklaces", "Minimalist Bracelets", "Contemporary Earrings"]
    },
    {
      title: "Artisan Collaboration",
      description: "Exclusive pieces created in partnership with master craftsmen.",
      image: "https://images.unsplash.com/photo-1562088746-125fc60079ae",
      pieces: ["Collaborative Rings", "Artisan Necklaces", "Handcrafted Bracelets", "Designer Earrings"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Hero */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-8 text-stone-800 tracking-wide">
            JEWELLERY COLLECTIONS
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
            Discover our exquisite collections where each piece tells a story of heritage, 
            craftsmanship, and timeless beauty.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden mb-6">
                  <img 
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-serif font-light mb-4 text-stone-800 tracking-wide">{collection.title}</h3>
                <p className="text-stone-600 mb-6 leading-relaxed font-light">{collection.description}</p>
                <ul className="space-y-2 mb-6">
                  {collection.pieces.map((piece, pieceIndex) => (
                    <li key={pieceIndex} className="text-sm text-stone-500 font-light">• {piece}</li>
                  ))}
                </ul>
                <button className="bg-gold hover:bg-light-gold text-oxford-blue px-6 py-2 text-xs font-light tracking-[0.2em] transition-all duration-300 border border-gold">
                  VIEW COLLECTION
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
};

// High Jewellery Page
export const HighJewelleryPage = () => {
  const highJewelleryPieces = [
    {
      title: "Royal Heritage Necklace",
      description: "A masterpiece featuring rare sapphires and diamonds in traditional settings.",
      image: "https://images.unsplash.com/photo-1655693487677-683764e20c08",
      price: "Upon Request"
    },
    {
      title: "Empress Collection",
      description: "Inspired by royal jewelry, crafted with the finest emeralds and gold.",
      image: "https://images.unsplash.com/photo-1643300866907-032b3baeeb1f",
      price: "Upon Request"
    },
    {
      title: "Dynasty Bracelet Set",
      description: "An exclusive set representing centuries of jewelry-making excellence.",
      image: "https://images.unsplash.com/photo-1562088746-125fc60079ae",
      price: "Upon Request"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1655693487677-683764e20c08')`
        }}
      >
        <div className="text-center text-white z-10">
          <h1 className="text-4xl md:text-7xl font-serif font-light mb-8 tracking-wide">
            HIGH JEWELLERY
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light max-w-2xl mx-auto">
            The pinnacle of luxury craftsmanship. Each piece is a work of art, 
            meticulously created using the world's finest materials.
          </p>
          <button className="bg-gold hover:bg-light-gold text-oxford-blue px-8 py-3 text-xs font-light tracking-[0.2em] transition-all duration-300 border border-gold">
            EXPLORE COLLECTION
          </button>
        </div>
      </section>

      {/* High Jewellery Pieces */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-stone-800 tracking-wide">
              TALES OF HERITAGE COLLECTION
            </h2>
            <p className="text-base text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
              Our High Jewellery collection represents the ultimate expression of our craft. 
              Each piece is individually designed and created by our master artisans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {highJewelleryPieces.map((piece, index) => (
              <div key={index} className="group text-center">
                <div className="relative overflow-hidden mb-6">
                  <img 
                    src={piece.image}
                    alt={piece.title}
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-serif font-light mb-4 text-stone-800 tracking-wide">{piece.title}</h3>
                <p className="text-stone-600 mb-4 leading-relaxed font-light">{piece.description}</p>
                <p className="text-amber-600 font-light text-sm tracking-wide mb-6">{piece.price}</p>
                <button className="bg-stone-800 hover:bg-stone-900 text-white px-6 py-2 text-xs font-light tracking-[0.2em] transition-all duration-300">
                  INQUIRE NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
};

// About Page
export const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-8 text-stone-800 tracking-wide">
            OUR STORY
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
            A legacy of craftsmanship, heritage, and timeless beauty spanning generations.
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif font-light mb-6 text-stone-800 tracking-wide">
                Heritage & Tradition
              </h2>
              <p className="text-stone-600 leading-relaxed font-light mb-4">
                Rakera Jewels was founded on the principle that jewelry should be more than mere adornment—
                it should be a celebration of heritage, a work of art, and a treasure to be passed down through generations.
              </p>
              <p className="text-stone-600 leading-relaxed font-light">
                Our artisans combine centuries-old techniques with contemporary design sensibilities, 
                creating pieces that honor tradition while embracing innovation.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/7078360/pexels-photo-7078360.jpeg"
                alt="Heritage Craftsmanship"
                className="w-full h-80 object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.pexels.com/photos/7629856/pexels-photo-7629856.jpeg"
                alt="Master Artisans"
                className="w-full h-80 object-cover shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-serif font-light mb-6 text-stone-800 tracking-wide">
                Master Artisans
              </h2>
              <p className="text-stone-600 leading-relaxed font-light mb-4">
                Every piece in our collection is handcrafted by master artisans who have dedicated their lives 
                to perfecting their craft. Their expertise, passed down through generations, ensures that 
                each creation meets the highest standards of excellence.
              </p>
              <p className="text-stone-600 leading-relaxed font-light">
                From the initial design concept to the final polish, every step in our process is guided 
                by an unwavering commitment to quality and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-stone-800 tracking-wide">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-light-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold text-2xl">✦</span>
              </div>
              <h3 className="text-xl font-serif font-light mb-4 text-stone-800">Excellence</h3>
              <p className="text-stone-600 font-light leading-relaxed">
                We pursue perfection in every detail, ensuring each piece meets the highest standards of quality and craftsmanship.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-light-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold text-2xl">♦</span>
              </div>
              <h3 className="text-xl font-serif font-light mb-4 text-stone-800">Heritage</h3>
              <p className="text-stone-600 font-light leading-relaxed">
                We honor traditional techniques while embracing innovation, creating timeless pieces with contemporary appeal.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-light-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold text-2xl">◈</span>
              </div>
              <h3 className="text-xl font-serif font-light mb-4 text-stone-800">Authenticity</h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Every piece tells a genuine story, reflecting our commitment to authentic materials and ethical practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
};

// Store Locator Page
export const StoresPage = () => {
  const stores = [
    {
      city: "Dubai",
      address: "Gold Souk, Deira, Dubai, UAE",
      phone: "+971 4 123 4567",
      hours: "10:00 AM - 10:00 PM",
      image: "https://images.pexels.com/photos/7629856/pexels-photo-7629856.jpeg"
    },
    {
      city: "London",
      address: "Bond Street, Mayfair, London, UK",
      phone: "+44 20 7123 4567",
      hours: "10:00 AM - 7:00 PM",
      image: "https://images.pexels.com/photos/7078360/pexels-photo-7078360.jpeg"
    },
    {
      city: "New York",
      address: "Fifth Avenue, Manhattan, NY, USA",
      phone: "+1 212 123 4567",
      hours: "10:00 AM - 8:00 PM",
      image: "https://images.unsplash.com/photo-1562088746-125fc60079ae"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-8 text-stone-800 tracking-wide">
            STORE LOCATOR
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
            Visit our flagship boutiques around the world to experience the full beauty 
            of our collections in person.
          </p>
        </div>
      </section>

      {/* Stores Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stores.map((store, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden mb-6">
                  <img 
                    src={store.image}
                    alt={`${store.city} Store`}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-serif font-light mb-4 text-stone-800 tracking-wide">{store.city}</h3>
                <div className="space-y-2 text-stone-600 font-light">
                  <p>{store.address}</p>
                  <p>{store.phone}</p>
                  <p className="text-amber-600">{store.hours}</p>
                </div>
                <button className="mt-6 bg-gold hover:bg-light-gold text-oxford-blue px-6 py-2 text-xs font-light tracking-[0.2em] transition-all duration-300 border border-gold">
                  GET DIRECTIONS
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
};

// Contact Page
export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-8 text-stone-800 tracking-wide">
            CONTACT US
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
            We would love to hear from you. Get in touch with our team for inquiries, 
            appointments, or to learn more about our collections.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-light mb-8 text-stone-800 tracking-wide">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-stone-300 focus:outline-none focus:ring-1 focus:ring-amber-500 font-light"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-stone-300 focus:outline-none focus:ring-1 focus:ring-amber-500 font-light"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-stone-300 focus:outline-none focus:ring-1 focus:ring-amber-500 font-light"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="6"
                    className="w-full px-4 py-3 border border-stone-300 focus:outline-none focus:ring-1 focus:ring-amber-500 font-light resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-gold hover:bg-light-gold text-oxford-blue px-8 py-3 text-xs font-light tracking-[0.2em] transition-all duration-300 border border-gold"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-light mb-8 text-stone-800 tracking-wide">
                Get in touch
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-serif font-light mb-2 text-stone-800">Headquarters</h3>
                  <p className="text-stone-600 font-light">
                    123 Luxury Lane<br/>
                    Jewelry District<br/>
                    Dubai, UAE 12345
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-light mb-2 text-stone-800">Phone</h3>
                  <p className="text-stone-600 font-light">+971 4 123 4567</p>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-light mb-2 text-stone-800">Email</h3>
                  <p className="text-stone-600 font-light">info@rakerajewels.com</p>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-light mb-2 text-stone-800">Business Hours</h3>
                  <p className="text-stone-600 font-light">
                    Monday - Saturday: 10:00 AM - 8:00 PM<br/>
                    Sunday: 12:00 PM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <img 
                  src="https://images.pexels.com/photos/7078360/pexels-photo-7078360.jpeg"
                  alt="Contact Us"
                  className="w-full h-64 object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
};