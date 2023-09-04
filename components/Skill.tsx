"use client";
import Image from "@/node_modules/next/image";
import { motion } from "framer-motion";
import React from "react";


export default function Skill({  }) {
    return <div className="group relative flex cursor-pointer">
        <Image src={`/sanity.png`} 
        width="1080"
        height="1920"
        className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        alt="sanity logo"/>
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
            <p className="text-xl md:text-3xl font-bold text-black opacity-100">Sanity</p>
        </div>
        </div>    
    </div>
}
