import React, { useEffect, useState } from "react";
import DoubtCard from "../Components/DoubtCard";
import { Doubts } from "../utils/doubts";
import { useParams } from "react-router-dom";
function Forum() {
    const { subjectId } = useParams("");
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
                {users.length > 0 &&
                    Doubts.map((doubt) => {
                        if (doubt.courseId == subjectId) {
                            let Upvoted = false;
                            let DownVoted = false;
                            let curruser;
                            for (let user of users) {
                                if (
                                    user.username ==
                                    localStorage.getItem("currentUser")
                                ) {
                                    curruser = user;
                                    break;
                                }
                            }
                            if (curruser.upvotes.includes(doubt.id)) {
                                console.log(doubt.id, curruser.upvotes);
                                Upvoted = true;
                            } else if (curruser.downvotes.includes(doubt.id)) {
                                DownVoted = true;
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
                        }
                    })}
            </div>
        </div>
    );
}

export default Forum;
