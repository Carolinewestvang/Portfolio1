import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
    return (
    <motion.div 
    initial= {{
        opacity: 0,
    }}
    animate= {{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
    }}
    transition= {{
        duration: 2.5,
    }}
    className="relative flex justify-center items-center pt-40">
        <div className="rounded-full h-[900px] w-[900px] absolute mt-52 bg-blue-600 blur-xl bg-gradient-to-r from-blue-600 to-[#40E0D0] opacity-40" />
        <div className="rounded-full h-[890px] w-[890px] absolute mt-52 bg-black" />
        <div className="rounded-full border border-blue-500/40 rounded-full opacity-20 h-[300px] w-[300px] absolute mt-52" />
        <div className="rounded-full border border-blue-500/50 rounded-full opacity-10 h-[500px] w-[500px] absolute mt-52" />
        <div className="rounded-full border border-blue-500/60 opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
        <div className="rounded-full border border-blue-500/60 opacity-20 h-[800px] w-[800px] absolute mt-52" />
        {/*<div className="px-7 py-4 border border-blue h-[900px] w-[900px] rounded-full leading-none divide-x divide-gray-600 m-52" />*/}
    </motion.div>
    )}
