import React from 'react'
import { Calendar, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mr-3">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Eventopia</span>
            </div>
            <p className="text-stone-300 mb-4 text-sm">
              Discover, create, and join amazing events in your university community. 
              Connect with like-minded students and make unforgettable memories.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-stone-400 hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-amber-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-amber-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-stone-300 hover:text-amber-400 transition-colors">
                  Browse Events
                </a>
              </li>
              <li>
                <a href="/categories" className="text-stone-300 hover:text-amber-400 transition-colors">
                  Event Categories
                </a>
              </li>
              <li>
                <a href="/create" className="text-stone-300 hover:text-amber-400 transition-colors">
                  Create Event
                </a>
              </li>
              <li>
                <a href="/universities" className="text-stone-300 hover:text-amber-400 transition-colors">
                  Universities
                </a>
              </li>
              <li>
                <a href="/about" className="text-stone-300 hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/help" className="text-stone-300 hover:text-amber-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/faq" className="text-stone-300 hover:text-amber-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="text-stone-300 hover:text-amber-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/community" className="text-stone-300 hover:text-amber-400 transition-colors">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="/safety" className="text-stone-300 hover:text-amber-400 transition-colors">
                  Safety Tips
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-stone-300">
                <Mail className="h-4 w-4 mr-3 text-amber-400 flex-shrink-0" />
                <span>support@eventopia.com</span>
              </div>
              <div className="flex items-center text-stone-300">
                <Phone className="h-4 w-4 mr-3 text-amber-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start text-stone-300">
                <MapPin className="h-4 w-4 mr-3 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>123 University Ave<br />Student Center, Floor 2<br />Campus City, ST 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-stone-800 mt-8 pt-8">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-stone-300 text-sm mb-4">
              Get notified about the latest events and updates in your area.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-stone-800 border border-stone-700 rounded-l-lg text-white placeholder-stone-400 focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-amber-500 text-white rounded-r-lg hover:bg-amber-600 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-stone-400">
            <div className="flex items-center mb-2 md:mb-0">
              <span>© {currentYear} Eventopia. Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>for students.</span>
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="hover:text-amber-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer