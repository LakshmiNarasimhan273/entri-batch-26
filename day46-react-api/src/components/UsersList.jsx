import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UsersList() {

  const[users, setUsers] = useState([]);

  const[username, setUsername] = useState("");
  const[email, setEmail] = useState("");

  // GET API Request
  let API_URL = "http://localhost:3001/users";

  const fetchUsers = () => {
    axios.get(API_URL)
    .then((response) => {
      setUsers(response.data);
    }).catch((err) => {
      console.log(err);
    })
  }
  
  useEffect(() => { // mount
    fetchUsers(); // update
  }, []); // unmount

  const addUser = () => {
    if(!username || !email){
      return;
    }
    // post api call
    axios.post(API_URL, {
      username, email
    }).then(() => {
      fetchUsers();
      setUsername("");
      setEmail("");
    })
  }

  const deleteUser = (id) => {
    axios.delete(`${API_URL}/${id}`)
    .then(() => {
      fetchUsers();
    })
  }


  return (
    <div>

      <div>
        <h2>Add User</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' required />
        <button onClick={addUser}>Add User</button>
      </div>

      {
        users.map(data => (
          <div key={data.id}>
            <h2>{data.username}</h2>
            <h4>{data.email}</h4>
            <button onClick={() => deleteUser(data.id)}>Delete User</button>
          </div>
        ))
      }
    </div>
  )
}

export default UsersList