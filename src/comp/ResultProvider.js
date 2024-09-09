import React, { createContext, useContext, useState } from 'react';

const baseUrl = 'https://google-search74.p.rapidapi.com/?query=';
// Create the context object outside of the component
const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
  // Define your state variables
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setLoading(true);
    try {
      const res = await fetch(`${baseUrl}${type}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_HEAD
        }
      });

      const data = await res.json();
      setResult(data);
      
      console.log(data)
    } catch (error) {
      console.error("Error fetching results:", error);
    } finally {
      setLoading(false);
    }
  };

  // Provide the context value to its children
  return (
    <ResultContext.Provider value={{ getResults, result, searchTerm, setSearchTerm, loading }}>
      {children} 
    </ResultContext.Provider>
  );
};

// Custom hook to use the ResultContext
export const useResultContext = () => useContext(ResultContext);
