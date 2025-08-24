import React, { useState, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { Calendar, User, Bell, Search, Menu, X, LogOut, Settings, Plus, MapPin } from 'lucide-react'
import Register from './Register'
import Login from './Login'

const Header = () => {
  const { user, logout } = useContext(AuthContext)
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleLogout = () => {
    logout()
    setShowUserMenu(false)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search functionality
    console.log('Searching for:', searchQuery)
  }

  return (
    <>
      <header className="bg-white shadow-sm border-b border-stone-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mr-3">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-stone-800">Eventopia</span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:ml-8 md:flex md:space-x-8">
                <a
                  href="/"
                  className="text-stone-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Events
                </a>
                <a
                  href="/categories"
                  className="text-stone-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Categories
                </a>
                {user && (
                  <a
                    href="/my-events"
                    className="text-stone-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    My Events
                  </a>
                )}
              </nav>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-stone-400" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-stone-300 rounded-lg leading-5 bg-white placeholder-stone-500 focus:outline-none focus:placeholder-stone-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-sm"
                    placeholder="Search events..."
                  />
                </div>
              </form>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  {/* Create Event Button */}
                  <button className="hidden md:flex items-center px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors text-sm font-medium">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Event
                  </button>

                  {/* Notifications */}
                  <button className="p-2 text-stone-600 hover:text-amber-600 hover:bg-stone-100 rounded-lg transition-colors relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>

                  {/* User Menu */}
                  <div className="relative">
                    <button
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className="flex items-center p-2 text-stone-600 hover:text-amber-600 hover:bg-stone-100 rounded-lg transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mr-2">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <span className="hidden md:block text-sm font-medium text-stone-700">
                        {user.name}
                      </span>
                    </button>

                    {/* User Dropdown */}
                    {showUserMenu && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-stone-200 py-1 z-50">
                        <div className="px-4 py-2 border-b border-stone-200">
                          <p className="text-sm font-medium text-stone-800">{user.name}</p>
                          <p className="text-xs text-stone-600">{user.email}</p>
                        </div>
                        <a
                          href="/profile"
                          className="flex items-center px-4 py-2 text-sm text-stone-700 hover:bg-stone-100"
                        >
                          <User className="h-4 w-4 mr-3" />
                          Profile
                        </a>
                        <a
                          href="/settings"
                          className="flex items-center px-4 py-2 text-sm text-stone-700 hover:bg-stone-100"
                        >
                          <Settings className="h-4 w-4 mr-3" />
                          Settings
                        </a>
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                        >
                          <LogOut className="h-4 w-4 mr-3" />
                          Sign Out
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* Sign In / Sign Up for non-authenticated users */}
                  <button
                    onClick={() => setShowLogin(true)}
                    className="text-stone-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setShowRegister(true)}
                    className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors text-sm font-medium"
                  >
                    Sign Up
                  </button>
                </>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="md:hidden p-2 text-stone-600 hover:text-amber-600 hover:bg-stone-100 rounded-lg transition-colors"
              >
                {showMobileMenu ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-3">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-stone-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-stone-300 rounded-lg leading-5 bg-white placeholder-stone-500 focus:outline-none focus:placeholder-stone-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-sm"
                  placeholder="Search events..."
                />
              </div>
            </form>
          </div>
        </div>

        {/* Mobile Navigation */}
        {showMobileMenu && (
          <div className="md:hidden bg-white border-t border-stone-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-amber-600 hover:bg-stone-100 rounded-lg transition-colors"
              >
                Events
              </a>
              <a
                href="/categories"
                className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-amber-600 hover:bg-stone-100 rounded-lg transition-colors"
              >
                Categories
              </a>
              {user && (
                <>
                  <a
                    href="/my-events"
                    className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-amber-600 hover:bg-stone-100 rounded-lg transition-colors"
                  >
                    My Events
                  </a>
                  <button className="w-full text-left px-3 py-2 text-base font-medium bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
                    <Plus className="h-4 w-4 mr-2 inline" />
                    Create Event
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Modals */}
      {showRegister && (
        <Register
          onClose={() => setShowRegister(false)}
          onSwitchToLogin={() => {
            setShowRegister(false)
            setShowLogin(true)
          }}
        />
      )}

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onSwitchToRegister={() => {
            setShowLogin(false)
            setShowRegister(true)
          }}
        />
      )}

      {/* Click outside to close user menu */}
      {showUserMenu && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setShowUserMenu(false)}
        />
      )}
    </>
  )
}

export default Header