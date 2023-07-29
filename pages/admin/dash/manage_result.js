"use client";
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie";
import { useRouter } from 'next/router'
import Sidemenu from './sidemenu'




export default function Manage_result() {
    const router = useRouter();


    const [loader, setLoader] = useState(false);
    const [getalldoc, setGetalldoc] = useState([]);




    useEffect(() => {
        getusershow();
    }, [getalldoc])


    const getusershow = () => {
        axios.get('/api/get_all_doc')
            .then(response => {
                setGetalldoc(response.data.doct)
            })
    }






    return (
        <div>
            <Head>
                <title>Result</title>
            </Head>

            <main>
                <div className="flex flex-wrap">


                    <div className='hidden md:h-screen md:block md:w-[250px]' style={{ background: '#065f46' }}>
                        <img src="/logo.jpg" alt="alt placeholder" class="w-24 h-24 mt-5 mx-auto mb-10 rounded-full" />
                        <Sidemenu />
                    </div>


                    <div className='flex-1 bg-blue-200 h-screen'>
                        <div class="bg-gray-500 p-5 text-white">Doctor Information</div>

                        <div class="relative overflow-x-auto showtable">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">Photo</th>
                                        <th scope="col" class="px-6 py-3">Doct. Name</th>
                                        <th scope="col" class="px-6 py-3">Registration Number</th>
                                        <th scope="col" class="px-6 py-3">Doct. Type</th>
                                        <th scope="col" class="px-6 py-3">Father Name</th>
                                        <th scope="col" class="px-6 py-3">Village</th>
                                        <th scope="col" class="px-6 py-3">Post Office</th>
                                        <th scope="col" class="px-6 py-3">Thana</th>
                                        <th scope="col" class="px-6 py-3">Dist.</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {getalldoc.map((doct, index) => {
                                        return (
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>                                                
                                                <td class="px-6 py-4">
                                                    <img src={doct.st_img} alt='img' className='table_photo'/>
                                                </td>
                                                <td class="px-6 py-4">{doct.st_name}</td>
                                                <td class="px-6 py-4">{doct.st_name}</td>
                                                <td class="px-6 py-4">{doct.st_name}</td>
                                                <td class="px-6 py-4">{doct.st_name}</td>
                                                <td class="px-6 py-4">{doct.st_name}</td>
                                                <td class="px-6 py-4">{doct.st_name}</td>
                                                <td class="px-6 py-4">{doct.st_name}</td>
                                                <td class="px-6 py-4">{doct.st_name}</td>
                                            </tr>
                                        )
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>



                </div>
            </main>
        </div>
    )
}
