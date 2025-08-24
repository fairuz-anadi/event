import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Mail, Lock, Eye, EyeOff, Calendar, ArrowRight, X, AlertCircle, CheckCircle, Loader } from 'lucide-react'

const Login = ({ onClose, onSwitchToRegister }) => {
  const { login, resetPassword } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [resetEmail, setResetEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      return
    }

    setIsLoading(true)
    
    const result = await login(formData.email, formData.password)
    
    if (result.success) {
      setSuccess('Login successful! Welcome back.')
      setTimeout(onClose, 1000)
    } else {
      setError(result.error)
    }
    
    setIsLoading(false)
  }

  const handleForgotPassword = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!resetEmail) {
      setError('Please enter your email address')
      return
    }

    setIsLoading(true)
    
    const result = await resetPassword(resetEmail)
    
    if (result.success) {
      setSuccess(result.message)
      setTimeout(() => setShowForgotPassword(false), 2000)
    } else {
      setError(result.error)
    }
    
    setIsLoading(false)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (error) setError('')
  }

  return (
    <div className="modal-overlay animate-fade-in">
      <div className="modal-content slide-up max-w-md">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-emerald-600 to-teal-600 p-8 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="text-emerald-100">Sign in to Eventopia</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {!showForgotPassword ? (
            <>
              {/* Alerts */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-red-700 text-sm">{error}</span>
                </div>
              )}

              {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-green-700 text-sm">{success}</span>
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
                      placeholder="student@university.edu"
                      disabled={isLoading}
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
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-stone-600"
                      disabled={isLoading}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-stone-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-stone-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-stone-300 rounded"
                    />
                    <span className="ml-2 text-sm text-stone-600">Remember me</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                    disabled={isLoading}
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <Loader className="animate-spin h-5 w-5 mr-2" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>

              {/* Demo Credentials */}
              <div className="mt-6 p-4 bg-stone-50 rounded-lg">
                <h4 className="text-sm font-medium text-stone-700 mb-2">Demo Credentials</h4>
                <div className="text-xs text-stone-600 space-y-1">
                  <p><strong>Email:</strong> demo@university.edu</p>
                  <p><strong>Password:</strong> demo123</p>
                </div>
              </div>

              {/* Sign Up Link */}
              <div className="mt-8 text-center">
                <p className="text-stone-600">
                  Don't have an account?{' '}
                  <button
                    onClick={onSwitchToRegister}
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                    disabled={isLoading}
                  >
                    Sign up here
                  </button>
                </p>
              </div>
            </>
          ) : (
            /* Forgot Password Form */
            <>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-stone-800 mb-2">Reset Password</h3>
                <p className="text-stone-600 text-sm">
                  Enter your email address and we'll send you instructions to reset your password.
                </p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-red-700 text-sm">{error}</span>
                </div>
              )}

              {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-green-700 text-sm">{success}</span>
                </div>
              )}

              <form onSubmit={handleForgotPassword} className="space-y-6">
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
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      className="input-field pl-10"
                      placeholder="student@university.edu"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <Loader className="animate-spin h-5 w-5 mr-2" />
                        Sending...
                      </>
                    ) : (
                      'Send Reset Link'
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(false)}
                    className="px-6 py-2.5 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors font-medium"
                    disabled={isLoading}
                  >
                    Back
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login