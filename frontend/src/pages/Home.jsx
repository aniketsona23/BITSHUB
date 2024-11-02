import React from "react";
import CourseCard from "../Components/CourseCard";

import { Subjects } from "../utils/subjects";

function Home() {
    return (
        <main className="flex flex-wrap justify-center items-center gap-[50px] px-[5%] py-[5%]">
            {Subjects.map((sub) => {
                return (
                    <CourseCard
                        image={sub.image}
                        key={sub.facId}
                        courseName={sub.title}
                    />
                );
            })}
        </main>
    );
}

export default Home;
