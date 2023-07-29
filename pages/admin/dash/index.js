"use client";
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Sidemenu from './sidemenu'

export default function Dashboard() {





    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>

            <main>
                <div className="flex flex-wrap">


                    <div className='hidden md:h-screen md:block md:w-[250px]' style={{ background: '#065f46' }}>
                    <img src="/logo.jpg" alt="alt placeholder" class="w-24 h-24 mt-5 mx-auto mb-10 rounded-full" />
                        <Sidemenu />
                    </div>











                    <div className='flex-1 bg-blue-200'>
                        <div class="bg-gray-800 p-5 text-white">Dashboard</div>



                    </div>


                </div>
            </main>
        </div>
    )
}
