import React, { useEffect, useState } from "react";
import CourseCard from "../Components/CourseCard";

function Home() {
    const studId = JSON.parse(localStorage.getItem("currentUser")).student_id;
    const [Subjects, updateSubjects] = useState();
    useEffect(() => {
        async function getSubject() {
            const response = await fetch(
                `http://127.0.0.1:8000/api/student/${studId}/courses`
            );
            const json = await response.json();
            updateSubjects(json.courses);
        }
        getSubject();
    }, []);
    return (
        <main className="flex flex-wrap justify-center items-center gap-[50px] px-[5%] py-[5%]">
            {Subjects &&
                Subjects.map((sub, key) => {
                    return (
                        <CourseCard
                            image={sub.image}
                            key={key}
                            courseName={sub.course_name}
                            courseId={sub.course_id}
                        />
                    );
                })}
        </main>
    );
}

export default Home;
