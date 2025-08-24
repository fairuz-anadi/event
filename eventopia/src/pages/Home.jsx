import React from 'react'
import { Calendar, Users, MapPin, Clock } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6">
              Welcome to
              <span className="text-amber-600 block">Eventopia</span>
            </h1>
            <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
              Discover amazing events, connect with your university community, and create unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 text-white px-8 py-3 rounded-lg hover:bg-amber-600 transition-colors font-medium">
                Explore Events
              </button>
              <button className="border border-stone-300 text-stone-700 px-8 py-3 rounded-lg hover:bg-stone-50 transition-colors font-medium">
                Create Event
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">
              Everything You Need for Campus Events
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              From academic conferences to social gatherings, Eventopia makes it easy to discover and participate in your university community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Easy Discovery</h3>
              <p className="text-stone-600 text-sm">Find events that match your interests and schedule with our smart filtering system.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Connect</h3>
              <p className="text-stone-600 text-sm">Meet like-minded students and build your university network through events.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Campus-Wide</h3>
              <p className="text-stone-600 text-sm">Access events from all departments and student organizations in one place.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Stay Updated</h3>
              <p className="text-stone-600 text-sm">Get real-time notifications about events you're interested in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students already using Eventopia to enhance their university experience.
          </p>
          <button className="bg-amber-500 text-white px-8 py-3 rounded-lg hover:bg-amber-600 transition-colors font-medium">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home