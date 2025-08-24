import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { User, Mail, Lock, Eye, EyeOff, Calendar, ArrowRight, X, AlertCircle, CheckCircle, Loader, GraduationCap, Building, Hash, BookOpen } from 'lucide-react'

const Register = ({ onClose, onSwitchToLogin }) => {
  const { register } = useContext(AuthContext)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    university: '',
    department: '',
    studentId: '',
    year: '',
    interests: []
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const universities = [
    'University of Technology',
    'State University',
    'Metropolitan University',
    'City College',
    'National University',
    'International University'
  ]

  const departments = [
    'Computer Science',
    'Engineering',
    'Business Administration',
    'Liberal Arts',
    'Sciences',
    'Medicine',
    'Law',
    'Education'
  ]

  const yearOptions = [
    'Freshman',
    'Sophomore',
    'Junior',
    'Senior',
    'Graduate',
    'PhD'
  ]

  const interestOptions = [
    'Technology', 'Arts & Culture', 'Sports', 'Music', 'Academic Research',
    'Entrepreneurship', 'Community Service', 'Photography', 'Writing',
    'Gaming', 'Outdoor Activities', 'Cooking', 'Travel', 'Languages'
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    // Validation
    if (currentStep === 1) {
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        setError('Please fill in all required fields')
        return
      }

      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match')
        return
      }

      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters long')
        return
      }

      setCurrentStep(2)
      return
    }

    if (currentStep === 2) {
      if (!formData.university || !formData.department || !formData.year) {
        setError('Please complete all academic information')
        return
      }

      setCurrentStep(3)
      return
    }

    // Final submission
    setIsLoading(true)
    
    const result = await register(formData)
    
    if (result.success) {
      setSuccess('Account created successfully! Welcome to Eventopia.')
      setTimeout(onClose, 2000)
    } else {
      setError(result.error)
    }
    
    setIsLoading(false)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (name === 'interests') {
      setFormData(prev => ({
        ...prev,
        interests: checked 
          ? [...prev.interests, value]
          : prev.interests.filter(interest => interest !== value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
    
    if (error) setError('')
  }

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStep1 = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-stone-400" />
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field pl-10"
            placeholder="Enter your full name"
            disabled={isLoading}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-2">
          Email Address <span className="text-red-500">*</span>
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
          Password <span className="text-red-500">*</span>
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
            placeholder="Create a secure password"
            disabled={isLoading}
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

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-2">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-stone-400" />
          </div>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input-field pl-10 pr-10"
            placeholder="Confirm your password"
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-stone-600"
          >
            {showConfirmPassword ? (
              <EyeOff className="h-5 w-5 text-stone-400" />
            ) : (
              <Eye className="h-5 w-5 text-stone-400" />
            )}
          </button>
        </div>
      </div>

      <button type="submit" className="w-full btn-primary">
        Continue to Academic Info
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </form>
  )

  const renderStep2 = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* University */}
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-2">
          University <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Building className="h-5 w-5 text-stone-400" />
          </div>
          <select
            name="university"
            value={formData.university}
            onChange={handleChange}
            className="input-field pl-10 appearance-none"
            disabled={isLoading}
          >
            <option value="">Select your university</option>
            {universities.map(uni => (
              <option key={uni} value={uni}>{uni}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Department */}
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-2">
          Department <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BookOpen className="h-5 w-5 text-stone-400" />
          </div>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="input-field pl-10 appearance-none"
            disabled={isLoading}
          >
            <option value="">Select your department</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Student ID */}
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-2">
          Student ID
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Hash className="h-5 w-5 text-stone-400" />
          </div>
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            className="input-field pl-10"
            placeholder="Enter your student ID (optional)"
            disabled={isLoading}
          />
        </div>
      </div>

      {/* Academic Year */}
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-2">
          Academic Level <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <GraduationCap className="h-5 w-5 text-stone-400" />
          </div>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="input-field pl-10 appearance-none"
            disabled={isLoading}
          >
            <option value="">Select your academic level</option>
            {yearOptions.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex space-x-3">
        <button
          type="button"
          onClick={goBack}
          className="flex-1 px-4 py-2 text-stone-600 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors"
          disabled={isLoading}
        >
          Back
        </button>
        <button type="submit" className="flex-1 btn-primary">
          Continue to Interests
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </form>
  )

  const renderStep3 = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-stone-800 mb-2">
          Select Your Interests
        </h3>
        <p className="text-sm text-stone-600 mb-4">
          Choose topics you're interested in to help us recommend relevant events (optional)
        </p>
        
        <div className="grid grid-cols-2 gap-3">
          {interestOptions.map(interest => (
            <label
              key={interest}
              className="flex items-center p-3 rounded-lg border border-stone-200 hover:bg-stone-50 cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                name="interests"
                value={interest}
                checked={formData.interests.includes(interest)}
                onChange={handleChange}
                className="mr-3 h-4 w-4 text-amber-600 border-stone-300 rounded focus:ring-amber-500"
                disabled={isLoading}
              />
              <span className="text-sm text-stone-700">{interest}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex space-x-3">
        <button
          type="button"
          onClick={goBack}
          className="flex-1 px-4 py-2 text-stone-600 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors"
          disabled={isLoading}
        >
          Back
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader className="w-4 h-4 mr-2 animate-spin" />
              Creating Account...
            </>
          ) : (
            <>
              Create Account
              <CheckCircle className="ml-2 h-5 w-5" />
            </>
          )}
        </button>
      </div>
    </form>
  )

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Personal Information'
      case 2: return 'Academic Information'
      case 3: return 'Interests & Preferences'
      default: return 'Registration'
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-200">
          <div>
            <h2 className="text-xl font-bold text-stone-800">Join Eventopia</h2>
            <p className="text-sm text-stone-600">{getStepTitle()}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-stone-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-stone-500" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="px-6 py-4 bg-stone-50">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3].map(step => (
              <div
                key={step}
                className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
                  step <= currentStep
                    ? 'bg-amber-500 text-white'
                    : 'bg-stone-200 text-stone-600'
                }`}
              >
                {step < currentStep ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  step
                )}
              </div>
            ))}
          </div>
          <div className="w-full bg-stone-200 rounded-full h-2">
            <div
              className="bg-amber-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
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

          {/* Step Content */}
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-stone-50 text-center border-t border-stone-200">
          <p className="text-sm text-stone-600">
            Already have an account?{' '}
            <button
              onClick={onSwitchToLogin}
              className="text-amber-600 hover:text-amber-700 font-medium"
              disabled={isLoading}
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register