import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function App() {

  const userData = {
    name: "Narasimhan",
    role: "manager", // developer, lead, manager
    loginStatus: true
  }

  // developer - submit code
  // lead - create task, approve
  // manager - create task, delete task, approve

  // const loginStatus = false;

  return (
    <div>
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Home user={userData} status={loginStatus} /> */}
      <h2>Role Based Dashboard</h2>
      <Dashboard user={userData} />
    </div>
  )
}

export default App