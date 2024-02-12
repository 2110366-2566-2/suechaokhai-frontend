"use client";

import OwnerInfo from "@/components/propertyDesc/OwnerInfo";
import RoomTourRes from "@/components/propertyDesc/RoomTourRes";
import getCurrentUser from "@/libs/getCurrentUser";
import userLogout from "@/libs/userLogout";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  async function auth() {
    if (isLogin) {
      await userLogout();
      window.location.href = "/login";
    } else {
      window.location.href = "/login";
    }
  }

  const [isLogin, setLogin] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function getUser() {
      try {
        const data = await getCurrentUser();

        if (data.email) {
          console.log(data);
          setLogin(true);
          setUser(data);
        } else {
          setUser(Object);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getUser();
  }, []);
  return (
    <div className="flex h-dvh w-dvw flex-col items-center justify-center gap-5 bg-gray-800">
      {user && user.email ? (
        <div className="text-white">Hello {user.email}</div>
      ) : null}
      <Link href="/suechaokhai/propertyDescription">
        <button className="h-[60px] w-[510px] rounded-[10px] bg-[#3AAEEF] font-bold text-white">
          View Property
        </button>
      </Link>

      {user ? (
        <div>
          <button
            onClick={auth}
            className="h-[50px] rounded-[10px] bg-[#3AAEEF] px-2 font-bold text-white"
          >
            {isLogin ? <div>Logout</div> : <div>Login</div>}
          </button>
        </div>
      ) : null}
    </div>
  );
}
