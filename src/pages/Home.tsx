import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, PlayCircle, Users, Target, Award, Quote, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, schedule, blogPosts } from '../constants';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Video Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/40 z-10" />
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-business-people-having-a-meeting-around-a-table-32565-large.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-secondary text-primary font-black uppercase tracking-[0.3em] text-[10px] px-4 py-1.5 rounded-full mb-8">
              Indonesia's #1 Public Speaking Academy
            </span>
            <h1 className="text-6xl md:text-8xl font-black leading-none mb-8 tracking-tighter">
              SPEAK WITH <br/><span className="text-secondary italic font-serif underline decoration-secondary/30">CONFIDENCE.</span>
            </h1>
            <p className="text-xl text-white/90 max-w-xl mb-12 font-medium leading-relaxed">
              Empowering 15,000+ voices since 2018. Transform your communication skills with our industry-leading workshops.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/schedule" className="bg-secondary text-primary px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform flex items-center gap-3 shadow-xl shadow-secondary/20">
                View Schedule <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="flex items-center gap-4 group">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                  <PlayCircle className="w-8 h-8" />
                </div>
                <span className="font-black uppercase tracking-[0.2em] text-[10px]">Watch Showreel</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-12 bg-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-4 bg-secondary rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-12">Trusted by 200+ Corporations</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="h-8 w-32 bg-slate-400 rounded-md" />
             <div className="h-8 w-32 bg-slate-400 rounded-md" />
             <div className="h-8 w-32 bg-slate-400 rounded-md" />
             <div className="h-8 w-32 bg-slate-400 rounded-md" />
             <div className="h-8 w-32 bg-slate-400 rounded-md" />
             <div className="h-8 w-32 bg-slate-400 rounded-md" />
          </div>
        </div>
      </section>

      {/* Program Preview Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Professional Curriculums</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-slate-900">
                Programs designed for <span className="text-primary italic font-serif">every voice.</span>
              </h2>
            </div>
            <Link to="/services" className="text-primary font-black uppercase tracking-widest text-xs border-b-2 border-primary/20 pb-2 hover:border-primary transition-all">
              View all programs
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {services.slice(0, 3).map((service, i) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-slate-50 border border-slate-100 rounded-[3rem] p-10 hover:bg-primary transition-all duration-500 hover:scale-[1.02]"
                >
                   <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-primary" />
                   </div>
                   <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                   <p className="text-slate-500 text-sm mb-8 leading-relaxed group-hover:text-white/70 transition-colors">{service.description}</p>
                   <Link to={`/services/${service.id}`} className="inline-flex items-center gap-2 text-primary group-hover:text-secondary font-black uppercase tracking-widest text-[10px] transition-colors">
                      Learn More <ChevronRight className="w-4 h-4" />
                   </Link>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* User Feedback with Videos */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-20">
          <span className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Alumni Success Stories</span>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-8">
            Visible <span className="text-secondary italic font-serif">Transformation.</span>
          </h2>
        </div>

        <div className="flex gap-8 px-4 sm:px-6 lg:px-8 overflow-x-auto pb-12 snap-x no-scrollbar">
          {[1, 2, 3, 4].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[350px] md:w-[450px] snap-center"
            >
              <div className="bg-white/5 backdrop-blur-md rounded-[3rem] p-8 border border-white/10 group hover:border-secondary/30 transition-all">
                {/* Video Thumbnail */}
                <div className="aspect-video bg-slate-800 rounded-[2rem] mb-8 relative overflow-hidden flex items-center justify-center group-hover:scale-[0.98] transition-transform">
                   <img 
                    src={`https://picsum.photos/seed/testimonial-${i}/800/450`} 
                    alt="Testimonial" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    referrerPolicy="no-referrer"
                   />
                   <div className="relative z-10 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-primary shadow-2xl shadow-secondary/50 group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-8 h-8 fill-current" />
                   </div>
                </div>
                
                <Quote className="w-8 h-8 text-secondary/20 mb-6" />
                <p className="text-lg font-medium text-white/90 mb-10 leading-relaxed italic">
                  "Speak Project didn't just teach me how to talk on stage; they taught me how to structure my thoughts and command attention in boardroom meetings."
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-full" />
                  <div>
                    <h5 className="font-bold text-white">Alumni Name {i}</h5>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Marketing Director @ TechCorp</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[4rem] p-16 md:p-28 text-center text-white relative overflow-hidden group shadow-2xl shadow-primary/20">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-8xl font-black mb-10 leading-none tracking-tighter">
                READY TO <br/><span className="text-secondary italic font-serif">AMPLIFY</span> YOUR VOICE?
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-14 font-medium max-w-xl mx-auto leading-relaxed">
                Join 15,000+ graduates who have transformed their lives through the power of communication.
              </p>
              <Link to="/contact" className="bg-secondary text-primary px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform inline-block shadow-2xl shadow-secondary/30">
                GET STARTED NOW
              </Link>
            </div>
            {/* Patterns */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
