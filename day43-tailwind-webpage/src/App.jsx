import React from 'react'
import ProfileCard from "./components/ProfileCard";

function App() {

  const userData = {
    name: "Narasimhan",
    role: "Admin",
    email: "narasimhan@mail.com",
    location: "Kumbakonam, India",
    skills: "Javascript, Node.js",
    bio: "AI enhanced FSD Mentor and passionate about Backend Systems",
    image: "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
    isOnline: true
  }

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      {/* props */}
      <ProfileCard user={userData} />
    </div>
  )
}

export default App