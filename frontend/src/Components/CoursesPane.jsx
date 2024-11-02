import React from "react";
import CourseBtn from "./CourseBtn";
import { useNavigate, useParams } from "react-router-dom";
import { Subjects } from "../utils/subjects";

function CoursesPane() {
    const navigate = useNavigate();
    const { subject } = useParams();
    return (
        <div className="flex flex-col flex-grow-0 flex-shrink-0 items-center gap-[2%] border-white/25 px-[1%] py-[2%] border-r border-solid min-w-[300px] max-w-[300px] basis-[25%]">
            <div className="flex flex-col items-center gap-3 w-[100%]">
                <button className="bg-orange-600 px-4 py-3 rounded-lg w-[100%] font-['Poppins'] font-semibold text-sm text-white">
                    My Doubts
                </button>
                <button
                    onClick={() =>
                        navigate(
                            `/forum/${
                                subject != null
                                    ? subject
                                    : "Object Oriented Programming"
                            }/post`
                        )
                    }
                    className="bg-orange-600 px-4 py-3 rounded-lg w-[100%] font-['Poppins'] font-semibold text-sm text-white"
                >
                    Post Doubt
                </button>
            </div>
            <div className="flex flex-col items-center gap-y-[15px] bg-gray-900 px-[5%] py-[9%] rounded-xl">
                <h1 className="text-white text-xl">Your Courses</h1>
                <div className="flex flex-col items-center gap-y-[15px] bg-gray-900">
                    {Subjects.map((sub) => {
                        return (
                            <CourseBtn
                                key={sub.courseId}
                                courseName={sub.title}
                                isCurrentView={
                                    sub.title == subject ? true : false
                                }
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default CoursesPane;
