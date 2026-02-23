import React, { useState } from 'react';
import * as Yup from "yup";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const errors = {email: "", password: ""};

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    const schema = Yup.object({
        email: Yup.string().trim().email("Please enter a valid email address").required("Email is required"),

        password: Yup.string().trim()
            .min(6, "Password must be at least 6 characters")
            .matches(/[A-Z]/, "Password must contain one uppercase letter")
            .matches(/[0-9]/, "Password must contain one number")
            // .matches(/[*@#$]/, "Password must contain special character")
            .required("Password is required")
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await schema.validate(
                {email, password},
                {abortEarly: false}
             );
             setErrors({});
             setEmail("");
             setPassword("");
             setSuccess("Successfully Logged in");
        }catch(err){
            const newError = {};
            err.inner.forEach((data) => {
                newError[data.path] = data.message;
                // email: error message,
                // password: error message
            });
            setErrors(newError);
        }
    }

    return (
        <div className='min-h-screen flex justify-center items-center bg-gray-200'>
            <div className='bg-white p-8 rounded-xl shadow-lg w-96'>
                <h2 className='text-2xl font-bold text-center mb-6'>Welcome back</h2>

                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='border w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder='Email' />
                        {errors.email && (
                            <p className='text-red-500 font-semibold text-sm mt-1'>{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className='border w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder='Password' />
                        {
                            errors.password && (
                                <p className='text-red-500 font-semibold text-sm mt-1'>{errors.password}</p>
                            )
                        }
                    </div>

                    <button className='w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg cursor-pointer' type='submit'>Login</button>

                    {
                        success && (
                            <p className='text-green-600 text-center font-bold mt-3'>{success}</p>
                        )
                    }
                </form>

            </div>
        </div>
    )
}

export default Login