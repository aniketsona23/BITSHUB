import React from "react";

function Comment({ user, comment, time }) {
    return (
        <div className="flex flex-col gap-5 bg-slate-800 p-8 rounded-xl w-[100%]">
            <header className="flex justify-start items-center gap-5">
                <img
                    src={user.img}
                    alt=""
                    className="rounded-[50%] w-[50px] h-[50px]"
                />
                <span className="font-[12px] text-white">{user.username}</span>
                <span className="font-[12px text-zinc-400">{time} </span>
            </header>
            <p className="font-[12px] text-white">{comment}</p>
        </div>
    );
}

export default Comment;
