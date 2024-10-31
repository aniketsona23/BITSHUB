import React from "react";

function CourseBtn({ courseName }) {
    return (
        <button className='bg-slate-800 px-4 py-3 rounded-lg w-[100%] font-["Poppins"] text-[13px] text-white'>
            {courseName}
        </button>
    );
}

export default CourseBtn;
