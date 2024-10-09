import React from "react";

function CourseCard({ courseName }) {
    return (
        <div className="bg-white rounded-xl w-[400px] h-[300px] font-['Poppins'] font-medium cursor-pointer overflow-hidden">
            <section className="bg-slate-700 w-[100%] h-[80%]"></section>
            <footer className="flex justify-center items-center h-[20%]">
                <p className="text-xl"> {courseName}</p>
            </footer>
        </div>
    );
}

export default CourseCard;
