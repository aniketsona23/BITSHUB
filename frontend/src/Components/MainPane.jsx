import React from 'react'
import PostCard from './PostCard'
import DoubtCard from './DoubtCard'
import avatar from "../assets/avatar.jpg"

function MainPane() {
  return (
    <div className='flex flex-col justify-start items-center gap-8 py-[2%] w-[85%] h-[100%] overflow-y-scroll'>
        {/* <PostCard  courseName={"Object Oriented Programming"}/> */}
        <DoubtCard user={{username:"Aniket Sonawane",bitsid:"2022B3A70031G",img:avatar}} doubt={{doubt:"Lorem, ipsum dolor sitssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss amet consectetur adipisicing elit. Reprehenderit, sapiente!",title:"Aniket  Nigger"}}/>
        <DoubtCard user={{username:"Aniket Sonawane",bitsid:"2022B3A70031G",img:avatar}} doubt={{doubt:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, sapiente!",title:"Aniket  Nigger"}}/>
        <DoubtCard user={{username:"Aniket Sonawane",bitsid:"2022B3A70031G",img:avatar}} doubt={{doubt:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, sapiente!",title:"Aniket  Nigger"}}/>
        <DoubtCard user={{username:"Aniket Sonawane",bitsid:"2022B3A70031G",img:avatar}} doubt={{doubt:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, sapiente!",title:"Aniket  Nigger"}}/>
        <DoubtCard user={{username:"Aniket Sonawane",bitsid:"2022B3A70031G",img:avatar}} doubt={{doubt:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, sapiente!",title:"Aniket  Nigger"}}/>
        <DoubtCard user={{username:"Aniket Sonawane",bitsid:"2022B3A70031G",img:avatar}} doubt={{doubt:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, sapiente!",title:"Aniket  Nigger"}}/>
    
    </div>
  )
}

export default MainPane