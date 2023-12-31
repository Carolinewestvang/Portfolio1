"use client";
import React from "react";
import { motion } from "framer-motion"
import Skill from "./Skill";



export default function Skills({}) {
    return <motion.div
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 3.5
    }}
     className="h-screen mr-5 ml-5 flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        <h3 className="absolute ml-7 top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Ferdigheter</h3>

        <div className="grid grid-cols-4 gap-3 md:gap-5">
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </div>
    </motion.div>
}
