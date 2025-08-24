import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-white shadow-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-stone-800">Eventopia</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-amber-600 mb-4">
            Welcome to Eventopia
          </h2>
          <p className="text-stone-600 mb-8">
            Your university event management platform
          </p>
          <button className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors">
            Get Started
          </button>
        </div>
      </main>
    </div>
  )
}

export default App