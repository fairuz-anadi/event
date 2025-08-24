import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    // Add your login logic here
    try {
      // Example login logic
      console.log('Logging in with:', email, password);
      // Set user after successful login
      setCurrentUser({ email });
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    }
  };

  const signup = async (email, password) => {
    // Add your signup logic here
    try {
      console.log('Signing up with:', email, password);
      setCurrentUser({ email });
      return { success: true };
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  useEffect(() => {
    // Check if user is already logged in (e.g., from localStorage, token, etc.)
    const checkAuth = () => {
      // Add your auth check logic here
      setLoading(false);
    };
    
    checkAuth();
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}