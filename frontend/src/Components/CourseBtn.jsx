import React from "react";
import { useNavigate } from "react-router-dom";

function CourseBtn({ id, courseName, isCurrentView = false }) {
    const navigate = useNavigate();
    const handleCourseClick = (event) => {
        navigate(`/user/forum/${id}`);
    };
    return (
        <button
            onClick={handleCourseClick}
            className={`bg-slate-800 px-4 py-3  ${
                isCurrentView && "border-l-4 border-solid border-orange-500"
            } rounded-lg w-[100%] font-["Poppins"] text-[13px] text-white
            hover:bg-slate-600 duration-200`}
        >
            {courseName}
        </button>
    );
}

export default CourseBtn;
