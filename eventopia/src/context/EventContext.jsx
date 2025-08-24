import React, { createContext, useContext, useState, useReducer } from 'react';

const EventContext = createContext();

export function useEvent() {
  return useContext(EventContext);
}

// Event reducer for managing complex state
const eventReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EVENTS':
      return { ...state, events: action.payload };
    case 'ADD_EVENT':
      return { ...state, events: [...state.events, action.payload] };
    case 'UPDATE_EVENT':
      return {
        ...state,
        events: state.events.map(event =>
          event.id === action.payload.id ? action.payload : event
        )
      };
    case 'DELETE_EVENT':
      return {
        ...state,
        events: state.events.filter(event => event.id !== action.payload)
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

const initialState = {
  events: [],
  loading: false,
  error: null
};

export function EventProvider({ children }) {
  const [state, dispatch] = useReducer(eventReducer, initialState);

  const addEvent = (event) => {
    const newEvent = {
      ...event,
      id: Date.now(), // Simple ID generation
      createdAt: new Date().toISOString()
    };
    dispatch({ type: 'ADD_EVENT', payload: newEvent });
  };

  const updateEvent = (updatedEvent) => {
    dispatch({ type: 'UPDATE_EVENT', payload: updatedEvent });
  };

  const deleteEvent = (eventId) => {
    dispatch({ type: 'DELETE_EVENT', payload: eventId });
  };

  const getEventById = (id) => {
    return state.events.find(event => event.id === parseInt(id));
  };

  const getUpcomingEvents = () => {
    const now = new Date();
    return state.events.filter(event => new Date(event.date) > now);
  };

  const getPastEvents = () => {
    const now = new Date();
    return state.events.filter(event => new Date(event.date) <= now);
  };

  const value = {
    events: state.events,
    loading: state.loading,
    error: state.error,
    addEvent,
    updateEvent,
    deleteEvent,
    getEventById,
    getUpcomingEvents,
    getPastEvents
  };

  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  );
}