import React from "react";
import { motion } from "framer-motion";
import Image from "@/node_modules/next/image";



export default function ExperienceCard({}) {
    return <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-blue-900/40 p-10 md:hover:opacity-100 md:opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
      initial={{
          y: -100,
          opacity: 0,
      }}
      transition={{
          duration: 1.2
      }}
      whileInView={{
          opacity: 1, y:0
      }}
      viewport={{
          once: true
      }}
      >
      <Image src={`/fisk.jpeg`} 
      width="1080"
      height="1920"
      className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      alt="Lørenskog high school"/>
      </motion.div>

      <div className="px-0 md:px-10">
          <h4 className="text-2xl md:text-4xl font-light">Ekstrahjelp og sjåfør</h4>
          <p className="font-bold text-1xl md:text-2xl mt-1">Brødr. Andreassen AS</p>
          <p className="text-xs md:text-lg uppercase py-5 text-gray-300">Startet jobben... - sluttet...</p>
          
          <p className="list-disc space-y-4 text-sm md:text-lg text-red-500 font-bold">
              Denne seksjonen er en WIP - Se min CV for info.
          </p>
      </div>
    </article>
}
