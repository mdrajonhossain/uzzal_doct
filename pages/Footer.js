"use client";
import Image from 'next/image'





export default function Footer() {



    return (
        <>
            <footer class="w-full bg-blue-800">
                <div class="mx-auto  ">
                    <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-white uppercase">Myruralphysician</h2>
                            <ul class="text-white font-medium">
                                <li class="mb-4">
                                    <a class="hover:underline">About</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold uppercase text-white">Help center</h2>
                            <ul class="text-white font-medium">
                                <li class="mb-4">
                                    <a class="hover:underline">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold uppercase text-white">Rural Physician Iformation</h2>
                            <ul class="text-white font-medium">
                                <li class="mb-4">
                                    <a class="hover:underline">Dr. Info</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold uppercase text-white">Our Course</h2>
                            <ul class="text-white font-medium">
                                <li class="mb-4">
                                    <a class="hover:underline">Course</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>



        </>
    )
}
