import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

function Login() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("currentUser")) {
            navigate("/user/");
            return;
        }
        async function fetching() {
            const response = await fetch("/Users.json");
            const json = await response.json();
            setUsers(json);
        }
        fetching();
    }, []);

    const [userName, setUserName] = useState("");
    const [passw, setPassw] = useState("");
    const handleLogin = () => {
        console.log(users);
        for (let user of users) {
            if (user.username == userName && passw == user.passw) {
                navigate("/user/");
                localStorage.setItem("currentUser", user.username);
                return;
            }
        }
        alert("Wrong credentials !");
    };

    return (
        <div className="bg-slate-700 h-[100vh]">
            <Navbar />

            <section className="flex items-center h-[93%] w-[100%] flex-col py-[10%] ">
                <h1 className="text-6xl text-white font-[Montserrat] font-bold">
                    Welcome to BITSHUB
                </h1>
                <div className="w-[40%] h-[93%] flex flex-col gap-5 items-center py-[5%] border border-white rounded-3xl mt-10">
                    <div className=" flex gap-5 items-center justify-between w-[60%]">
                        <label
                            htmlFor="username"
                            className="text-3xl text-white"
                        >
                            Username
                        </label>
                        <input
                            placeholder="Enter BITS email id..."
                            required
                            name="username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            type="email"
                            className="border-2 border-solid border-slate-400  outline-none text-lg px-4 py-2 rounded-xl text-white bg-slate-600 focus:border-2 focus:border-solid focus:border-white "
                        />
                    </div>
                    <div className=" flex gap-5 items-center justify-between  text-3xl text-white w-[60%]">
                        <label htmlFor="password">Password</label>
                        <input
                            placeholder="Enter password ..."
                            name="password"
                            value={passw}
                            onChange={(e) => setPassw(e.target.value)}
                            type="password"
                            className="border-2 border-solid border-slate-400 outline-none text-lg px-4 py-2 rounded-xl text-white bg-slate-600 focus:border-2 focus:border-solid focus:border-white "
                        />
                    </div>
                    <div className="flex gap-10">
                        <button
                            onClick={handleLogin}
                            className="bg-slate-700 px-4 py-3 text-xl rounded-lg min-w-fit font-['Poppins'] border-2 border-slate-500  text-white hover:border-2 hover:border-orange-500  duration-200"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
