import React from "react";
import DoubtCard from "./DoubtCard";
import avatar from "../assets/avatar.jpg";
import Comment from "./Comment";
import { useParams } from "react-router-dom";

function DoubtFull() {
    const { id } = useParams();
    return (
        <div className="flex flex-col items-center gap-10 py-10 h-full overflow-y-scroll">
            <DoubtCard
                id={id}
                user={{
                    username: "Aniket Sonawane",
                    bitsid: "2022B3A70031G",
                    img: avatar,
                }}
                doubt={{
                    doubt: "Lorem, ipsum dolor sitssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss amet consectetur adipisicing elit. Reprehenderit, sapiente!",
                    title: "Aniket  Nigger",
                }}
            />
            <div className="flex flex-col items-center gap-5 w-[80%]">
                <Comment
                    user={{
                        username: "Aniket Sonawane",
                        img: avatar,
                        bitsid: "2022B3A70031G",
                    }}
                    time={"26 Nov,2024"}
                    comment={{
                        msg: "Bravo - best wishes to the kid.\n\nPS. Can very much relate with this.. and it worked for me too.",
                    }}
                />
                <Comment
                    user={{
                        username: "Aniket Sonawane",
                        bitsid: "2022B3A70031G",
                        img: avatar,
                    }}
                    time={"26 Nov,2024"}
                    comment={{
                        msg: "Bravo - best wishes to the kid.\n\nPS. Can very much relate with this.. and it worked for me too.",
                    }}
                />
                <Comment
                    user={{
                        username: "Aniket Sonawane",
                        bitsid: "2022B3A70031G",
                        img: avatar,
                    }}
                    time={"26 Nov,2024"}
                    comment={{
                        msg: "Bravo - best wishes to the kid.\n\nPS. Can very much relate with this.. and it worked for me too.",
                    }}
                />
                <Comment
                    user={{
                        username: "Aniket Sonawane",
                        bitsid: "2022B3A70031G",
                        img: avatar,
                    }}
                    time={"26 Nov,2024"}
                    comment={{
                        msg: "Bravo - best wishes to the kid.\n\nPS. Can very much relate with this.. and it wa\ns\nf\na\nfasdfbjsdfjaksdfjasdfgajsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdhf\nasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbasbsb\ba\\bborked for me too.",
                    }}
                />
            </div>
        </div>
    );
}

export default DoubtFull;
