import React from "react";
import DoubtCard from "../Components/DoubtCard";
import { Doubts } from "../utils/doubts";
function Forum() {
    return (
        <div className="w-[100%] max-h-screen overflow-y-scroll">
            <div className="flex flex-col justify-start items-center gap-8 pt-[2%] pb-[6%]">
                {/* <PostCard  courseName={"Object Oriented Programming"}/> */}
                {Doubts.map((doubt) => {
                    return (
                        <DoubtCard
                            key={doubt.id}
                            user={doubt.user}
                            doubt={doubt.doubt}
                            votes={doubt.votes}
                            id={doubt.id}
                            showCommentBtn={true}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Forum;
