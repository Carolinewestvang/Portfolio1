"use client";
import { motion } from "framer-motion";
import React from "react";
import image from "next/image";
import Image from "@/node_modules/next/image";



export default function About({}) {
    return (
    <motion.div
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 3.5
    }}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Om meg</h3>

        <motion.div
        initial={{
            x:-200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once:true }}>
        <Image src={`/skydive.JPG`}
        width="1080"
        height="1920"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-96 md:h-96 xl:w-[2000px] xl:h-[600px]"
        alt="Caroline next to a kangaroo"/>
        </motion.div>

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Her er litt om min bakgrunn</h4>
            <p className="text-sm">
            25 år gammel jente som akkurat har fullført en bachelorgrad  i Digitale medier og design. Jeg jobber for tiden som brukerstyrt personlig assistent. På fritiden driver jeg med pole dance og trener på treningsstudio. Jeg elsker å reise, jeg har besøkt 22 land, vært på alle kontinentene utenom antarktis, og har i tillegg bodd i både USA og Australia. Med dette følger at jeg kan snakke, forstå og skrive engelsk på et avansert nivå. I tillegg har det gjort meg svært sosial og verdensvant.
            <br></br>
            <br></br>
            Digitale medier og design studiet er et studie som er en krysning mellom informasjonsteknologi og design. Det er rettet mot front-end utvikling, og jeg lærte mye forskjellig. Ta gjerne en titt innom noen av prosjektene jeg har jobbet med lenger ned på siden. 
            <br></br>
            <br></br>
            <span className="font-bold text-red-500">OBS!</span> Dette er starten på arbeidet med min portefølje nettside. Den blir utviklet med next.js, react, tailwind CSS og sanity.io. Jeg jobber med den i nåtid, og jobber for tiden med å koble til og hente ut informasjonen fra sanity, dermed er det for det meste kun den statiske informasjonen som er her foreløpig, men nettsiden er nå en demonstrasjon av hvordan den vil se ut til slutt. 
            </p>  
            </div>
            
    </motion.div>
    )
}
