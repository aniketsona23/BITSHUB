import React, { useState, useEffect } from "react";
import CourseBtn from "./CourseBtn";
import { useNavigate, useParams } from "react-router-dom";

function CoursesPane() {
    const navigate = useNavigate();
    const { subjectId } = useParams();
    const [Subjects, updateSubjects] = useState();
    useEffect(() => {
        async function getSubject() {
            const response = await fetch(
                `http://127.0.0.1:8000/api/student/${localStorage.getItem(
                    "currentUser"
                )}/courses`
            );
            const json = await response.json();
            updateSubjects(json.courses);
        }
        getSubject();
    }, []);
    return (
        <div className="flex flex-col flex-grow-0 flex-shrink-0 items-center gap-[2%] border-white/25 px-[1%] py-[2%] border-r border-solid min-w-[300px] max-w-[300px] basis-[25%]">
            <div className="flex flex-col items-center gap-3 w-[100%]">
                <button
                    onClick={() => navigate(`/user/my`)}
                    className="bg-slate-800 border-2 hover:border-orange-500 duration-200 border-zinc-600 px-4 py-3 rounded-lg w-[100%] font-['Poppins']  text-m text-white"
                >
                    My Doubts
                </button>
                <button
                    onClick={() =>
                        navigate(
                            `/user/forum/${
                                subjectId != null ? subjectId : "1"
                            }/post`
                        )
                    }
                    className="bg-slate-800 border-2 hover:border-orange-500 duration-200 border-zinc-600 px-4 py-3 rounded-lg w-[100%] font-['Poppins']  text-m text-white"
                >
                    Post Doubt
                </button>
            </div>
            <div className="flex flex-col items-center gap-y-[15px] bg-gray-900 px-[5%] py-[9%] rounded-xl">
                <h1 className="text-white text-xl">Your Courses</h1>
                <div className="flex flex-col items-center gap-y-[15px] bg-gray-900">
                    {Subjects &&
                        Subjects.map((sub) => {
                            return (
                                <CourseBtn
                                    key={sub.course_id}
                                    id={sub.course_id}
                                    courseName={sub.course_name}
                                    isCurrentView={
                                        sub.course_id == subjectId
                                            ? true
                                            : false
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
