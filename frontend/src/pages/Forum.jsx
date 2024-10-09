import React from 'react'
import UserNavbar from '../Components/UserNavBar'
import CoursesPane from '../Components/CoursesPane'
import MainPane from '../Components/MainPane'

function Forum() {
  return (
        <main className='flex h-[93%]'>
            <CoursesPane />
            <MainPane />
        </main>
  )
}

export default Forum