import React, { useEffect, useState } from "react";
import { useDoubts } from "../contexts/DoubtContext";
import { useVotes } from "../contexts/VotesContext";
import DoubtCard from "../Components/DoubtCard";

function MyDoubt() {
    const { myDoubts } = useDoubts();
    const { doubtVotes } = useVotes();

    const [userNames, setUserNames] = useState({});
    useEffect(() => {
        const fetchUserNames = async () => {
            const names = {};
            for (let doubt of myDoubts) {
                const name = await getName(doubt.student_id);
                names[doubt.student_id] = name;
            }
            setUserNames(names);
        };

        if (myDoubts) fetchUserNames();
    }, [myDoubts]);

    const getName = async (stu_id) => {
        const response = await fetch("http://127.0.0.1:8000/api/user/", {
            method: "POST",
            body: JSON.stringify({
                student_id: stu_id,
            }),
            headers: {
                "Content-Type": "application/json", // Specify the content type
            },
        });
        const json = await response.json();
        return json.user_name;
    };
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
                        if (doubtVotes.upvotes.includes(doubt.id)) {
                            Upvoted = true;
                        } else if (doubtVotes.downvotes.includes(doubt.id)) {
                            DownVoted = true;
                        }
                        return (
                            <DoubtCard
                                key={key}
                                user_name={userNames[doubt.student_id]}
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
