import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { navigation } from '../constants';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-xl">S</div>
            <span className="text-2xl font-black tracking-tighter uppercase">Speak<span className="text-primary underline decoration-4 underline-offset-4 decoration-secondary">Project</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`text-sm font-semibold uppercase tracking-widest transition-colors ${location.pathname === item.href ? 'text-primary' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 bg-white shadow-xl rounded-xl border border-gray-100 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-4 py-2 text-xs font-medium text-gray-600 hover:bg-slate-50 hover:text-primary transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="bg-secondary text-primary px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-secondary/20">
              Join Class
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-medium text-gray-900 py-2"
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-2 mt-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm text-gray-600 py-1"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">S</span>
                </div>
                <span className="text-xl font-black tracking-tighter uppercase">SPEAK<span className="text-secondary">PROJECT</span></span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Empowering voices since 2018. We believe everyone has a message worth sharing. Join our training and transform your communication.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Programs</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/services/public-speaking" className="hover:text-white transition-colors">Public Speaking Class</Link></li>
              <li><Link to="/services/mc" className="hover:text-white transition-colors">MC Masterclass</Link></li>
              <li><Link to="/services/corporate" className="hover:text-white transition-colors">Corporate Training</Link></li>
              <li><Link to="/services/digital" className="hover:text-white transition-colors">Digital Learning</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Information</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/schedule" className="hover:text-white transition-colors">Class Schedule</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Insights Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Jl. Prof. DR. Satrio No.Kav 18, Kuningan, Jakarta Selatan</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@speakproject.id</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 Speak Project Training Indonesia. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
