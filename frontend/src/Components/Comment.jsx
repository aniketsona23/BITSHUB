import React, { useState } from "react";

function Comment({ user, votes, comment, time }) {
    const [commentVotes, setCommentVotes] = useState(votes);
    return (
        <div className="flex flex-col gap-5 bg-slate-800 p-8 rounded-xl w-[100%]">
            <header className="flex justify-start items-center gap-5">
                <img
                    src={user.img}
                    alt=""
                    className="rounded-[50%] w-[50px] h-[50px]"
                />
                <span className="font-[12px] text-white">{user.username}</span>
                <span className="font-[12px text-zinc-400">{time} </span>
            </header>
            <p className="font-[12px] text-white">{comment}</p>
            <div className="flex min-w-[150px] bg-slate-700 items-center gap-5 p-2 max-w-max text-white rounded-[10px] justify-between">
                <button
                    onClick={() => setCommentVotes(commentVotes + 1)}
                    className="bg-orange-600 px-2 py-2  flex items-center rounded-lg min-w-fit font-['Poppins'] font-semibold text-lg text-white"
                >
                    <span className="material-symbols-outlined text-[18px]  ">
                        shift
                    </span>
                </button>
                <span className="text-lg">{commentVotes}</span>
                <button
                    onClick={() => setCommentVotes(commentVotes - 1)}
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
