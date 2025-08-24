import React from 'react'
import { Loader, Calendar, Clock } from 'lucide-react'

const LoadingSpinner = ({ 
  size = 'medium', 
  message = 'Loading...', 
  fullScreen = false,
  variant = 'default'
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-4 h-4'
      case 'large':
        return 'w-8 h-8'
      case 'xl':
        return 'w-12 h-12'
      default: // medium
        return 'w-6 h-6'
    }
  }

  const getIconSize = () => {
    switch (size) {
      case 'small':
        return 'h-4 w-4'
      case 'large':
        return 'h-8 w-8'
      case 'xl':
        return 'h-12 w-12'
      default: // medium
        return 'h-6 w-6'
    }
  }

  const getTextSize = () => {
    switch (size) {
      case 'small':
        return 'text-sm'
      case 'large':
        return 'text-lg'
      case 'xl':
        return 'text-xl'
      default: // medium
        return 'text-base'
    }
  }

  const renderSpinner = () => {
    switch (variant) {
      case 'calendar':
        return (
          <div className="relative">
            <Calendar className={`${getIconSize()} text-amber-500 animate-pulse`} />
            <div className="absolute inset-0 animate-spin">
              <Clock className={`${getIconSize()} text-amber-600 opacity-60`} />
            </div>
          </div>
        )
      case 'dots':
        return (
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        )
      case 'pulse':
        return (
          <div className={`${getSizeClasses()} bg-amber-500 rounded-full animate-pulse`}></div>
        )
      case 'spin':
        return (
          <div className={`${getSizeClasses()} border-2 border-amber-200 border-t-amber-500 rounded-full animate-spin`}></div>
        )
      default:
        return (
          <Loader className={`${getIconSize()} text-amber-500 animate-spin`} />
        )
    }
  }

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center space-y-4">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mb-2">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          {renderSpinner()}
          {message && (
            <div className="text-center">
              <p className={`${getTextSize()} font-medium text-stone-800`}>{message}</p>
              <p className="text-sm text-stone-600 mt-1">Please wait a moment...</p>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      {renderSpinner()}
      {message && (
        <p className={`${getTextSize()} text-stone-600 text-center`}>
          {message}
        </p>
      )}
    </div>
  )
}

// Individual spinner components for specific use cases
export const ButtonSpinner = ({ className = '' }) => (
  <Loader className={`h-4 w-4 animate-spin ${className}`} />
)

export const PageSpinner = ({ message = 'Loading events...' }) => (
  <div className="flex items-center justify-center py-12">
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-stone-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-amber-500 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <div className="text-center">
        <p className="text-lg font-medium text-stone-800">{message}</p>
        <p className="text-sm text-stone-600">This won't take long...</p>
      </div>
    </div>
  </div>
)

export const InlineSpinner = ({ message = 'Loading...', size = 'small' }) => (
  <div className="flex items-center space-x-2">
    <Loader className={`${size === 'small' ? 'h-4 w-4' : 'h-5 w-5'} animate-spin text-amber-500`} />
    <span className={`${size === 'small' ? 'text-sm' : 'text-base'} text-stone-600`}>
      {message}
    </span>
  </div>
)

export const CardSpinner = () => (
  <div className="flex items-center justify-center py-8">
    <div className="flex flex-col items-center space-y-3">
      <div className="w-8 h-8 border-2 border-stone-200 border-t-amber-500 rounded-full animate-spin"></div>
      <p className="text-sm text-stone-600">Loading...</p>
    </div>
  </div>
)

// Skeleton loader components
export const EventCardSkeleton = () => (
  <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden animate-pulse">
    <div className="h-48 bg-stone-200"></div>
    <div className="p-4 space-y-3">
      <div className="h-4 bg-stone-200 rounded w-3/4"></div>
      <div className="h-3 bg-stone-200 rounded w-1/2"></div>
      <div className="h-3 bg-stone-200 rounded w-2/3"></div>
      <div className="flex justify-between items-center mt-4">
        <div className="h-3 bg-stone-200 rounded w-1/4"></div>
        <div className="h-8 bg-stone-200 rounded w-20"></div>
      </div>
    </div>
  </div>
)

export const ProfileSkeleton = () => (
  <div className="animate-pulse">
    <div className="flex items-center space-x-4 mb-6">
      <div className="w-16 h-16 bg-stone-200 rounded-full"></div>
      <div className="space-y-2">
        <div className="h-6 bg-stone-200 rounded w-32"></div>
        <div className="h-4 bg-stone-200 rounded w-24"></div>
      </div>
    </div>
    <div className="space-y-4">
      <div className="h-4 bg-stone-200 rounded w-full"></div>
      <div className="h-4 bg-stone-200 rounded w-3/4"></div>
      <div className="h-4 bg-stone-200 rounded w-1/2"></div>
    </div>
  </div>
)

export default LoadingSpinner