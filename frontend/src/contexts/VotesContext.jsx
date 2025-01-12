import React, { createContext, useContext, useState, useEffect } from "react";

const VotesContext = createContext();

export const VoteContext = ({ children }) => {
    const [commentVotes, setCommentVotes] = useState({});
    const [doubtVotes, setDoubtVotes] = useState({});
    const [loading, setLoading] = useState(true);
    const studId = JSON.parse(localStorage.getItem("currentUser")).student_id;

    useEffect(() => {
        async function fetcher() {
            try {
                const response = await fetch(
                    `http://127.0.0.1:8000/api/student/votes-data/`,
                    {
                        method: "POST",
                        body: JSON.stringify({
                            stud_id: studId,
                        }),
                    }
                );
                const data = await response.json();
                setCommentVotes({
                    upvotes: data.upvoted_comments,
                    downvotes: data.downvoted_comments,
                });
                setDoubtVotes({
                    upvotes: data.upvoted_doubts,
                    downvotes: data.downvoted_doubts,
                });
                console.log(doubtVotes);
            } catch (error) {
                console.log("Error fetching Doubts :", error);
            } finally {
                setLoading(false);
            }
        }
        fetcher();
    }, []);
    useEffect(() => {}, [doubtVotes]);

    return (
        <VotesContext.Provider value={{ commentVotes, doubtVotes, loading }}>
            {children}
        </VotesContext.Provider>
    );
};

export const useVotes = () => useContext(VotesContext);
