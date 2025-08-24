import React, { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Mock authentication functions - replace with real API calls
  const login = async (credentials) => {
    try {
      setLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock successful login
      if (credentials.email && credentials.password) {
        const mockUser = {
          id: 1,
          name: 'John Doe',
          email: credentials.email,
          university: 'University of Technology',
          department: 'Computer Science',
          avatar: null
        }
        setUser(mockUser)
        localStorage.setItem('eventopia_user', JSON.stringify(mockUser))
        return { success: true }
      } else {
        return { success: false, error: 'Invalid credentials' }
      }
    } catch (error) {
      return { success: false, error: 'Login failed' }
    } finally {
      setLoading(false)
    }
  }

  const register = async (userData) => {
    try {
      setLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Mock successful registration
      const mockUser = {
        id: Date.now(),
        name: userData.name,
        email: userData.email,
        university: userData.university,
        department: userData.department,
        year: userData.year,
        interests: userData.interests,
        avatar: null
      }
      
      setUser(mockUser)
      localStorage.setItem('eventopia_user', JSON.stringify(mockUser))
      return { success: true }
    } catch (error) {
      return { success: false, error: 'Registration failed' }
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('eventopia_user')
  }

  const updateProfile = async (updatedData) => {
    try {
      setLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const updatedUser = { ...user, ...updatedData }
      setUser(updatedUser)
      localStorage.setItem('eventopia_user', JSON.stringify(updatedUser))
      return { success: true }
    } catch (error) {
      return { success: false, error: 'Profile update failed' }
    } finally {
      setLoading(false)
    }
  }

  // Check for existing user on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('eventopia_user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        localStorage.removeItem('eventopia_user')
      }
    }
    setLoading(false)
  }, [])

  const value = {
    user,
    login,
    register,
    logout,
    updateProfile,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext }