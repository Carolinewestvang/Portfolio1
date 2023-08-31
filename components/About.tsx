"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
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
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Om meg</h3>

        <motion.img
        initial={{
            x:-200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once:true }}
        src="https://scontent.fsvg2-1.fna.fbcdn.net/v/t39.30808-6/332837118_1107248243420496_211636087865690763_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jW5qrZFHheUAX8DnJwi&_nc_ht=scontent.fsvg2-1.fna&oh=00_AfBSZ1735FHA2OkOVg1inqTj-ohLsZj1QtrbWmwWB7aYyA&oe=64F346E2"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        alt="Caroline next to a kangaroo"/>

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Her er litt om min bakgrunn</h4>
            <p className="text-sm">
            25 år gammel jente som akkurat har fullført en bachelorgrad  i Digitale medier og design. Jeg jobber for tiden som brukerstyrt personlig assistent. På fritiden driver jeg med pole dance og trener på treningsstudio. Jeg elsker å reise, jeg har besøkt 22 land, vært på alle kontinentene utenom antarktis, og har i tillegg bodd i både USA og Australia. Med dette følger at jeg kan snakke, forstå og skrive engelsk på et avansert nivå. I tillegg har det gjort meg svært sosial og verdensvant.
            <br></br>
            <br></br>
            Digitale medier og design studiet er et studie som er en krysning mellom informasjonsteknologi og design. Det er rettet mot front-end utvikling, og jeg lærte mye forskjellig. Ta gjerne en titt innom noen av prosjektene jeg har jobbet med lenger ned på siden. 
            <br></br>
            <br></br>
            <span className="font-bold">OBS!</span> Dette er starten på arbeidet med min portefølje nettside. Den blir utviklet med next.js, react, tailwind CSS og sanity.io. Jeg jobber med den i nåtid, og jobber for tiden med å koble til og hente ut informasjonen fra sanity, dermed er kun den statiske informasjonen her foreløpig, men nettsiden er nå en demonstrasjon av hvordan den vil se ut til slutt. 
            </p>

        </div>  
    </motion.div>
}
