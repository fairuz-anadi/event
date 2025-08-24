import React, { useState, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { Mail, Lock, Eye, EyeOff, X, AlertCircle, CheckCircle, Loader, Calendar } from 'lucide-react'

const Login = ({ onClose, onSwitchToRegister }) => {
  const { login } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      return
    }

    setIsLoading(true)
    
    const result = await login(formData)
    
    if (result.success) {
      setSuccess('Welcome back to Eventopia!')
      setTimeout(onClose, 1500)
    } else {
      setError(result.error || 'Login failed. Please try again.')
    }
    
    setIsLoading(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (error) setError('')
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-200">
          <div>
            <h2 className="text-xl font-bold text-stone-800">Welcome Back</h2>
            <p className="text-sm text-stone-600">Sign in to your account</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-stone-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-stone-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Brand */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mr-3">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-stone-800">Eventopia</span>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
              <span className="text-sm text-red-700">{error}</span>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-sm text-green-700">{success}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-stone-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field pl-10"
                  placeholder="Enter your email"
                  disabled={isLoading}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-stone-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input-field pl-10 pr-10"
                  placeholder="Enter your password"
                  disabled={isLoading}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-stone-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-stone-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-stone-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-amber-600 hover:text-amber-700 font-medium"
                disabled={isLoading}
              >
                Forgot your password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader className="w-4 h-4 mr-2 animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 mb-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-stone-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-stone-500">or</span>
              </div>
            </div>
          </div>

          {/* Demo Login */}
          <button
            type="button"
            onClick={() => setFormData({ email: 'demo@example.com', password: 'password123' })}
            className="w-full btn-secondary text-sm"
            disabled={isLoading}
          >
            Use Demo Account
          </button>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-stone-50 text-center border-t border-stone-200 rounded-b-xl">
          <p className="text-sm text-stone-600">
            Don't have an account?{' '}
            <button
              onClick={onSwitchToRegister}
              className="text-amber-600 hover:text-amber-700 font-medium"
              disabled={isLoading}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login