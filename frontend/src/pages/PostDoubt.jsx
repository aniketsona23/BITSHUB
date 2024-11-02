import React from "react";
import { useRef, useState } from "react";
import { adddoubt } from "../utils/doubts";
import avatar from "../assets/avatar.jpg";
import { useNavigate, useParams } from "react-router-dom";

function PostDoubt() {
    const textareaRef = useRef(null);
    const navigate = useNavigate();
    const [doubtValue, setDoubtValue] = useState("");
    const [doubtTitle, setDoubtTitle] = useState("");
    const { subject } = useParams();

    const handlePostDoubt = (event) => {
        const doubt = { title: doubtTitle, doubt: doubtValue };
        const user = {
            username: "DefaultUser",
            img: avatar,
            bitsid: "2022B3A60000G",
        };
        adddoubt(doubt, user);
        navigate(`/forum/${subject}`);
    };
    const handleInput = (event) => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto"; // Reset height
        textarea.style.height = `${textarea.scrollHeight}px`; // Set to scroll height
        setDoubtValue(event.target.value);
    };
    return (
        <div className="flex flex-col gap-10 px-[5%] py-[3%] w-[100%] text-white">
            <input
                type="text"
                value={doubtTitle}
                onChange={(e) => setDoubtTitle(e.target.value)}
                placeholder="Enter Title..."
                className="border-5 bg-slate-700 px-5 py-[1%] border-red-500 border-solid rounded-lg w-[85%] text-2xl"
            />
            <div className="flex flex-col gap-5">
                <textarea
                    ref={textareaRef}
                    value={doubtValue}
                    onChange={handleInput}
                    placeholder="Enter Doubt..."
                    type="text"
                    className="border-2 border-white bg-slate-700 px-5 py-3 border-solid rounded-lg w-[85%] h-[50px] text-white text-xl overflow-hidden resize-none"
                />
                <button
                    onClick={handlePostDoubt}
                    className="bg-orange-600 px-4 py-3 rounded-lg w-[10%] h-max-[30px] font-['Poppins'] font-semibold text-sm text-white"
                >
                    Post Doubt
                </button>
            </div>
        </div>
    );
}

export default PostDoubt;
