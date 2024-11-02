import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DoubtCard({ doubt, user, votes, id, showCommentBtn = true }) {
    const navigate = useNavigate();
    const { subject } = useParams();
    const [doubtVotes, setDoubtVotes] = useState(votes);

    const openDoubt = () => {
        console.log(subject); // Ensure this outputs the expected subject

        navigate(`/forum/${subject}/${id}`);
    };
    return (
        <div className="flex flex-col gap-6 border-white/25 bg-slate-900 p-[40px] border border-solid rounded-xl w-[80%] max-h-hmax font-['Poppins'] text-white">
            {!showCommentBtn && (
                <button
                    onClick={() => navigate(`/forum/${subject}`)}
                    className=" bg-orange-800 px-3 py-2 rounded-lg min-w-fit max-w-fit font-['Poppins'] font-semibold text-xs text-white"
                >
                    Back
                </button>
            )}
            <header className="flex justify-between  items-center">
                <div className="flex  justify-end items-center gap-[15px] max-w-max">
                    <img
                        src={user.img}
                        className="rounded-[50%] w-[60px] h-[60px]"
                        alt=""
                    />
                    <span className="">{user.username}</span>
                    <span className="border-white/25 px-[40px] py-[15px] border border-solid rounded-full font-['Inter'] text-lg">
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
                        className="bg-orange-600 px-4 py-3 rounded-lg min-w-fit font-['Poppins'] font-semibold text-sm text-white"
                    >
                        Answer
                    </button>
                )}
                <div className="flex min-w-[150px] bg-slate-700 items-center gap-5 p-2 rounded-[10px] justify-between">
                    <button
                        onClick={() => setDoubtVotes(doubtVotes + 1)}
                        className="bg-orange-600 px-2 py-2  flex items-center rounded-lg min-w-fit font-['Poppins'] font-semibold text-lg text-white"
                    >
                        <span className="material-symbols-outlined text-[18px]  ">
                            shift
                        </span>
                    </button>
                    <span className="text-lg">{doubtVotes}</span>
                    <button
                        onClick={() => setDoubtVotes(doubtVotes - 1)}
                        className="bg-orange-600 px-2 py-2  flex items-center rounded-lg min-w-fit font-['Poppins'] font-semibold text-lg text-white"
                    >
                        <span className="material-symbols-outlined text-[18px]  rotate-180">
                            shift
                        </span>
                    </button>
                </div>
            </footer>
        </div>
    );
}

export default DoubtCard;
