"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Cookies from "js-cookie";

export default function Sidemenu() {
    const router = useRouter();




    const logoutcun = () => {
        Cookies.remove("token");
        localStorage.removeItem("email");
        router.push("/admin/login");
    }


    return (
        <div>
            <ul>
                <li class="cursor-pointer text-white pl-8 pb-5 pt-3 hover:bg-yellow-800 bg-yellow-800"><Link href="/admin/dash">Dashboard</Link></li>
                <li class="cursor-pointer text-white pl-8 pb-5 pt-3 hover:bg-yellow-800"><Link href="/admin/dash/result">Add Info Doct</Link></li>
                <li class="cursor-pointer text-white pl-8 pb-5 pt-3 hover:bg-yellow-800"><Link href="/admin/dash/manage_result">Info Doct</Link></li>                
                <li class="cursor-pointer text-white pl-8 pb-5 pt-3 hover:bg-yellow-800">Manage student</li>
                <li class="cursor-pointer text-white pl-8 pb-5 pt-3 hover:bg-yellow-800">setting</li>
                <li class="cursor-pointer text-white pl-8 pb-5 pt-3 hover:bg-red-600" onClick={() => logoutcun()}>Log out</li>
            </ul>
        </div>
    )
}
