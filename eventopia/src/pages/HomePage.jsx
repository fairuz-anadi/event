import React, { useState, useEffect } from 'react';
import { Calendar, Users, MapPin, Clock, Search, Star, ChevronRight, Play, Award, Zap, Shield, Globe, ArrowRight, Menu, X, Bell, Heart, BookOpen, Trophy, Sparkles, Mail, Phone, ExternalLink, Filter, Plus } from 'lucide-react';

const EventopiaDemo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredEvents = [
    {
      id: 1,
      title: 'Tech Innovation Summit 2025',
      description: 'Join industry leaders and innovators for the biggest tech event of the year',
      date: '2025-09-15',
      time: '09:00',
      location: 'Main Auditorium',
      category: 'Technical',
      organizer: 'Computer Science Club',
      attendees: 450,
      maxAttendees: 500,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      price: 'Free',
      difficulty: 'Intermediate'
    },
    {
      id: 2,
      title: 'Annual Cultural Fest',
      description: 'Celebrate diversity and creativity with performances, food, and art',
      date: '2025-10-02',
      time: '14:00',
      location: 'Campus Ground',
      category: 'Cultural',
      organizer: 'Cultural Club',
      attendees: 780,
      maxAttendees: 1000,
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop',
      price: '$15',
      difficulty: 'Beginner'
    }
  ];

  const stats = [
    { number: '500+', label: 'Active Events', icon: Calendar, change: '+12%' },
    { number: '10K+', label: 'Students Engaged', icon: Users, change: '+25%' },
    { number: '50+', label: 'University Clubs', icon: Star, change: '+8%' },
    { number: '95%', label: 'Satisfaction Rate', icon: Award, change: '+3%' }
  ];

  const categories = ['All', 'Technical', 'Cultural', 'Academic', 'Workshop', 'Competition', 'Sports'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredEvents.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredEvents.length]);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-stone-900/95 backdrop-blur-md shadow-lg border-b border-emerald-800/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg ring-2 ring-emerald-500/20">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Eventopia
                  </h1>
                  <p className="text-xs text-stone-400">University Events Hub</p>
                </div>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-stone-300 hover:text-emerald-400 font-medium transition-all duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#events" className="text-stone-300 hover:text-emerald-400 font-medium transition-all duration-300 relative group">
                Events
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#clubs" className="text-stone-300 hover:text-emerald-400 font-medium transition-all duration-300 relative group">
                Clubs
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-stone-300 hover:text-emerald-400 font-medium transition-all duration-300 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all group-hover:w-full"></span>
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-stone-300 hover:text-emerald-400 font-medium transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-emerald-500/10">
                Login
              </button>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 font-medium">
                Sign Up Free
              </button>
            </div>

            <button 
              className="md:hidden p-2 rounded-lg hover:bg-emerald-500/10 text-stone-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-emerald-900 to-teal-900" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-stone-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-emerald-900/30 backdrop-blur-md border border-emerald-500/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-4 h-4 text-emerald-300 mr-2" />
              <span className="text-emerald-100 text-sm font-medium">Crafted for Academic Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-stone-100 mb-6 leading-tight">
              Where Campus Life
              <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent block">
                Comes Together
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover meaningful university events, connect with like-minded peers, and build lasting relationships 
              through our sophisticated campus community platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 flex items-center">
                Explore Events
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-stone-800/50 backdrop-blur-md border border-stone-600/50 text-stone-200 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-stone-700/50 transition-all duration-300 flex items-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative flex items-center bg-stone-800/40 backdrop-blur-md border border-stone-600/50 rounded-xl p-2">
                <div className="flex items-center flex-1">
                  <Search className="ml-4 h-5 w-5 text-stone-400" />
                  <input
                    type="text"
                    placeholder="Search events, clubs, or categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 ml-3 bg-transparent text-stone-200 placeholder-stone-400 focus:outline-none text-lg"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-stone-700/50 border border-stone-600/50 text-stone-200 rounded-lg px-3 py-2 focus:outline-none"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-stone-800 text-stone-200">
                        {category}
                      </option>
                    ))}
                  </select>
                  <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 font-medium">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {featuredEvents.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-emerald-400 scale-125' : 'bg-stone-500 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Platform Insights</h2>
            <p className="text-stone-600">Real-time engagement from our academic community</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl mb-6 shadow-lg shadow-emerald-500/25 group-hover:shadow-xl group-hover:shadow-emerald-500/30 transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-stone-800 mb-2">{stat.number}</div>
                <div className="text-stone-600 mb-2">{stat.label}</div>
                <div className="inline-flex items-center text-emerald-700 text-sm font-medium">
                  <ArrowRight className="w-3 h-3 mr-1 transform rotate-45" />
                  {stat.change} this month
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Featured Events</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Discover exceptional opportunities for learning, networking, and personal growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <div key={event.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-stone-200 overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="bg-white/95 backdrop-blur-sm text-emerald-700 px-3 py-1 rounded-full text-sm font-medium border border-emerald-200">
                      {event.category}
                    </span>
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.price}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/95 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-lg border border-stone-200">
                      <Heart className="h-4 w-4 text-stone-600 hover:text-red-500 transition-colors" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-800 group-hover:text-emerald-700 transition-colors mb-3">
                    {event.title}
                  </h3>
                  
                  <p className="text-stone-600 mb-4 leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-stone-500">
                      <Calendar className="h-4 w-4 mr-3 text-emerald-600" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-sm text-stone-500">
                      <Clock className="h-4 w-4 mr-3 text-emerald-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-stone-500">
                      <MapPin className="h-4 w-4 mr-3 text-emerald-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-stone-500">
                      <Users className="h-4 w-4 mr-3 text-emerald-600" />
                      <span>{event.attendees}/{event.maxAttendees} registered</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="text-stone-500">Organized by</span>
                      <span className="text-stone-700 font-medium ml-1">{event.organizer}</span>
                    </div>
                    <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-200 flex items-center font-medium">
                      Register
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Create Event Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border-2 border-dashed border-emerald-300 p-8 flex items-center justify-center group hover:border-emerald-500 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/25">
                  <Plus className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">Host an Event</h3>
                <p className="text-stone-600 mb-4">Share your passion and bring the community together</p>
                <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 rounded-lg transition-colors font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-lg hover:shadow-xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-200 text-lg font-medium">
              View All Events
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-stone-800 via-emerald-800 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-stone-100 mb-4">Ready to Elevate Your Campus Experience?</h2>
          <p className="text-xl text-stone-300 mb-8">
            Join our distinguished community of students, faculty, and organizations shaping the future of university life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300">
              Join Eventopia
            </button>
            <button className="bg-stone-700/50 backdrop-blur-sm border-2 border-stone-600 text-stone-200 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-stone-600/50 hover:border-stone-500 transition-all duration-300">
              Explore Features
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-200">Eventopia</h3>
              </div>
              <p className="text-stone-400 mb-4 leading-relaxed">
                The premier academic platform for university events and meaningful community connections.
              </p>
              <div className="flex space-x-3">
                <button className="bg-stone-800 hover:bg-stone-700 p-2 rounded-lg transition-colors border border-stone-700">
                  <Mail className="h-4 w-4" />
                </button>
                <button className="bg-stone-800 hover:bg-stone-700 p-2 rounded-lg transition-colors border border-stone-700">
                  <Phone className="h-4 w-4" />
                </button>
                <button className="bg-stone-800 hover:bg-stone-700 p-2 rounded-lg transition-colors border border-stone-700">
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-stone-200">Platform</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">Browse Events</a></li>
                <li><a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">Create Event</a></li>
                <li><a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">Join Clubs</a></li>
                <li><a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-stone-200">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">Community</a></li>
                <li><a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">Guidelines</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-stone-200">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors">Accessibility</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-400 text-sm">
              © 2025 Eventopia. All rights reserved. Crafted for academic excellence.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-stone-400 text-sm">Built with</span>
              <Heart className="h-4 w-4 text-emerald-500" />
              <span className="text-stone-400 text-sm">for universities</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EventopiaDemo;