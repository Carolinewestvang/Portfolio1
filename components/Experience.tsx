"use client";
import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";



export default function Experience({}) {
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
    className="h-screen flex relative overflow-hidden flex-col text-lft md:flwx-row max-w-full px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 mr-5 ml-10 uppercase tracking-[20px] text-gray-500 text-2xl">Erfaring</h3>

        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-800/20 scrollbar-thumb-blue-900/80">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>
    </motion.div>
}
