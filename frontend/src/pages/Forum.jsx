import React, { useEffect, useState } from "react";
import DoubtCard from "../Components/DoubtCard";
import { DoubtContext, useDoubts } from "../contexts/DoubtContext";
import { useVotes } from "../contexts/VotesContext";
import { useParams } from "react-router-dom";
function Forum() {
    const { doubts, fetchAllDoubts, myDoubts, fetchMyDoubts, loading } =
        useDoubts();
    const { doubtVotes, fetchDoubtVotes } = useVotes();
    const { subjectId } = useParams();
    const stud_id = JSON.parse(localStorage.getItem("currentUser")).student_id;
    useEffect(() => {
        fetchAllDoubts(subjectId);
        fetchDoubtVotes(stud_id);
    }, [subjectId]);

    return (
        <div className="w-[100%] max-h-screen overflow-y-scroll">
            <div className="flex flex-col justify-start items-center gap-8 pt-[2%] pb-[6%]">
                {doubts &&
                    Array.isArray(doubtVotes.upvotes) &&
                    doubts.map((doubt, key) => {
                        let Upvoted = false;
                        let DownVoted = false;
                        console.log(doubts);
                        if (doubtVotes.upvotes.includes(doubt.id)) {
                            Upvoted = true;
                        } else if (doubtVotes.downvotes.includes(doubt.id)) {
                            DownVoted = true;
                        }
                        return (
                            <DoubtCard
                                key={key}
                                user_id={doubt.student_id}
                                user_name={doubt.student_name}
                                doubt={doubt.doubt}
                                votes={doubt.upvotes - doubt.downvotes}
                                id={doubt.query_id}
                                showCommentBtn={true}
                                isupVoted={Upvoted}
                                isDownVoted={DownVoted}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

export default Forum;
