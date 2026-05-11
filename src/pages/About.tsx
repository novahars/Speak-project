import { motion } from 'motion/react';
import { Target, Users, Award, Monitor, Heart, Quote, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      {/* Narrative Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Our Story</span>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-none">
              Believing every voice has the power to <span className="text-primary italic font-serif">change everything.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2018 in Jakarta, Speak Project started with a simple observation: some of the most brilliant minds were silenced by the fear of speaking. We set out to change that.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              What began as a small weekend workshop has grown into Indonesia's premier communication academy, training thousands of individuals and over 200 corporations to communicate with clarity, heart, and impact.
            </p>
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100">
               <div>
                  <p className="text-4xl font-black text-primary mb-1">15K+</p>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest leading-none">Alumni Graduated</p>
               </div>
               <div>
                  <p className="text-4xl font-black text-primary mb-1">200+</p>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest leading-none">B2B Partners</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:w-1/2 relative"
          >
            <img 
              src="https://picsum.photos/seed/about-narrative/800/1000" 
              alt="Workshop Group" 
              className="rounded-[3rem] shadow-2xl relative z-10 w-full object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full -z-0" />
            <div className="absolute top-20 -right-10 w-40 h-40 bg-slate-100 rounded-full -z-0" />
          </motion.div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="bg-slate-50 py-24 mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">The Values We Breathe</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">We don't just teach techniques; we cultivate a mindset of authentic connection.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Authenticity', desc: 'We help you find YOUR voice, not a carbon copy of someone else\'s. True impact comes from being genuine.', icon: Heart },
              { title: 'Precision', desc: 'Communication is both art and science. We break down complex psychology into actionable steps.', icon: Target },
              { title: 'Community', desc: 'Growth happens best together. Our alumni network provides lifelong support and opportunities.', icon: Users }
            ].map((value, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership / Founders */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Visionaries</h2>
            <p className="text-gray-600">The minds steering Speak Project towards excellence.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
           <div className="group">
              <div className="relative overflow-hidden rounded-[2.5rem] mb-8">
                <img 
                  src="https://picsum.photos/seed/founder1/800/800" 
                  alt="Founder" 
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex space-x-4">
                       <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all"><Instagram className="w-5 h-5" /></a>
                       <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all"><Linkedin className="w-5 h-5" /></a>
                    </div>
                </div>
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-1">Founder Name One</h4>
              <p className="text-primary font-black uppercase tracking-widest text-[10px] mb-4">Chief Visionary Officer</p>
              <p className="text-slate-500 leading-relaxed italic font-serif">"Our mission is to ensure no great idea dies because it wasn't communicated effectively."</p>
           </div>
           
           <div className="group">
              <div className="relative overflow-hidden rounded-[2.5rem] mb-8">
                <img 
                  src="https://picsum.photos/seed/founder2/800/800" 
                  alt="Founder" 
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex space-x-4">
                       <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all"><Instagram className="w-5 h-5" /></a>
                       <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all"><Linkedin className="w-5 h-5" /></a>
                    </div>
                </div>
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-1">Founder Name Two</h4>
              <p className="text-primary font-black uppercase tracking-widest text-[10px] mb-4">Head of Content & Training</p>
              <p className="text-slate-500 leading-relaxed italic font-serif">"Speaking is a muscle. We provide the gymnasium for your voice."</p>
           </div>
        </div>
      </section>

      {/* Partners/Clients */}
      <section className="bg-white border-t border-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h3 className="text-center text-gray-400 text-sm font-bold uppercase tracking-[0.3em] mb-16">Trusted by Champions</h3>
           <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-50">
             <div className="text-3xl font-bold italic">SAMSUMG</div>
             <div className="text-3xl font-bold">PERTAMINA</div>
             <div className="text-3xl font-bold tracking-tighter">Gojek</div>
             <div className="text-3xl font-serif">Unilever</div>
             <div className="text-3xl font-mono">BCA</div>
           </div>
        </div>
      </section>
    </div>
  );
}
