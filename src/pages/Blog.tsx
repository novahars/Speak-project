import { motion } from 'motion/react';
import { Calendar, Search, ArrowRight, Tag, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../constants';

export default function Blog() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
         <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="md:w-2/3">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Knowledge Hub</span>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-none whitespace-pre-wrap">Expert <span className="text-primary italic font-serif">Insights</span> on <br/>Communication.</h1>
              <p className="text-lg text-slate-500 font-medium">Learn tricks of the trade from professional presenters.</p>
            </div>
            <div className="md:w-1/3 w-full">
               <div className="relative">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-16 pr-6 py-4 outline-none focus:bg-white focus:border-primary transition-all font-bold text-sm tracking-tight"
                  />
               </div>
            </div>
         </div>

         {/* Featured Post */}
         <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group relative bg-white border border-slate-100 rounded-[3rem] overflow-hidden mb-20 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500"
         >
            <div className="flex flex-col lg:flex-row">
               <div className="lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
               </div>
               <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-6">
                     <span className="bg-secondary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded">Featured</span>
                     <span className="flex items-center text-[10px] text-slate-400 uppercase tracking-widest font-black"><Calendar className="w-3 h-3 mr-1" /> {blogPosts[0].date}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-none group-hover:text-primary transition-colors">{blogPosts[0].title}</h2>
                  <p className="text-gray-500 text-lg mb-10 leading-relaxed">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-3">
                       <div className="w-10 h-10 bg-slate-100 rounded-full" />
                       <span className="font-bold text-gray-900">{blogPosts[0].author}</span>
                    </div>
                    <Link to={`/blog/${blogPosts[0].id}`} className="bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary transition-colors group-hover:translate-x-2">
                       <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
               </div>
            </div>
         </motion.div>

         {/* Recent Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            {blogPosts.slice(1).map((post, i) => (
               <motion.div 
                 key={post.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="group"
               >
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                     <span className="text-primary text-[10px] font-black uppercase tracking-widest">{post.category}</span>
                     <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-gray-500 mb-8 line-clamp-2">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center font-black text-slate-900 text-[10px] uppercase tracking-[0.2em] border-b-2 border-slate-100 hover:border-primary transition-all pb-1 group-hover:text-primary">
                    Read Article <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
               </motion.div>
            ))}
         </div>

         {/* Newsletter */}
         <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-black mb-8 italic font-serif leading-none">Get speaking tips <br/>in your inbox.</h2>
            <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto font-medium">Join 5,000+ subscribers who receive our weekly "Voice Insight" newsletter.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
               <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-8 py-4 outline-none focus:bg-white/20 transition-all text-white placeholder:text-white/50 font-medium"
               />
               <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:scale-105 transition-transform">Subscribe</button>
            </div>
         </div>
      </section>
    </div>
  );
}
