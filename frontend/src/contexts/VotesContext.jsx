import React, { createContext, useContext, useState, useEffect } from "react";

const VotesContext = createContext();

export const VoteContext = ({ children }) => {
    const [commentVotes, setCommentVotes] = useState({});
    const [doubtVotes, setDoubtVotes] = useState({});
    const [loading, setLoading] = useState(true);

    async function fetchDoubtVotes(studId) {
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
            setDoubtVotes({
                upvotes: data.upvoted_doubts,
                downvotes: data.downvoted_doubts,
            });
        } catch (error) {
            console.log("Error fetching Votes :", error);
        } finally {
            setLoading(false);
        }
    }
    async function fetchCommentVotes(studId) {
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
        } catch (error) {
            console.log("Error fetching Votes :", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <VotesContext.Provider
            value={{
                commentVotes,
                doubtVotes,
                fetchCommentVotes,
                fetchDoubtVotes,
                loading,
            }}
        >
            {children}
        </VotesContext.Provider>
    );
};

export const useVotes = () => useContext(VotesContext);
