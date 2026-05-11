import { Home, Info, BookOpen, Calendar, Mail, Phone, MessageSquare, Instagram, Linkedin, Twitter, Target, Users, Monitor, Award, CheckCircle2, ChevronRight, Menu, X, PlayCircle, Globe, Briefcase } from 'lucide-react';

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    children: [
      { name: 'Master Class Public Speaking', href: '/services/public-speaking' },
      { name: 'Master Class Master of Ceremony', href: '/services/mc' },
      { name: 'Corporate Training', href: '/services/corporate' },
      { name: 'Private 1 on 1', href: '/services/private' },
      { name: 'Mini Class', href: '/services/mini' },
      { name: 'Digital Class', href: '/services/digital' },
    ]
  },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const services = [
  {
    id: 'public-speaking',
    title: 'Master Class Public Speaking',
    description: 'Transform your stage presence and deliver impactful messages with confidence.',
    icon: Target,
    image: 'https://picsum.photos/seed/speak1/800/600',
    details: 'Our flagship program designed to take you from nervous beginner to persuasive speaker.'
  },
  {
    id: 'mc',
    title: 'Master Class Master of Ceremony',
    description: 'Learn the art of hosting events with grace, wit, and professionalism.',
    icon: Award,
    image: 'https://picsum.photos/seed/speak2/800/600',
    details: 'Master the technical and creative aspects of conducting high-profile events.'
  },
  {
    id: 'corporate',
    title: 'Corporate Training',
    description: 'Empower your team with elite communication and presentation skills.',
    icon: Briefcase,
    image: 'https://picsum.photos/seed/speak3/800/600',
    details: 'Customized workshops tailored to your organization\'s specific communication goals.'
  },
  {
    id: 'private',
    title: 'Private One on One',
    description: 'Personalized coaching sessions for rapid improvement and specific goals.',
    icon: Users,
    image: 'https://picsum.photos/seed/speak4/800/600',
    details: 'Accelerated learning with 100% focus on your individual speaking challenges.'
  },
  {
    id: 'mini',
    title: 'Mini Class',
    description: 'Short, intensive sessions focusing on specific public speaking niches.',
    icon: MessageSquare,
    image: 'https://picsum.photos/seed/speak5/800/600',
    details: 'Perfect for busy professionals looking to sharpen specific skills quickly.'
  },
  {
    id: 'digital',
    title: 'Digital Class',
    description: 'Learn at your own pace with our comprehensive online curriculum.',
    icon: Monitor,
    image: 'https://picsum.photos/seed/speak6/800/600',
    details: 'High-quality video lessons and resources accessible anytime, anywhere.'
  }
];

export const blogPosts = [
  {
    id: 1,
    title: 'Overcoming Stage Fright: 5 Science-Backed Techniques',
    excerpt: 'Anxiety is natural, but it doesn\'t have to control your performance. Learn how to harness your nerves.',
    author: 'Sarah Chen',
    date: 'May 10, 2024',
    category: 'Public Speaking',
    image: 'https://picsum.photos/seed/blog1/800/500'
  },
  {
    id: 2,
    title: 'The Secret to a Perfect MC Introduction',
    excerpt: 'How to set the stage and build energy before the speaker even walks on.',
    author: 'Michael Ross',
    date: 'May 5, 2024',
    category: 'MC Training',
    image: 'https://picsum.photos/seed/blog2/800/500'
  },
  {
    id: 3,
    title: 'Communication in the Hybrid Workplace',
    excerpt: 'Adapting your delivery for screens and stages simultaneously.',
    author: 'Elena Rodriguez',
    date: 'April 28, 2024',
    category: 'Corporate',
    image: 'https://picsum.photos/seed/blog3/800/500'
  }
];

export const schedule = [
  { date: 'June 15-16, 2024', title: 'Master Class Public Speaking', location: 'Jakarta Hybrid', status: 'Filling Fast' },
  { date: 'June 22, 2024', title: 'Mini Class: Body Language', location: 'Online Zoom', status: 'Open' },
  { date: 'July 5-6, 2024', title: 'MC Masterclass', location: 'Bandung Offline', status: 'Waitlist' },
  { date: 'July 12, 2024', title: 'Digital Class Cohort 8', location: 'Self-Paced', status: 'Registration Open' },
];
