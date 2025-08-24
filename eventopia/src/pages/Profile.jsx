import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const Profile = () => {
  const { user } = useContext(AuthContext)
  
  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-stone-800 mb-6">Profile</h1>
        <p className="text-stone-600">Please log in to view your profile.</p>
      </div>
    )
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-stone-800 mb-6">Profile</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">{user.name}</h2>
        <p className="text-stone-600">Email: {user.email}</p>
        <p className="text-stone-600">University: {user.university}</p>
        <p className="text-stone-600">Department: {user.department}</p>
      </div>
    </div>
  )
}

export default Profile