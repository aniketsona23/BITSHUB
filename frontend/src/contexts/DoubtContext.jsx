import React, { createContext, useContext,useState, useEffect } from "react";

const DoubtsContext = createContext();

export const DoubtContext = ({ children }) => {
    const [doubts, setDoubts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetcher() {
            try {
                const response = await fetch("/Doubts.json");
                const data = await response.json();
                setDoubts(data);
            } catch (error) {
                console.log("Error fetching Doubts :", error);
            } finally {
                setLoading(false);
            }
        }
        fetcher();
    }, []);
    return (
        <DoubtsContext.Provider value={{ doubts, loading }}>
            {children}
        </DoubtsContext.Provider>
    );
};

export const useDoubts = () => useContext(DoubtsContext);
