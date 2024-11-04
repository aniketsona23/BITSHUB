import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DoubtCard({
    doubt,
    isupVoted,
    isDownVoted,
    user,
    votes,
    id,
    showCommentBtn = true,
}) {
    const [upVoted, setUpVoted] = useState();
    const [downVoted, setDownVoted] = useState();
    const { subjectId } = useParams();
    const [doubtVotes, setDoubtVotes] = useState(votes);
    const navigate = useNavigate();

    useEffect(() => {
        setUpVoted(isupVoted);
        setDownVoted(isDownVoted);
    }, [isupVoted, isDownVoted]);

    const handleUpVote = () => {
        if (downVoted) {
            setDownVoted(false);
            setUpVoted(true);
            setDoubtVotes(doubtVotes + 2);

            return;
        }
        if (upVoted) {
            setUpVoted(false);
            setDoubtVotes(doubtVotes - 1);
            return;
        }
        setUpVoted(true);
        setDoubtVotes(doubtVotes + 1);
    };
    const handleDownVote = () => {
        if (upVoted) {
            setDownVoted(true);
            setUpVoted(false);
            setDoubtVotes(doubtVotes - 2);
            return;
        }
        if (downVoted) {
            setDownVoted(false);
            setDoubtVotes(doubtVotes + 1);
            return;
        }
        setDownVoted(true);
        setDoubtVotes(doubtVotes - 1);
    };
    const openDoubt = () => {
        navigate(`/user/forum/${subjectId}/${id}`);
    };
    const img_url = new URL("/assets/" + user.img, import.meta.url).href;
    console.log(img_url);
    return (
        <div className="flex flex-col gap-4 border-white/25 bg-slate-900 p-[40px] border border-solid rounded-xl w-[80%] max-h-hmax font-['Poppins'] text-white">
            {!showCommentBtn && (
                <button
                    onClick={() => navigate(`/user/forum/${subjectId}`)}
                    className=" bg-orange-800 px-3 py-2 rounded-lg min-w-fit max-w-fit font-['Poppins'] font-semibold text-xs text-white"
                >
                    Back
                </button>
            )}
            <header className="flex justify-between  items-center">
                <div className="flex  justify-end items-center gap-[15px] max-w-max">
                    <img
                        src={img_url}
                        className="rounded-[50%] w-[50px] h-[50px]"
                        alt=""
                    />
                    <span className="text-lg">{user.username}</span>
                    <span className="border-white/25 px-5 py-3 border border-solid rounded-full font-['Inter'] ">
                        {user.bitsid}
                    </span>
                </div>
            </header>
            <h1 className="text-2xl">{doubt.title}</h1>
            <main className="py-[20px]  overflow-hidden overflow-ellipses whitespace-nowrap max-h-[10rem]">
                <p className="text-lg text-gray-400 text-wrap break-word">
                    {doubt.doubt}
                </p>
            </main>
            <footer className="flex items-center gap-[15px]">
                {showCommentBtn && (
                    <button
                        onClick={openDoubt}
                        className="bg-slate-800 hover:bg-slate-600 px-4 py-3 rounded-lg min-w-fit font-['Poppins'] border-2 border-slate-500 text-sm text-white  hover:border-orange-500 hover:border-2 duration-200"
                    >
                        Answer
                    </button>
                )}
                <div className="flex min-w-[150px] bg-slate-700 items-center gap-5 p-2 rounded-[10px] justify-between">
                    <button
                        onClick={handleUpVote}
                        className={`px-2 py-2 flex items-center rounded-lg min-w-fit font-['Poppins'] font-semibold text-lg text-white ${
                            !upVoted ? "bg-gray-500 " : "bg-orange-600"
                        }`}
                    >
                        <span
                            className={`material-symbols-outlined text-[18px] `}
                        >
                            shift
                        </span>
                    </button>
                    <span className="text-lg">{doubtVotes}</span>
                    <button
                        onClick={handleDownVote}
                        className={` px-2 py-2  flex items-center rounded-lg min-w-fit font-['Poppins'] font-semibold text-lg text-white ${
                            !downVoted ? "bg-gray-500 " : "bg-orange-600"
                        }`}
                    >
                        <span
                            className={`material-symbols-outlined text-[18px]  rotate-180 $`}
                        >
                            shift
                        </span>
                    </button>
                </div>
            </footer>
        </div>
    );
}

export default DoubtCard;
