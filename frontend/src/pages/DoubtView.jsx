import React, { useEffect } from "react";
import DoubtCard from "../Components/DoubtCard";
import avatar from "../assets/avatar.jpg";
import Comment from "../Components/Comment";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { Doubts, addcomment } from "../utils/doubts";

function DoubtView() {
    const { id } = useParams();
    const textareaRef = useRef(null);

    const [value, setValue] = useState("");
    const [comments, updateComments] = useState([]);
    const [currDoubt, updateCurrDoubt] = useState(null);

    useEffect(() => {
        const doubt = Doubts.find((doubt) => doubt.id == id);
        if (doubt) {
            updateCurrDoubt(doubt);
            updateComments(doubt.comments);
        }
    }, [id]);

    const handleComment = () => {
        const date = new Date();
        addcomment(id, {
            user: "CurrentUserr",
            time: `${date.getDate} ${date.getMonth}, ${
                date.getFullYear
            } ${date.getTime()}`,
        });

        setValue("");
    };
    const handleInput = (event) => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto"; // Reset height
        textarea.style.height = `${textarea.scrollHeight}px`; // Set to scroll height
        setValue(event.target.value);
    };

    return (
        currDoubt && (
            <div className="w-[100%] max-h-screen overflow-y-scroll">
                <div className="flex flex-col items-center gap-10 py-8 max-h-screen">
                    <DoubtCard
                        id={id}
                        user={currDoubt.user}
                        doubt={currDoubt.doubt}
                        showCommentBtn={false}
                    />
                    <div className="flex justify-center items-start gap-5 w-[80%] resize-none">
                        <textarea
                            ref={textareaRef}
                            value={value}
                            onChange={handleInput}
                            type="text"
                            className="border-2 border-white bg-slate-700 p-3 border-solid rounded-lg w-[85%] h-[50px] text-white overflow-hidden resize-none"
                        />
                        <button
                            onClick={handleComment}
                            className="bg-orange-600 px-4 py-3 rounded-lg w-[10%] h-max-[30px] font-['Poppins'] font-semibold text-sm text-white"
                        >
                            Comment
                        </button>
                    </div>
                    <div className="flex flex-col items-center gap-5 pb-20 w-[80%]">
                        {comments.map((comment) => {
                            return (
                                <Comment
                                    user={comment.user}
                                    time={comment.time}
                                    comment={comment.comment}
                                    key={comment.id}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    );
}

export default DoubtView;
