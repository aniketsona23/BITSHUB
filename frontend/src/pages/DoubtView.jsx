import React, { useEffect } from "react";
import DoubtCard from "../Components/DoubtCard";
import Comment from "../Components/Comment";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { Doubts, addcomment } from "../utils/doubts";
import avatar from "../assets/avatar.jpg";

function DoubtView() {
    const { doubtId } = useParams();
    const textareaRef = useRef(null);

    const [value, setValue] = useState("");
    const [comments, updateComments] = useState([]);
    const [currDoubt, updateCurrDoubt] = useState(null);

    useEffect(() => {
        const doubt = Doubts.find((doubt) => doubt.id == doubtId);
        if (doubt) {
            updateCurrDoubt(doubt);
            updateComments(doubt.comments);
        }
    }, [doubtId]);

    const handleComment = () => {
        const date = new Date();

        const day = date.getDate().toString().padStart(2, "0"); // "10"
        const month = date.toLocaleString("default", { month: "short" }); // "Oct"
        const year = date.getFullYear(); // "2024"
        const hours = date.getHours().toString().padStart(2, "0"); // "11"
        const minutes = date.getMinutes().toString().padStart(2, "0"); // "00"

        const formattedDate = `${day} ${month}, ${year} ${hours}:${minutes}`;

        // addcomment(doubtId, {
        //     user: {
        //         username: "Nigga is nigga",
        //         img: avatar,
        //         bitsid: "2022B3A60000G",
        //     },
        //     comment: value,
        //     time: formattedDate,
        // });
        updateComments([
            ...comments,
            {
                commentId: currDoubt.id + "0" + comments.length + 1,
                user: {
                    username: "Random",
                    img: avatar,
                    bitsid: "2022B3A70000G",
                },
                comment: value,
                time: formattedDate,
            },
        ]);

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
                        id={doubtId}
                        user={currDoubt.user}
                        doubt={currDoubt.doubt}
                        votes={currDoubt.votes}
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
                                    key={comment.commentId}
                                    votes={comment.votes}
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
