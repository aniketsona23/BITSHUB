import React from "react";
import CourseCard from "../Components/CourseCard";
import oops from "../assets/OOPs.webp";
import lcs from "../assets/lcs.jpg";
import disco from "../assets/disco.webp";
import dd from "../assets/dd.webp";
import ie from "../assets/internation_economics.webp";

function Home() {
    return (
        <main className="flex flex-wrap justify-center items-center gap-[50px] px-[10%] py-[5%]">
            <CourseCard
                image={oops}
                courseName={"Object Oriented Programming"}
            />
            <CourseCard image={ie} courseName={"International Economics"} />
            <CourseCard image={dd} courseName={"Digital Design"} />
            <CourseCard image={disco} courseName={"Discrete Structures"} />
            <CourseCard image={lcs} courseName={"Logic in Computer Science"} />
        </main>
    );
}

export default Home;
