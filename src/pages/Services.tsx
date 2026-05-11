import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../constants';
import { CheckCircle2, ArrowRight, User, Users, Calendar, Briefcase, Monitor, Award, Heart } from 'lucide-react';

export default function Services() {
  const { id } = useParams();
  
  // If no ID, show the main services grid
  if (!id) {
    return (
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
           >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Programs</span>
            <h1 className="text-5xl font-black text-slate-900 mb-6 leading-none">Empowerment Through <span className="text-primary italic font-serif">Training.</span></h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We offer a range of classes designed for every stage of your communication journey.</p>
           </motion.div>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {services.map((service, i) => (
                <Link 
                  key={service.id} 
                  to={`/services/${service.id}`}
                  className="group bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                     <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                        <service.icon className="w-6 h-6 text-primary group-hover:text-white" />
                     </div>
                     <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                     <p className="text-slate-500 mb-8 leading-relaxed line-clamp-2">{service.description}</p>
                     <div className="flex items-center text-primary font-black uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                        Explore Program <ArrowRight className="ml-2 w-4 h-4" />
                     </div>
                  </div>
                </Link>
             ))}
           </div>
        </section>

        {/* Corporate Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-white">
           <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-2/3">
                 <h2 className="text-3xl md:text-4xl font-black mb-6 italic font-serif">Looking for Corporate Training?</h2>
                 <p className="text-slate-400 text-lg mb-8">We deliver custom-built communication workshops for organizations looking to boost productivity and leadership presence.</p>
                 <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform inline-block">
                    Get Bulk Proposals
                 </Link>
              </div>
              <div className="md:w-1/3 flex justify-center">
                 <div className="w-48 h-48 bg-white/5 rounded-full border border-white/10 flex items-center justify-center">
                    <Briefcase className="w-20 h-20 text-primary opacity-50" />
                 </div>
              </div>
           </div>
        </section>
      </div>
    );
  }

  // Individual Service Page Look Up
  const service = services.find(s => s.id === id);
  if (!service) return <div className="pt-40 text-center">Service not found</div>;

  return (
    <div className="pt-20">
      {/* Service Hero */}
      <section className="relative py-32 overflow-hidden bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <Link to="/services" className="text-primary font-black uppercase tracking-widest text-xs mb-6 inline-flex items-center hover:translate-x-[-4px] transition-transform">
                    <ArrowRight className="rotate-180 mr-2 w-4 h-4" /> Back to Services
                  </Link>
                  <h1 className="text-5xl font-black text-slate-900 mb-6 leading-tight">{service.title}</h1>
                  <p className="text-xl text-slate-500 mb-8 italic font-serif leading-relaxed">{service.details}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-primary text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:shadow-xl transition-all">Enroll via WhatsApp</button>
                    <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-slate-50 transition-all">Download Syllabus</button>
                  </div>
                </motion.div>
            </div>
            <div className="md:w-1/2">
               <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
               >
                 <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-[2.5rem] shadow-2xl w-full aspect-video object-cover relative z-10"
                    referrerPolicy="no-referrer"
                  />
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl opacity-50" />
               </motion.div>
            </div>
         </div>
         {/* Background Patterns */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100 -z-0 rounded-l-[10rem] translate-x-20" />
      </section>

      {/* Curriculum / Features */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
               <h2 className="text-3xl font-bold mb-10 text-gray-900">What you'll master</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Structure compelling narratives',
                    'Overcome stage anxiety for good',
                    'Effective body language & gesturing',
                    'Vocal variety & tonal control',
                    'Engagement techniques for any size audience',
                    'Personal branding as a speaker'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-3 p-5 bg-white border border-slate-100 rounded-2xl">
                       <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                       <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
               </div>
               
               <div className="mt-16 bg-slate-50 rounded-[3rem] p-10 border border-slate-100">
                  <h3 className="text-2xl font-black mb-6">Training Format</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                     <div className="text-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                           <Calendar className="w-6 h-6 text-primary" />
                        </div>
                        <p className="font-black">2 Days</p>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Intensive Workshop</p>
                     </div>
                     <div className="text-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                           <Users className="w-6 h-6 text-primary" />
                        </div>
                        <p className="font-black">Max 15 Pax</p>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Limited Seats</p>
                     </div>
                     <div className="text-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                           <Monitor className="w-6 h-6 text-primary" />
                        </div>
                        <p className="font-black">Hybrid</p>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Online/Offline</p>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="lg:col-span-1">
               <div className="bg-slate-900 rounded-[2.5rem] p-10 sticky top-32 text-white">
                  <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Investment</h3>
                  <div className="mb-8">
                     <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Starts from</p>
                     <p className="text-5xl font-black">Rp 3.5M</p>
                     <p className="text-xs text-primary font-black mt-2 uppercase tracking-[0.2em]">Early Bird Available</p>
                  </div>
                  <ul className="space-y-4 mb-10 text-sm text-slate-300 font-medium">
                    <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-primary" /> <span>Digital Certificate</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-primary" /> <span>Course Workbook</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-primary" /> <span>Lifetime Community Access</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-primary" /> <span>Tea Break & Lunch</span></li>
                  </ul>
                  <button className="w-full bg-primary py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-primary-dark transition-colors shadow-lg shadow-orange-950/20">Register for Next Batch</button>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
