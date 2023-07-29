"use client";
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie";
import { useRouter } from 'next/router'
import Sidemenu from './sidemenu'




export default function Result() {
    const router = useRouter();


    const [name, setName] = useState('');
    const [father, setFather] = useState('');
    const [mother, setMother] = useState('');
    const [village, setVillage] = useState('');
    const [post_Office, setPost_Office] = useState('');
    const [thana, setThana] = useState('');
    const [district, setDistrict] = useState('');
    const [registration_type, setRegistration_type] = useState('');
    const [registration_number, setRegistration_number] = useState('');
    const [showimage, setShowimage] = useState('');
    const [image, setImage] = useState('');


    const [loader, setLoader] = useState(false);



    function changePhotoHandaller(file) {
        setShowimage(URL.createObjectURL(file[0]))
        setImage(file[0]);
    }



    async function onsubmit() {

        if (name != "" && father != "" && mother != "" && village != "" && post_Office != "" && thana != "" && district != "" && registration_type != "" && registration_number != "" && image != null) {

            setLoader(true)
            const formData = new FormData();

            formData.append('caname', name);
            formData.append('fathera', father);
            formData.append('mothera', mother);
            formData.append('villagea', village);
            formData.append('post_Officea', post_Office);
            formData.append('thanaa', thana);
            formData.append('districta', district);
            formData.append('registration_typea', registration_type);
            formData.append('registration_numbera', registration_number);
            formData.append('img', image);

            axios.post('/api/quizecatagory', formData, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            }).then(data => {
                if (data.data) {
                    setLoader(true)
                    setName("")
                    setFather("")
                    setMother("")
                    setVillage("")
                    setPost_Office("")
                    setThana("")
                    setDistrict("")
                    setRegistration_type("")
                    setRegistration_number("")
                    setShowimage("")
                    console.log(data.data);
                    setLoader(false)
                    toast.success('Successfully entry', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            });
        } else {
            setLoader(true)
            setName("")
            setFather("")
            setMother("")
            setVillage("")
            setPost_Office("")
            setThana("")
            setDistrict("")
            setRegistration_type("")
            setRegistration_number("")
            setShowimage("")
            console.log("empty");
            setLoader(false)
            toast("empty filed")
        }
    }






    // { name }
    // { father }
    // { mother }
    // { village }
    // { post_Office }
    // { thana }
    // { district }
    // { registration_type }
    // { registration_number }
    // { image }


   



    return (
        <div>
            <Head>
                <title>Result</title>
            </Head>

            <main>
                <div className="flex flex-wrap">


                    <div className='hidden md:h-screen md:block md:w-[250px]' style={{ background: '#065f46' }}>
                    <img src={"/logo.jpg"} alt="alt placeholder" class="w-24 h-24 mt-5 mx-auto mb-10 rounded-full" />
                       <Sidemenu />
                    </div>


                    {loader &&
                        <div class="main_loader min-h-screen flex justify-center items-center">
                            <div class="loader bg-blue-200 p-5 rounded-full flex space-x-3">
                                <div class="w-5 h-5 bg-white rounded-full animate-bounce"></div>
                                <div class="w-5 h-5 bg-green-800 rounded-full animate-bounce"></div>
                                <div class="w-5 h-5 bg-blue-500 rounded-full animate-bounce"></div>
                            </div>
                        </div>
                    }



                    <div className='flex-1 bg-blue-200 h-screen overflow-hidden'>
                        <div class="bg-gray-500 p-5 text-white">Add Info Doct</div>

                        <div className='flex gap-5 flex-wrap h-[500px] overflow-y-auto p-5'>
                            <div class="w-[40%]">
                                <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Doctor Name</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div class="w-[40%]">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Father Name</label>
                                <input type="text" value={father} onChange={(e) => setFather(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div class="w-[40%]">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mother Name</label>
                                <input type="text" value={mother} onChange={(e) => setMother(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div class="w-[40%]">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Village</label>
                                <input type="text" value={village} onChange={(e) => setVillage(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div class="w-[40%]">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post Office</label>
                                <input type="text" value={post_Office} onChange={(e) => setPost_Office(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div class="w-[40%]">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thana</label>
                                <input type="text" value={thana} onChange={(e) => setThana(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div class="w-[40%]">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">District</label>
                                <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div class="w-[40%]">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Registration Type</label>
                                <input type="text" value={registration_type} onChange={(e) => setRegistration_type(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div class="w-[40%]">
                                <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Registration Number</label>
                                <input type="number" value={registration_number} onChange={(e) => setRegistration_number(e.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div class="w-[40%]">
                                <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image upload</label>
                                <input type="file" onChange={(e) => changePhotoHandaller(e.target.files)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div class="w-[80%]">
                                <button type="submit" onClick={() => onsubmit()} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Doctor</button>
                            </div>
                        </div>
                    </div>



                    <ToastContainer />
                </div>
            </main>
        </div>
    )
}
