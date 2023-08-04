import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import React, { useState } from 'react';
import { GoStack, GoHome } from "react-icons/go";
import { AiFillBank } from "react-icons/ai";
import Navber from '../Navber';
import Footer from '../Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function Resultview() {

  const [resultshow, setResultshow] = useState(false);
  const [loader, setLoader] = useState(false);

  const [reg_number, setReg_number] = useState('');


  const [regdata, setRegdata] = useState([]);




  const onsubmit = () => {
    if (reg_number != "") {
      setLoader(true)
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          registration_number: reg_number
        })
      };
      fetch('/api/result_search', requestOptions)
        .then(response => response.json())
        .then(data => {
          setLoader(true)
          setReg_number("")
          if (data.data != null) {
            setReg_number("")
            setLoader(false)
            setRegdata(data.data)
            setResultshow(!resultshow)
            toast.success('Successfully', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else {
            setLoader(false)
            setReg_number("")
            toast.warn('no found data', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
          setLoader(false)
          setReg_number("")

        });
    } else {
      setLoader(false);
    }
  }

  const backstate = () => {
    setResultshow(!resultshow)
  }


  return (
    <>
      <Head>
        <title>myruralphysician</title>
      </Head>


      <main>
        <Navber />


        {loader &&
          <div class="main_loader min-h-screen flex justify-center items-center">
            <div class="loader bg-blue-200 p-5 rounded-full flex space-x-3">
              <div class="w-5 h-5 bg-white rounded-full animate-bounce"></div>
              <div class="w-5 h-5 bg-green-800 rounded-full animate-bounce"></div>
              <div class="w-5 h-5 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        }



        <div className='container mt-10 mx-auto h-screen'>


          {resultshow ?

            <>


              <div className='w-[100%] md:w-[80%] mx-auto bg-gray-200 '>
                <div onClick={() => backstate()} className='text-center mb-5 text-white cursor-pointer bg-gray-700'>Back</div>
                <center><img src={regdata.st_img} style={{ width: "150px", borderRadius: '10px' }} /></center>
                <div className='text-center text-base	 md:text-2xl bg-green-400 w-40 mx-auto rounded-[12px] mt-2'>{regdata.registration_number}</div>
                <div className='text-center text-base	 md:text-2xl'>{regdata.st_name}</div>

                <center>
                  <div className='mt-10 w-[100%] mx-auto'>Father Name</div>
                  <div className='font-bold mb-2'>{regdata.st_father}</div>

                  <div className='mx-auto'>Mother Name</div>
                  <div className='font-bold mb-2'>{regdata.st_mother}</div>

                  <div className='mx-auto'>Village</div>
                  <div className='font-bold mb-2'>{regdata.village}</div>

                  <div className='mx-auto'>POST Office</div>
                  <div className='font-bold mb-2'>{regdata.post_Office}</div>

                  <div className='mx-auto'>Thana</div>
                  <div className='font-bold mb-2'>{regdata.thana}</div>

                  <div className='mx-auto'>Distric</div>
                  <div className='font-bold mb-2'>{regdata.district}</div>
                </center>
              </div>
            </>
            :
            <div class="w-full max-w-xs mx-auto">
              <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Registration Code
                  </label>
                  <input type="number" value={reg_number} onChange={e => setReg_number(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Registration Number" />
                </div>

                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2">Type</label>
                  <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="RMP">Type select</option>
                    <option value="RMP">RMP</option>
                    <option value="LMAF">LMAF</option>
                    <option value="DMS">DMS</option>
                    <option value="MCH">MCH</option>
                    <option value="PARAMEDIC">PARAMEDIC</option>
                  </select>
                </div>

                <div class="flex items-center justify-between">
                  <button onClick={() => onsubmit()} disabled={reg_number != "" ? false : true} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Search
                  </button>
                </div>
              </div>
            </div>
          }



        </div>

        <br /><br /><br /><br /><br /><br />
        <ToastContainer />
        <Footer />
      </main>


    </>
  )
}


