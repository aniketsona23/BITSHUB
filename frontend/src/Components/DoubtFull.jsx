import React from "react";
import DoubtCard from "./DoubtCard";
import avatar from "../assets/avatar.jpg";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";

function DoubtFull() {
    const { id } = useParams();
    const [value, setValue] = useState("");
    const textareaRef = useRef(null);

    const handleInput = (event) => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto"; // Reset height
        console.log(value);
        textarea.style.height = `${textarea.scrollHeight}px`; // Set to scroll height
        setValue(event.target.value);
    };
    return (
        <div className="flex flex-col items-center gap-10 py-10 h-full overflow-y-scroll">
            <DoubtCard
                id={id}
                user={{
                    username: "Aniket Sonawane",
                    bitsid: "2022B3A70031G",
                    img: avatar,
                }}
                doubt={{
                    doubt: "Lorem, ipsum dolor sitssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss amet consectetur adipisicing elit. Reprehenderit, sapiente!",
                    title: "Aniket  Nigger",
                }}
            />
            <div className="flex items-start gap-5 w-[80%]">
                <textarea
                    ref={textareaRef}
                    value={value}
                    onChange={handleInput}
                    type="text"
                    className="border-2 border-white bg-slate-700 p-5 border-solid rounded-lg w-[90%] h-[10px] text-white overflow-hidden"
                />
                <button className="bg-orange-600 px-4 py-3 rounded-lg w-[10%] h-max-[30px] font-['Poppins'] font-semibold text-sm text-white">
                    {" "}
                    Comment
                </button>
            </div>
            <div className="flex flex-col items-center gap-5 w-[80%]">
                <Comment
                    user={{
                        username: "Aniket Sonawane",
                        img: avatar,
                        bitsid: "2022B3A70031G",
                    }}
                    time={"26 Nov,2024"}
                    comment={{
                        msg: "Bravo - best wishes to the kid.\n\nPS. Can very much relate with this.. and it worked for me too.",
                    }}
                />
                <Comment
                    user={{
                        username: "Aniket Sonawane",
                        bitsid: "2022B3A70031G",
                        img: avatar,
                    }}
                    time={"26 Nov,2024"}
                    comment={{
                        msg: "Bravo - best wishes to the kid.\n\nPS. Can very much relate with this.. and it worked for me too.",
                    }}
                />
                <Comment
                    user={{
                        username: "Aniket Sonawane",
                        bitsid: "2022B3A70031G",
                        img: avatar,
                    }}
                    time={"26 Nov,2024"}
                    comment={{
                        msg: "Bravo - best wishes to the kid.\n\nPS. Can very much relate with this.. and it worked for me too.",
                    }}
                />
                <Comment
                    user={{
                        username: "Aniket Sonawane",
                        bitsid: "2022B3A70031G",
                        img: avatar,
                    }}
                    time={"26 Nov,2024"}
                    comment={{
                        msg: "Bravo - best wishes to the kid.\n\nPS. Can very much relate with this.. and it wa\ns\nf\na\nfasdfbjsdfjaksdfjasdfgajsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdhf\nasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbasbsb\ba\\bborked for me too.",
                    }}
                />
            </div>
        </div>
    );
}

export default DoubtFull;
