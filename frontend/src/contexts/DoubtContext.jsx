import React, { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DoubtsContext = createContext();

export const DoubtContext = ({ children }) => {
    const [doubts, setDoubts] = useState([]);
    const [myDoubts, setmyDoubts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchAllDoubts(subjectId) {
        setLoading(true);
        try {
            if (subjectId) {
                const response = await fetch(
                    `http://127.0.0.1:8000/api/course/${subjectId}/doubts/`
                );
                const data = await response.json();
                data;
                setDoubts(data.doubts);
            }
        } catch (error) {
            console.log("Error fetching Doubts :", error);
        } finally {
            setLoading(false);
        }
    }
    async function fetchMyDoubts() {
        try {
            const studId = JSON.parse(
                localStorage.getItem("currentUser")
            ).student_id;

            const response2 = await fetch(
                `http://127.0.0.1:8000/api/student/${studId}/doubts/`
            );
            const data2 = await response2.json();
            setmyDoubts(data2.doubts);
        } catch (error) {
            console.log("Error fetching Doubts :", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <DoubtsContext.Provider
            value={{ doubts, myDoubts, fetchAllDoubts, fetchMyDoubts, loading }}
        >
            {children}
        </DoubtsContext.Provider>
    );
};

export const useDoubts = () => useContext(DoubtsContext);
