import React, { useEffect,useState } from "react";

function Comment({ user, votes, comment, time }) {
    const [commentVotes, setCommentVotes] = useState(votes);
        const img_url = new URL("" + user.img, import.meta.url).href;
    const [upVoted, setUpVoted] = useState();
    const [downVoted, setDownVoted] = useState();

    useEffect(() => {
        setUpVoted(isupVoted);
        setDownVoted(isDownVoted);
    }, [isupVoted, isDownVoted]);

    const handleUpVote = () => {
        if (downVoted) {
            setDownVoted(false);
            setUpVoted(true);
            setCommentVotes(commentVotes + 2);

            return;
        }
        if (upVoted) {
            setUpVoted(false);
            setCommentVotes(commentVotes - 1);
            return;
        }
        setUpVoted(true);
        setCommentVotes(commentVotes + 1);
    };
    const handleDownVote = () => {
        if (upVoted) {
            setDownVoted(true);
            setUpVoted(false);
            setCommentVotes(commentVotes - 2);
            return;
        }
        if (downVoted) {
            setDownVoted(false);
            setCommentVotes(commentVotes + 1);
            return;
        }
        setDownVoted(true);
        setCommentVotes(commentVotes - 1);
    };
    return (
        <div className="flex flex-col gap-5 bg-slate-800 p-8 rounded-xl w-[100%]">
            <header className="flex justify-start items-center gap-5">
                <img
                    src={img_url}
                    alt=""
                    className="rounded-[50%] w-[50px] h-[50px]"
                />
                <span className="font-[12px] text-white">{user.username}</span>
                <span className="font-[12px text-zinc-400">{time} </span>
            </header>
            <p className="font-[12px] text-white">{comment}</p>
            <div className="flex min-w-[150px] bg-slate-700 items-center gap-5 p-2 max-w-max text-white rounded-[10px] justify-between">
                <button
                        onClick={handleUpVote}
                        className={`px-2 py-2 flex items-center rounded-lg min-w-fit font-['Poppins'] font-semibold text-lg text-white ${
                            !upVoted ? "bg-gray-500 " : "bg-orange-600"
                        }`}
                    >
                    <span className="material-symbols-outlined text-[18px]  ">
                        shift
                    </span>
                </button>
                <span className="text-lg">{commentVotes}</span>
               <button
                        onClick={handleDownVote}
                        className={` px-2 py-2  flex items-center rounded-lg min-w-fit font-['Poppins'] font-semibold text-lg text-white ${
                            !downVoted ? "bg-gray-500 " : "bg-orange-600"
                        }`}
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
