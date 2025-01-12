import React, { useEffect, useState } from "react";
import DoubtCard from "../Components/DoubtCard";
import { DoubtContext, useDoubts } from "../contexts/DoubtContext";
import { useVotes } from "../contexts/VotesContext";
import { useParams } from "react-router-dom";
function Forum() {
    const { doubts, loading } = useDoubts();
    const { doubtVotes } = useVotes();
    const { subjectId } = useParams();
    useEffect(() => {
        console.log("doubts:", doubts); // Verify if doubts is still empty
    }, [doubts]); // Run effect whenever doubts is updated

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <DoubtContext subjectId={subjectId}>
            <div className="w-[100%] max-h-screen overflow-y-scroll">
                <div className="flex flex-col justify-start items-center gap-8 pt-[2%] pb-[6%]">
                    {doubts &&
                        doubts.map((doubt, key) => {
                            let Upvoted = false;
                            let DownVoted = false;
                            if (doubtVotes.upvotes.includes(doubt.id)) {
                                Upvoted = true;
                            } else if (
                                doubtVotes.downvotes.includes(doubt.id)
                            ) {
                                DownVoted = true;
                            }
                            return (
                                <DoubtCard
                                    key={key}
                                    user={doubt.user}
                                    doubt={doubt.doubt}
                                    votes={doubt.votes}
                                    id={doubt.id}
                                    showCommentBtn={true}
                                    isupVoted={Upvoted}
                                    isDownVoted={DownVoted}
                                />
                            );
                        })}
                </div>
            </div>
        </DoubtContext>
    );
}

export default Forum;
