import React, { useEffect, useState } from 'react'
import {auth,provider} from "./config.js";
import { signInWithPopup } from 'firebase/auth';
import Home from '../pages/Home.jsx';

function GoogleSignBtn() {
    const [mail,setMail] = useState("");

    const handleSignin = ()=>{
      signInWithPopup(auth,provider).then((data)=>{
        setMail(data.user.email);
        localStorage.setItem("email",data.user.email);
      })
    }

    useEffect(()=>{ 
      setMail(localStorage.getItem("email"));
    })
  
  
  return (
    <section className="flex justify-center content-center bg-cover bg-no-repeat w-[100vw] h-[100vh]">
        {mail?<Home />:
        <button onClick={handleSignin}>Sign in with Google</button>}
    </section>
  )
}

export default GoogleSignBtn;