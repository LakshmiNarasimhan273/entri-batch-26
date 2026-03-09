import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeTheme } from '../redux/themeSlice';

function Navbar() {
  const theme = useSelector(state => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <nav className=
    {`p-4 flex justify-between items-center ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} shadow-md`}>
      <h1 className='text-2xl font-bold'>Tech Battle</h1>

      <div className='flex items-center gap-4'>
        <Link to="/">Home</Link>
        <Link to="/voting">Voting</Link>
        <button onClick={() => dispatch(changeTheme())}>{theme === "light" ? "🌙 Dark" : "☀️ Light"}</button>
      </div>
    </nav>
  )
}

export default Navbar