import { NextResponse } from "next/server";



export default function middleware(req) {
 
  let user_verify = req.cookies.get("token");
  let url = req.url


  if (!user_verify && url.includes('/admin/dash')) {
    return NextResponse.redirect("http://localhost:3000/admin/login");
  }

  if (user_verify && url === "http://localhost:3000/admin/login") {
    return NextResponse.redirect("http://localhost:3000/admin/dash");
  }




}