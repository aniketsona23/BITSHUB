import React, { useEffect, useState } from "react";
import DoubtCard from "../Components/DoubtCard";
import { Doubts } from "../utils/doubts";
function Forum() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetching() {
            const response = await fetch("/Users.json");
            const json = await response.json();
            setUsers(json);
        }
        fetching();
    }, []);
    return (
        <div className="w-[100%] max-h-screen overflow-y-scroll">
            <div className="flex flex-col justify-start items-center gap-8 pt-[2%] pb-[6%]">
                {/* <PostCard  courseName={"Object Oriented Programming"}/> */}
                {Doubts.map((doubt) => {
                    let Upvoted = false;
                    let DownVoted = false;
                    for (let user of users) {
                        if (user.upvotes.includes(doubt.id)) {
                            Upvoted = true;
                            break;
                        }
                        if (user.downvotes.includes(doubt.id)) {
                            DownVoted = true;
                            break;
                        }
                    }
                    return (
                        <DoubtCard
                            key={doubt.id}
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
    );
}

export default Forum;
