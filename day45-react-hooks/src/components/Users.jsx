import React, { useEffect, useState } from 'react'

function Users() {
    const[users, setUsers] = useState([]);
    const[loading, setLoading] = useState(true);

    // Syntax of useEffect
    // components lifecycle -> mounting, update, unmount

    // useEffect(() => { // mount
                    // api call logic -> update
        // }, []); -> unmount
        
        // API Call
        useEffect(() => {
            fetch("https://fakestoreapi.com/users")
            .then((response) => {
               return response.json()
            }).then((data) => {
                setUsers(data);
                setLoading(false);
            }).catch(err => console.log(err));
        }, []);

        console.log(users);

  return (
    <div className='flex flex-col justify-center items-center h-[500px]'>
        {
            loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {
                        users.map((data) => (
                            <p>{data.username}</p>
                        ))
                    }
                </div>
            )
        }
    </div>
  )
}

export default Users