import React, { useEffect, useState } from "react";
import { useDoubts } from "../contexts/DoubtContext";
import { useVotes } from "../contexts/VotesContext";
import DoubtCard from "../Components/DoubtCard";

function MyDoubt() {
    const { myDoubts } = useDoubts();
    const { doubtVotes } = useVotes();
    const name = JSON.parse(localStorage.getItem("currentUser")).student_name;
    return (
        <div className="w-[100%] max-h-screen overflow-y-scroll">
            <div className="flex flex-col justify-start items-center gap-8 pt-[2%] pb-[6%]">
                {myDoubts &&
                    doubtVotes &&
                    Array.isArray(doubtVotes.upvotes) &&
                    Array.isArray(doubtVotes.downvotes) &&
                    myDoubts.map((doubt, key) => {
                        let Upvoted = false;
                        let DownVoted = false;
                        if (doubtVotes.upvotes.includes(doubt.query_id)) {
                            Upvoted = true;
                        } else if (
                            doubtVotes.downvotes.includes(doubt.query_id)
                        ) {
                            DownVoted = true;
                        }
                        return (
                            <DoubtCard
                                course_id={doubt.course_id}
                                key={key}
                                user_name={name}
                                user_id={doubt.student_id}
                                doubt={doubt.query}
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

export default MyDoubt;
