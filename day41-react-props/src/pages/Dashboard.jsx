import React from 'react'

function Dashboard(props) {
    return (
        <div>
            {
                props.user.loginStatus ? (
                    <div>
                        <h2>Welcome, {props.user.name}</h2>
                        <p>{props.user.role}</p>

                        {
                            props.user.role === "developer" ? (
                                <button>Submit Your Code</button>
                            ) : props.user.role === "lead" ? (
                                <div>
                                    <button>Create Task</button>
                                    <button>Approve Code</button>
                                </div>
                            ) : props.user.role === "manager" ? (
                                <div>
                                    <button>Create Task</button>
                                    <button>Approve Code</button>
                                    <button>Delete Task</button>
                                </div>
                            ) : (
                                <p>Access Denied</p>
                            )
                        }

                    </div>
                ) : (
                    <h2>Please login to Continue</h2>
                )
            }
        </div>
    )
}

export default Dashboard