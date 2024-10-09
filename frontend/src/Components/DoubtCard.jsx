import React from "react";

function DoubtCard({ doubt, user }) {
    return (
        <div className="flex flex-col gap-6 border-white/25 bg-slate-900 p-[40px] border border-solid rounded-xl w-[80%] max-h-hmax font-['Poppins'] text-white">
            <header className="flex justify-between items-center">
                <div className="flex items-center gap-[15px] max-w-max">
                    <img
                        src={user.img}
                        className="rounded-[50%] w-[60px] h-[60px]"
                        alt=""
                    />
                    <span className="">{user.username}</span>
                </div>
                <span className="border-white/25 px-[40px] py-[15px] border border-solid rounded-full font-['Inter'] text-lg">{user.bitsid}</span>
            </header>
            <h1 className="text-4xl">{doubt.title}</h1>
            <main className="py-[20px]  overflow-hidden overflow-ellipses whitespace-nowrap max-h-[10rem]">
                <p className="text-2xl text-gray-400 text-wrap break-word">{doubt.doubt}</p>
            </main>
            <footer className="flex gap-[15px]">
                <button className="bg-orange-600 px-4 py-3 rounded-lg w-[10%] font-['Poppins'] font-semibold text-lg text-white">
                    Reply
                </button>
                <button className="bg-orange-600 px-4 py-3 rounded-lg w-[10%] font-['Poppins'] font-semibold text-lg text-white">
                    ++
                </button>
            </footer>
        </div>
    );
}

export default DoubtCard;
