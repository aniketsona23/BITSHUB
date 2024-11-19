import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { adddoubt } from "../utils/doubts";
import avatar from "../../public/assets/avatar.jpg";

import { useNavigate, useParams } from "react-router-dom";

function PostDoubt() {
    const textareaRef = useRef(null);
    const navigate = useNavigate();
    const [doubtValue, setDoubtValue] = useState("");
    const [doubtTitle, setDoubtTitle] = useState("");
    const { subjectId } = useParams();
    const [subject, setSubject] = useState("");
    useEffect(() => {
        async function fetcher() {
            const response = await fetch("/Subjects.json");
            const json = await response.json();
            for (let sub of json) {
                if (sub.courseId.toString() == subjectId) {
                    setSubject(sub.title);
                    break;
                }
            }
        }
        fetcher();
    }, []);

    const handlePostDoubt = (event) => {
        const doubt = { title: doubtTitle, doubt: doubtValue };
        const user = {
            username: "Aniket Sonawane",
            img: "avatar.jpg",
            bitsid: "2022B3A70031G",
        };
        adddoubt(doubt, user, subjectId);
        navigate(`/user/forum/${subjectId}`);
    };
    const handleInput = (event) => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto"; // Reset height
        textarea.style.height = `${textarea.scrollHeight}px`; // Set to scroll height
        setDoubtValue(event.target.value);
    };
    return (
        <div className="flex justify-center w-[100%] py-[3%]">
            <div className="flex flex-col gap-10 border border-solid border-slate-500 p-[3%] rounded-xl   w-[70%] min-h-full text-white">
                <h1 className="font-bold text-[50px] ">{subject}</h1>
                <p className="font-bold text-[25px]">Post Doubt</p>
                <input
                    type="text"
                    required
                    value={doubtTitle}
                    onChange={(e) => setDoubtTitle(e.target.value)}
                    placeholder="Enter Title..."
                    className="outline-none border box-border border-slate-300 border-solid bg-slate-700 px-5 py-[1%]  rounded-lg w-[85%] text-xl focus:border-2 focus:border-white  focus:border-solid"
                />
                <div className="flex flex-col gap-5">
                    <textarea
                        ref={textareaRef}
                        value={doubtValue}
                        onChange={handleInput}
                        placeholder="Enter Doubt..."
                        type="text"
                        className="outline-none border border-slate-300 border-solid  bg-slate-700 px-5 py-3  rounded-lg w-[85%] min-h-[200px] text-white text-xl overflow-hidden resize-none
                    focus:border-2 focus:border-white  focus:border-solid"
                    />
                    <button
                        onClick={handlePostDoubt}
                        className="bg-orange-600 px-3 py-3 rounded-lg max-w-max h-max-[30px] font-['Poppins'] font-bold text-m text-white"
                    >
                        Post Doubt
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PostDoubt;
