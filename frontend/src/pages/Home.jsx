import React, { useEffect, useState } from "react";
import CourseCard from "../Components/CourseCard";

import { subjects } from "../utils/subjects";

function Home() {
    const studId = localStorage.getItem("currentUser");
    const [Subjects, updateSubjects] = useState();
    useEffect(() => {
        async function getSubject() {
            const response = await fetch(
                `http://127.0.0.1:8000/api/student/${studId}/courses`
            );
            const json = await response.json();
            console.log(json);
            updateSubjects(json.courses);
        }
        getSubject();
    }, []);
    return (
        <main className="flex flex-wrap justify-center items-center gap-[50px] px-[5%] py-[5%]">
            {Subjects &&
                Subjects.map((sub) => {
                    return (
                        <CourseCard
                            image={sub.image}
                            key={sub.facId}
                            courseName={sub.coures_Name}
                            courseId={sub.course_ID}
                        />
                    );
                })}
        </main>
    );
}

export default Home;
