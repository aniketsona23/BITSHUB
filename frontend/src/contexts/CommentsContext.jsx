import React, { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CommentsContext = createContext();

export const CommentContext = ({ children }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetcher() {
            try {
                const response = await fetch(
                    `http://127.0.0.1:8000/api/course/${subjectId}/doubts/`
                );
                const response2 = await fetch(
                    `http://127.0.0.1:8000/api/student/${
                        localStorage.getItem("currentUser").student_id
                    }/doubts/`
                );
                const data = await response.json();
                const data2 = await response2.json();
                setDoubts(data);
                setmyDoubts(data2);
            } catch (error) {
                console.log("Error fetching Doubts :", error);
            } finally {
                setLoading(false);
            }
        }
        fetcher();
    }, []);
    return (
        <CommentsContext.Provider value={{ doubts, myDoubts, loading }}>
            {children}
        </CommentsContext.Provider>
    );
};

export const useComments = () => useContext(CommentsContext);
