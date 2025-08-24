import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-6xl font-bold text-stone-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-stone-700 mb-4">Page Not Found</h2>
      <p className="text-stone-600 mb-8">The page you're looking for doesn't exist.</p>
      <Link 
        to="/" 
        className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors"
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFound