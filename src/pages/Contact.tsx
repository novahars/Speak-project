import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Connect With Us</span>
            <h1 className="text-5xl font-black text-slate-900 mb-6 leading-none">Let's talk about <br/>your <span className="text-primary italic font-serif">voice.</span></h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Whether you're looking for personal training or corporate workshops, we're here to help.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Reach us anytime</h3>
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900 mb-1 leading-none">Email Support</h4>
                  <p className="text-slate-500 mb-2 text-sm font-medium mt-2">Our team typically responds within 24 hours.</p>
                  <a href="mailto:hello@speakproject.id" className="text-primary font-black text-xs uppercase tracking-widest hover:underline">hello@speakproject.id</a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900 mb-1 leading-none">WhatsApp Fast Response</h4>
                  <p className="text-slate-500 mb-2 text-sm font-medium mt-2">Available Mon-Fri, 9am - 6pm WIB.</p>
                  <a href="#" className="text-primary font-black text-xs uppercase tracking-widest hover:underline">+62 812-3456-7890</a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900 mb-1 leading-none">Our Office</h4>
                  <p className="text-slate-500 mb-2 text-sm font-medium mt-2">Come visit us for a coffee and chat.</p>
                  <p className="text-slate-700 font-bold">Jl. Prof. DR. Satrio No.Kav 18, Jakarta Selatan</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Follow our journey</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all shadow-sm"><Instagram className="w-6 h-6" /></a>
                <a href="#" className="w-12 h-12 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all shadow-sm"><Linkedin className="w-6 h-6" /></a>
                <a href="#" className="w-12 h-12 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all shadow-sm"><Twitter className="w-6 h-6" /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-secondary/20 p-10 md:p-12 border border-slate-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">Thank you for reaching out. We'll get back to you shortly.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-primary rounded-2xl px-6 py-4 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-primary rounded-2xl px-6 py-4 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Service Interest</label>
                  <select className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-primary rounded-2xl px-6 py-4 outline-none transition-all">
                    <option>Master Class Public Speaking</option>
                    <option>MC Masterclass</option>
                    <option>Corporate Training</option>
                    <option>Private One-on-One</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Message</label>
                  <textarea 
                    required
                    placeholder="Tell us about your goals..." 
                    rows={5}
                    className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-primary rounded-2xl px-6 py-4 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  disabled={formState === 'submitting'}
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-primary transition-all flex items-center justify-center group"
                >
                  {formState === 'submitting' ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
         <div className="h-96 w-full bg-gray-100 rounded-[3rem] overflow-hidden relative shadow-inner">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 italic text-gray-400">
               <div className="text-center">
                 <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
                 Interactive map would be here.
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
