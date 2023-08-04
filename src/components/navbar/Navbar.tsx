'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { DiWebplatform } from "react-icons/di";

const Navbar = () => {
  const links = [
    {
      href: "/dashboard",
      title: "Dashboard",
    },
    {
      href: "/builder",
      title: "Builder",
    },
    {
      href: "/responds",
      title: "Responds",
    },
    {
      href: "/integrations",
      title: "Integrations",
    },
    {
      href: "/settings",
      title: "Settings",
    },
  ];

  const router = useRouter();
  const currentUrl = usePathname();
  return (
    <div className="p-[25px] w-full navbar flex gap-[25px] ">
      <Link href='/' className="logo flex gap-1 items-center text-blue-300">
        <DiWebplatform size={35} />
        <p className="font-semibold text-[20px]">Former</p>
      </Link>

      <div className="hr w-[1px] rounded-md h-[full] bg-gray-500"></div>
      <div className="flex gap-[25px] w-full items-center  relative">
        {links?.map((item, index) => (
         <>
            <Link href={item.href} className="relative ">
              <span className={`relative z-[11] p-2 px-4 rounded-md transition ${currentUrl === item.href ? "text-white" : " text-gray-400"}`}>
              {item.title}
              </span>
         <div className={`absolute   top-[-40px]  rounded-md transition-colors delay-150 ease-in min-w-full  ${currentUrl === item.href ? "navbar-overlay h-[75px]" : "bg-transparent"} `}>
         </div>
            </Link>

         </>
        ))}
      </div>
      <div className="user-profile"></div>
    </div>
  );
};

export default Navbar;
