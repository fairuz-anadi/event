import React from 'react'
import { useParams } from 'react-router-dom'

const EventDetail = () => {
  const { id } = useParams()
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-stone-800 mb-6">Event Details</h1>
      <p className="text-stone-600">Event {id} details coming soon...</p>
    </div>
  )
}

export default EventDetail
