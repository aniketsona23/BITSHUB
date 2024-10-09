import React, { useState } from "react";

function PostCard({ courseName }) {
    const [doubt,setDoubt ] = useState("");
    const handleCreatePost = ()=>{
      if(doubt){
        alert("Doubt Posted ! Doubt : " + doubt);
        setDoubt("");
      }else{
        alert("Please Enter a doubt");
      }
    }
    return (
        <form className="flex flex-col gap-y-10 bg-slate-900 px-[5%] py-[2%] rounded-xl w-[80%] h-[80%] font-['Poppins']">
            <h1 className="font-bold text-5xl text-white">{courseName}</h1>
            <div className="flex flex-col gap-y-[20px] h-[80%]">
                <div className="flex flex-col justify-center gap-y-[20px] h-[80%]">
                    <label className="text-3xl text-white" htmlFor="doubt-inp">
                        Post your Doubt
                    </label>
                    <textarea
                        value={doubt}
                        onChange={(e)=>{
                          setDoubt(e.target.value);
                        }}
                        type="text"
                        className="border-white/50 bg-slate-900 px-[2%] py-[20px] border border-solid rounded-xl h-[100%] text-2xl text-white outline-none placeholder-gray-700 resize-none row"
                        placeholder="Enter your doubt"
                        id="doubt-inp"
                        name="doubt-inp"
                    />
                </div>
                <button type="button" onClick={handleCreatePost} className='border-white/50 px-[2%] py-[10px] border border-solid rounded-[10px] w-[15%] font-["Poppins"] text-lg text-white'>
                    Post Doubt
                </button>
            </div>
        </form>
    );
}

export default PostCard;
