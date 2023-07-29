"use client";
import Image from 'next/image'
import Head from 'next/head'
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Cookies from "js-cookie";



export default function Loginpage() {
    const router = useRouter();

    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    const [loader, setLoader] = useState(false);




    const onsubmit = () => {
        if (email && password) {
            setLoader(true)
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            };
            fetch('/api/login', requestOptions)
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem("email", data.data.email);
                    setLoader(true)
                    if (data.token) {
                        Cookies.set("token", data.token);
                        router.push("/admin/dash");
                    }
                    setLoader(false)

                });
        } else {
            setLoader(false)
        }
    }



    return (
        <div>
            <Head>
                <title>Myruralphsysician</title>
            </Head>

            <main>

                {loader &&
                    <div class="main_loader min-h-screen flex justify-center items-center">
                        <div class="loader bg-blue-200 p-5 rounded-full flex space-x-3">
                            <div class="w-5 h-5 bg-white rounded-full animate-bounce"></div>
                            <div class="w-5 h-5 bg-green-800 rounded-full animate-bounce"></div>
                            <div class="w-5 h-5 bg-blue-500 rounded-full animate-bounce"></div>
                        </div>
                    </div>
                }


                <div class="h-screen bg-gray-200 font-sans text-gray-700">
                    <div class="container mx-auto p-8 flex">
                        <div class="max-w-md w-full mx-auto mt-10">                           

                            <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
                                <div class="p-8">

                                    <div class="mb-5">
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-600" style={{ color: '#1d4ed8' }}>Email</label>
                                        <input type="text" value={email} onChange={e => setemail(e.target.value)} placeholder="email" name="email" class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                                    </div>
                                    <div class="mb-5">
                                        <label for="password" class="block mb-2 text-sm font-medium" style={{ color: '#1d4ed8' }}>Password</label>
                                        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="password" type="password" name="password" class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                                    </div>
                                    <button onClick={() => onsubmit()} class="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">Login</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </main>
        </div>
    )
}
