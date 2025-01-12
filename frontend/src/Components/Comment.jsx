import React, { useState, useEffect } from "react";

function Comment({
    user_name,
    user_id,
    id,
    votes,
    comment,
    time,
    isUpvoted,
    isDownvoted,
}) {
    const [commentVotes, setCommentVotes] = useState(votes);
    const [upVoted, setUpVoted] = useState();
    const [downVoted, setDownVoted] = useState();

    // const img_url = new URL("" + user.img, import.meta.url).href;

    useEffect(() => {
        setUpVoted(isUpvoted);
        setDownVoted(isDownvoted);
    }, [isUpvoted, isDownvoted]);

    const handleVote = async (num) => {
        const response = await fetch(
            "http://127.0.0.1:8000/api/vote-comment/",
            {
                method: "POST",
                body: JSON.stringify({
                    comment_id: id,
                    user_id: user_id,
                    vote: num,
                }),
            }
        );
        const json = await response.json();
        if (response.status == 200) {
            if (num == 1) {
                setDownVoted(false);
                setUpVoted(upVoted ? false : true);
            } else {
                setDownVoted(downVoted ? false : true);
                setUpVoted(false);
            }
            setDoubtVotes(json.netVotes);
        }
    };
    return (
        <div className="flex flex-col gap-5 bg-slate-800 p-8 rounded-xl w-[100%]">
            <header className="flex justify-start items-center gap-5">
                <img
                    src={undefined}
                    alt=""
                    className="rounded-[50%] w-[50px] h-[50px]"
                />
                <span className="font-[12px] text-white">{user_name}</span>
                <span className="font-[12px text-zinc-400">{time} </span>
            </header>
            <p className="font-[12px] text-white">{comment}</p>
            <div className="flex min-w-[150px] bg-slate-700 items-center gap-5 p-2 max-w-max text-white rounded-[10px] justify-between">
                <button
                    onClick={() => handleVote(1)}
                    className="bg-orange-600 px-2 py-2  flex items-center rounded-lg min-w-fit font-['Poppins'] font-semibold text-lg text-white"
                >
                    <span className="material-symbols-outlined text-[18px]  ">
                        shift
                    </span>
                </button>
                <span className="text-lg">{commentVotes}</span>
                <button
                    onClick={() => handleVote(-1)}
                    className="bg-orange-600 px-2 py-2  flex items-center rounded-lg min-w-fit font-['Poppins'] font-semibold text-lg text-white"
                >
                    <span className="material-symbols-outlined text-[18px]  rotate-180">
                        shift
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Comment;
