import { motion } from 'motion/react';
import { Calendar, MapPin, ArrowRight, Info, Clock, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { schedule } from '../constants';

export default function Schedule() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
         <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">2024 - 2025</span>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-none">Your journey starts <span className="text-primary italic font-serif">here.</span></h1>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">Browse our upcoming classes and secure your seat. Early registration is highly recommended as seats are limited.</p>
            </motion.div>
         </div>

         <div className="space-y-8">
            {schedule.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 group flex flex-col lg:flex-row items-center gap-10"
              >
                 <div className="lg:w-1/4 text-center lg:text-left">
                    <div className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-3">Training Date</div>
                    <p className="text-2xl font-black text-slate-900 leading-tight">{item.date}</p>
                 </div>
                 
                 <div className="lg:w-2/4 flex-1">
                    <div className="flex items-center space-x-3 mb-4 justify-center lg:justify-start">
                       <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${item.status === 'Waitlist' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                          {item.status}
                       </span>
                       <span className="flex items-center text-[10px] text-slate-400 font-black uppercase tracking-widest"><Clock className="w-3 h-3 mr-1" /> 09:00 - 17:00 WIB</span>
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors uppercase tracking-tight leading-none">{item.title}</h3>
                    <p className="flex items-center text-slate-500 justify-center lg:justify-start font-medium text-sm">
                       <MapPin className="w-4 h-4 mr-2 text-primary" /> {item.location}
                    </p>
                 </div>

                 <div className="lg:w-1/4 flex flex-col gap-4 w-full sm:w-auto">
                    <Link to="/contact" className="bg-secondary text-primary px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest text-center hover:scale-105 transition-transform shadow-lg shadow-secondary/20">
                       Reserve Seat
                    </Link>
                    <button className="text-slate-400 font-black text-[10px] uppercase tracking-widest hover:text-primary transition-colors inline-flex items-center justify-center">
                       <Info className="w-4 h-4 mr-2" /> Program Details
                    </button>
                 </div>
              </motion.div>
            ))}
         </div>

         {/* Calendar Tip */}
         <div className="mt-20 flex flex-col md:flex-row items-center justify-between p-10 bg-slate-100 rounded-[3rem] gap-8">
            <div className="flex items-center space-x-6">
               <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                  <Download className="w-8 h-8 text-primary" />
               </div>
               <div>
                  <h4 className="text-xl font-black text-slate-900 leading-none mb-2">Annual Calendar</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">Download our full PDF calendar for the upcoming academic year.</p>
               </div>
            </div>
            <button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all flex items-center">
               Download PDF <Download className="ml-2 w-4 h-4" />
            </button>
         </div>
      </section>
    </div>
  );
}
