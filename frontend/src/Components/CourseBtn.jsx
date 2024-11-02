import React from "react";
import { useNavigate } from "react-router-dom";

function CourseBtn({ courseName, isCurrentView = false }) {
    const navigate = useNavigate();
    const handleCourseClick = (event) => {
        navigate(`/forum/${courseName}`);
    };
    return (
        <button
            onClick={handleCourseClick}
            className={`bg-slate-800 px-4 py-3  ${
                isCurrentView && "border-l-4 border-solid border-orange-500"
            } rounded-lg w-[100%] font-["Poppins"] text-[13px] text-white`}
        >
            {courseName}
        </button>
    );
}

export default CourseBtn;
