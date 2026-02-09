import React from 'react'

function Home(props) {
    return (
        <div>
            {
                props.status ? (
                    <div>
                        <h3>{props.user.name}</h3>
                        <p>{props.user.age} - {props.user.role}</p>
                    </div>
                ) : (
                    <div>
                        <h4>Please Login and access your info</h4>
                    </div>
                )
            }
        </div>
    )
}

export default Home