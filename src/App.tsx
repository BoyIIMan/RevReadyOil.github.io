import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Phone, Mail, Facebook, Instagram, Calendar, Droplet, Wrench, Car, MapPin, Clock, ChevronRight, Sun, Moon } from "lucide-react";

// ScrollToTop ensures the page scrolls back to the top when navigating between routes (e.g., from Home to About)
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// About Component: This renders the "About Us" page.
// You can edit the text, add photos, or change the layout of the About page here.
function About() {
  return (
    <div className="pt-40 pb-20 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-black italic uppercase mb-8 text-gray-900 dark:text-white">About Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              My name is Micaiah Wray, born and raised in San Antonio. Rev Ready Oil started with a simple idea—I wanted to turn my passion for cars into something that actually helps people in my community. I didn’t just want a job, I wanted something I could build, grow, and be proud of years from now.
            </p>
            <p>
              Right now, I work with everyday drivers, making basic maintenance easier and more reliable. I’m a 19-year-old college student studying automotive technology, and I’ve spent the last two years working at Discount Tire. I’ll also be starting as a Quick Lane technician at Ford soon, continuing to build my experience.
            </p>
            <p>
              What matters most to me is how I treat people and their vehicles. I don’t rush work, I don’t cut corners, and I treat every car like it’s my own. Whether it’s an oil change, filters, wiper blades, or fluid top-offs, I focus on doing it right the first time.
            </p>
            <p>
              At the end of the day, my goal is straightforward: give people a high-quality, honest service at a fair price. I’m not here to overcharge my neighbors, I’m here to build trust and do the job right.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Photo Placeholders */}
            <div className="bg-gray-200 dark:bg-white/5 rounded-2xl aspect-square flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700">
              <span className="text-gray-500 dark:text-gray-400 font-medium text-center px-4">Photo Space<br/>(e.g., Team Member)</span>
            </div>
            <div className="bg-gray-200 dark:bg-white/5 rounded-2xl aspect-square flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 mt-8">
              <span className="text-gray-500 dark:text-gray-400 font-medium text-center px-4">Photo Space<br/>(e.g., Service Van)</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-[#111] rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-white/5">
          <h2 className="text-2xl md:text-3xl font-black italic uppercase mb-6 text-gray-900 dark:text-white">Our San Antonio Roots</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                [Filler Text: We are proud to be a locally owned and operated business serving the greater San Antonio area exclusively. Our deep roots in the community mean we treat every customer like a neighbor.]
              </p>
              <p>
                [Filler Text: Add more details about your local presence, specific neighborhoods you frequently service, or community involvement here.]
              </p>
            </div>
            <div className="w-full md:w-1/3 aspect-video bg-gray-200 dark:bg-white/5 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700">
              <span className="text-gray-500 dark:text-gray-400 font-medium text-center px-4">Photo Space<br/>(e.g., San Antonio Landmark)</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Main Application Component: This sets up the routing and the overall layout (Header, Pages, Footer)
export default function App() {
  // State to track if dark mode is active. Defaults to false (light mode).
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to update the body background color when dark mode changes
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#0a0a0a' : '#ffffff';
  }, [isDarkMode]);

  return (
    <Router>
      <ScrollToTop />
      {/* The 'dark' class is applied here if isDarkMode is true, enabling Tailwind's dark mode styles */}
      <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white font-sans selection:bg-yellow-500 selection:text-black transition-colors duration-300">
        {/* Header / Navigation Bar */}
        {/* To change the header background or blur, edit the classes below */}
        <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 h-28 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Logo Link - Clicking this takes you to the home page */}
              <Link to="/" className="flex items-center">
                {/* Main Logo Image - Change the src URL to update your logo */}
                <img 
                  src="https://revreadyoilstorage.blob.core.windows.net/revreadyidentity/CompanyLogo.png" 
                  alt="RevReady Oil Logo" 
                  className="h-20 md:h-24 object-contain"
                  referrerPolicy="no-referrer"
                />
              </Link>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/" className="text-gray-900 dark:text-white font-bold hover:text-yellow-500 transition-colors">Home</Link>
                <Link to="/about" className="text-gray-900 dark:text-white font-bold hover:text-yellow-500 transition-colors">About Us</Link>
                <a href="/#services" className="text-gray-900 dark:text-white font-bold hover:text-yellow-500 transition-colors">Services</a>
              </nav>
              <a 
                href="https://forms.gle/1n25Sj3MSEt6bVcu6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-5 py-2 md:px-6 md:py-2.5 rounded-full font-black italic hover:scale-105 transition-transform shadow-[0_0_15px_rgba(250,204,21,0.4)] text-sm md:text-base"
              >
                BOOK NOW
              </a>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={
            <main>
        {/* Hero Section - The main banner at the top of the Home page */}
        {/* To change the background image, replace the URL in the bg-[url(...)] class below */}
        <section className="relative pt-36 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 dark:opacity-20 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 dark:from-[#0a0a0a] dark:via-[#0a0a0a]/80 to-transparent transition-colors duration-300"></div>
          
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight italic uppercase text-gray-900 dark:text-white">
                Mobile oil changes - <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-600">We come to you.</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed">
                Skip the waiting room. RevReady Oil provides premium, convenient mobile oil changes and fluid services directly at your home or office.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://forms.gle/1n25Sj3MSEt6bVcu6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-black italic text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(250,204,21,0.3)]"
                >
                  <Calendar className="w-5 h-5" />
                  SCHEDULE APPOINTMENT
                </a>
                <a 
                  href="tel:210-279-7284"
                  className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  CALL NOW
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section - Displays the grid of services offered */}
        <section id="services" className="py-20 bg-gray-50 dark:bg-[#111] transition-colors duration-300">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-black italic uppercase mb-4 text-gray-900 dark:text-white">Convenient Mobile Services</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 via-yellow-500 to-cyan-400 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* 
                This is an array of your services. 
                To add a new service, just copy one of the blocks inside the brackets {} 
                and paste it below, updating the icon, title, and desc.
              */}
              {[
                {
                  icon: <Droplet className="w-8 h-8 text-yellow-500" />,
                  title: "Oil Changes",
                  desc: "Synthetic & conventional oil changes done at your location."
                },
                {
                  icon: <Wrench className="w-8 h-8 text-yellow-500" />,
                  title: "Filter Replacements",
                  desc: "High-quality oil and air filter replacements to keep your engine running smoothly and efficiently."
                },
                {
                  icon: <Car className="w-8 h-8 text-yellow-500" />,
                  title: "Fluid Top-Off",
                  desc: "Comprehensive check and top-off of essential vehicle fluids including washer, brake, and transmission fluids."
                }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-yellow-500/50 dark:hover:border-yellow-500/30 transition-colors group relative overflow-hidden shadow-sm dark:shadow-none"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                  <div className="w-16 h-16 bg-gray-50 dark:bg-[#222] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10 shadow-sm dark:shadow-lg border border-gray-100 dark:border-white/5">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black italic uppercase mb-3 relative z-10 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 relative overflow-hidden bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-black italic uppercase mb-6 text-gray-900 dark:text-white">About RevReady Oil</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                  We know your time is valuable. That's why RevReady Oil was founded on a simple principle: car maintenance shouldn't disrupt your day. 
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                  Whether you're at the office, relaxing at home, or busy with family, our fully equipped mobile service vans come directly to you. We provide professional, clean, and efficient oil changes without the hassle of waiting rooms or upselling.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Save time - we come to your location",
                    "No messy driveways - we use clean extraction methods",
                    "Professional, experienced technicians",
                    "Easy online booking"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                      <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                        <ChevronRight className="w-4 h-4 text-yellow-600 dark:text-yellow-500" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 relative shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1635784063858-29cb1b53913e?q=80&w=1000&auto=format&fit=crop" 
                    alt="Mechanic working on car" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 dark:bg-black/60 backdrop-blur-md p-4 rounded-xl border border-gray-200 dark:border-white/10 flex items-center gap-4 shadow-lg">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(250,204,21,0.5)]">
                        <Clock className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-black italic uppercase text-gray-900 dark:text-white">Fast & Efficient</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Most services completed in under 45 minutes.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
            </main>
          } />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Contact & Footer Section */}
        {/* Edit this section to update your social links, phone number, email, or QR code */}
        <footer className="bg-gray-900 dark:bg-[#050505] pt-20 pb-10 border-t border-gray-800 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="lg:col-span-2">
                <div className="flex flex-col items-start mb-6">
                  <Link to="/">
                    <img 
                      src="https://revreadyoilstorage.blob.core.windows.net/revreadyidentity/CompanyLogo.png" 
                      alt="RevReady Oil Logo" 
                      className="h-24 md:h-32 object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </Link>
                </div>
                <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                  Premium mobile oil changes and fluid services. We bring the garage to your driveway.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-all shadow-lg text-white">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/revready.oil/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-all shadow-lg text-white">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-black italic uppercase mb-6 text-white">Contact Us</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="tel:210-279-7284" className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-transparent flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="font-medium">210-279-7284</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:micaiah.contact@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-transparent flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="font-medium">micaiah.contact@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/place/San+Antonio,+TX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-transparent flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className="font-medium">Serving San Antonio, TX exclusively</span>
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-black italic uppercase mb-6 text-white">Ready for service?</h4>
                <a 
                  href="https://forms.gle/1n25Sj3MSEt6bVcu6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-4 rounded-xl font-black italic hover:scale-105 transition-transform w-full mb-6 shadow-[0_0_20px_rgba(250,204,21,0.3)]"
                >
                  <Calendar className="w-5 h-5" />
                  BOOK APPOINTMENT
                </a>
                <div className="p-5 bg-white/5 rounded-2xl border border-white/10 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent"></div>
                  <p className="text-sm font-bold text-gray-400 mb-3 relative z-10 uppercase tracking-wider">Scan to book</p>
                  <div className="w-32 h-32 mx-auto bg-white p-2 rounded-xl relative z-10 shadow-md border-none">
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://forms.gle/1n25Sj3MSEt6bVcu6`} alt="QR Code" className="w-full h-full" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm font-medium">
              <div>&copy; {new Date().getFullYear()} RevReady Oil. All rights reserved.</div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-xs font-bold text-gray-300 mr-4"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="w-3 h-3 text-yellow-400" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3 h-3 text-gray-400" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      </div>
    </Router>
  );
}
