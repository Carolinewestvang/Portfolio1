"use client";
import { motion } from "framer-motion";
import React from "react";




export default function Projects({}) {
    const projects = [1, 2, 3, 4, 5]
    return <motion.div
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1.5
    }}
     className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-o">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Prosjekter</h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snapmandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-800/20 scrollbar-thumb-blue-900/80 mt-10">
            {projects.map((project, i) => (
                <div key={project} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <div className="flex flex-row space-x-5">
                    <motion.img
                    initial={{
                        y: -300,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    whileInView={{
                        opacity: 1, 
                        y:0,
                    }}
                    viewport={{
                        once: true
                    }}
                    className="w-40 h-40 xl:h-80 xl:w-80 md:h-60 md:w-60"
                    src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Books"
                    />
                    <motion.img
                    initial={{
                        y: -300,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    whileInView={{
                        opacity: 1, 
                        y:0,
                    }}
                    viewport={{
                        once: true
                    }}
                    className="w-40 h-40 xl:h-80 xl:w-80 md:h-60 md:w-60"
                    src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Books"
                    />
                    <motion.img
                    initial={{
                        y: -300,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    whileInView={{
                        opacity: 1, 
                        y:0,
                    }}
                    viewport={{
                        once: true
                    }}
                    className="w-40 h-40 xl:h-80 xl:w-80 md:h-60 md:w-60"
                    src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Books"
                    /></div>
                    <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center"><span className="text-blue-300">Prosjekt {i+1} av {projects.length}:</span>{" "}Logo og profilmanual</h4>
                        <p className="text-lg text-center md:text-left">Denne seksjonen er også en WIP - se min <a href="https://www.behance.net/carolinandreas4" className="text-blue-500 underline">Behance profil</a> for å se mine prosjekter
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Se prosjekt:</span> <a href="https://www.behance.net/gallery/178848537/Logo-og-profilmanual" className="text-blue-500 underline">Logo og profilmanual</a>
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Fag:</span> Grafisk design
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Semester:</span> Vår 2021
                        </p>
                        <p className="text-lg text-center uppercase"><span className="font-bold">Karakter:</span> A
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className="w-full absolute top-[30%] bg-blue-800/10 left-0 h-[300px] -skew-y-12" />
        <div className="w-full absolute top-[40%] bg-blue-800/10 right-0 h-[300px] -skew-y-12" />
    </motion.div>
}
