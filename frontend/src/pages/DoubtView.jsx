import React, { useEffect } from "react";
import DoubtCard from "../Components/DoubtCard";
import Comment from "../Components/Comment";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { useDoubts } from "../contexts/DoubtContext";
import { useVotes } from "../contexts/VotesContext";

function DoubtView() {
    const { doubtId } = useParams();
    const { commentVotes, fetchCommentVotes } = useVotes();
    const { doubts, fetchAllDoubts } = useDoubts();

    const textareaRef = useRef(null);
    const [value, setValue] = useState("");
    const [comments, updateComments] = useState([]);
    const [currDoubt, updateCurrDoubt] = useState(null);
    const { subjectId } = useParams();
    const stud_id = JSON.parse(localStorage.getItem("currentUser")).student_id;

    useEffect(() => {
        async function fetcher() {
            const response = await fetch(
                `http://127.0.0.1:8000/api/doubt/${doubtId}/comments`
            );
            const json = await response.json();
            console.log(json);
            updateComments(json.comments);
        }
        fetcher();
    }, [doubtId, currDoubt]);

    useEffect(() => {
        const doubt = doubts.find((doubt) => doubt.query_id == doubtId);

        if (doubt) {
            updateCurrDoubt(doubt);
            const coms = comments.sort((a, b) =>
                a.upvotes - a.downvotes > b.upvotes - b.downvotes ? 1 : -1
            );
            updateComments(coms);
        }
    }, [comments, doubts]);
    useEffect(() => {
        fetchAllDoubts(subjectId);
        fetchCommentVotes(stud_id);
    }, []);

    const handleComment = async () => {
        const date = new Date();

        const day = date.getDate().toString().padStart(2, "0"); // "10"
        const month = date.toLocaleString("default", { month: "short" }); // "Oct"
        const year = date.getFullYear(); // "2024"
        const hours = date.getHours().toString().padStart(2, "0"); // "11"
        const minutes = date.getMinutes().toString().padStart(2, "0"); // "00"
        // const img_url = new URL("/assets/" + user.img, import.meta.url).href;
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
        const response = await fetch("http://127.0.0.1:8000/api/add-comment", {
            method: "POST",
            body: JSON.stringify({
                query_id: doubtId,
                user_id: stud_id,
                comment: value,
            }),
        });
        const json = response.json();
        console.log(currDoubt);
        updateComments([
            ...comments,
            {
                comment_id: currDoubt.query_id + "0" + comments.length + 1,
                user_id: stud_id,
                upvotes: 0,
                downvotes: 0,
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
                        user_id={currDoubt.student_id}
                        doubt={currDoubt.query}
                        votes={currDoubt.upvotes - currDoubt.downvotes}
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
                        {Array.isArray(commentVotes.upvotes) &&
                            comments.map((comment, key) => {
                                let UpVoted = false;
                                let DownVoted = false;
                                if (
                                    commentVotes.upvotes.includes(
                                        comment.comment_id
                                    )
                                ) {
                                    UpVoted = true;
                                } else if (
                                    commentVotes.downvotes.includes(
                                        comment.comment_id
                                    )
                                ) {
                                    DownVoted = true;
                                }
                                console.log(comment);

                                return (
                                    <Comment
                                        isUpvoted={UpVoted}
                                        isDownvoted={DownVoted}
                                        user_id={comment.user_id}
                                        user_name={comment.user_name}
                                        time={comment.time}
                                        comment={comment.comment}
                                        id={comment.comment_id}
                                        key={key}
                                        votes={
                                            comment.upvotes - comment.downvotes
                                        }
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
