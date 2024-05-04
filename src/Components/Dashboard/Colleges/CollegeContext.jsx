import React, { createContext, useState, useContext } from 'react';

// Creating a context object
const CollegeContext = createContext();

// Custom hook to use the context
export const useColleges = () => useContext(CollegeContext);

// Provider component that encapsulates children components,
// providing them access to the context
export const CollegeProvider = ({ children }) => {
    // State to store the list of colleges
    const [myColleges, setMyColleges] = useState([]);

    // Function to add a new college to the list
    const addCollege = college => {
        setMyColleges(prevColleges => [...prevColleges, college]);
    };

    // Context provider with value containing both the list of colleges
    // and the function to modify it
    return (
        <CollegeContext.Provider value={{ myColleges, addCollege }}>
            {children}
        </CollegeContext.Provider>
    );
};