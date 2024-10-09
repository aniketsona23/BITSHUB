import React from "react";
import CourseCard from "../Components/CourseCard";

function Home() {
    return (
        <main className="flex flex-wrap justify-center items-center gap-[50px] px-[10%] py-[5%] h-[100%]">
            <CourseCard courseName={"Object Oriented Programming"} />
            <CourseCard courseName={"International Economics"} />
            <CourseCard courseName={"Digital Design"} />
            <CourseCard courseName={"Discrete Structures"} />
            <CourseCard courseName={"Logic in Computer Science"} />
        </main>
    );
}

export default Home;
