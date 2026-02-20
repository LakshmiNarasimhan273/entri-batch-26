# React + Axios + JSON Server CRUD – Student Notes

# What We Are Building

A simple CRUD application using:
- React
- Axios
- JSON Server
- useState
- useEffect

CRUD = Create, Read, Update, Delete

---

# Step 1: Install JSON Server (Backend Setup)

Install globally:

```bash
npm install -g json-server
```

Create a file named db.json:

```json
{
  "users": []
}
```

Start JSON Server:

```bash
json-server --watch db.json --port 3000
```

Server runs at:
http://localhost:3000/users

---

# Step 2: Install Axios in React

Inside React project:

```bash
npm install axios
```

---

# Complete CRUD Example (Single Component)

App.jsx

```jsx
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  const API = "http://localhost:3000/users";

  // READ (GET)
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get(API);
    setUsers(response.data);
  };

  // CREATE (POST)
  const addUser = async () => {
    if (!name || !email) return;

    await axios.post(API, { name, email });
    setName("");
    setEmail("");
    fetchUsers();
  };

  // DELETE
  const deleteUser = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchUsers();
  };

  // EDIT (SET DATA TO INPUT)
  const editUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  };

  // UPDATE (PUT)
  const updateUser = async () => {
    await axios.put(`${API}/${editId}`, { name, email });
    setName("");
    setEmail("");
    setEditId(null);
    fetchUsers();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React CRUD with JSON Server</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {editId ? (
        <button onClick={updateUser}>Update</button>
      ) : (
        <button onClick={addUser}>Add</button>
      )}

      <hr />

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => editUser(user)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

# How It Works

useState:
- Stores users list
- Stores form data (name, email)
- Stores editId

useEffect:
- Calls API when component loads
- Fetches user data from JSON server

Axios:
- GET → Read users
- POST → Add user
- PUT → Update user
- DELETE → Remove user

---

# CRUD Summary

CREATE → axios.post()  
READ → axios.get()  
UPDATE → axios.put()  
DELETE → axios.delete()

---

# Important Points

- JSON Server acts as fake backend.
- Always call fetchUsers() after create/update/delete.
- useEffect runs once because dependency array is empty.
- API URL must match JSON Server port.

---

# End Notes

This is a beginner-friendly real-world CRUD setup using:
React + Axios + JSON Server + useState + useEffect.

This pattern is commonly used in frontend interviews and projects.