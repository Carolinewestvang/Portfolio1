import React from "react";
import { motion } from "framer-motion";



export default function EducationCard({}) {
    return <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snao-center bg-[#40E0D0]/40 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
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
      className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      src="https://assets.website-files.com/63f39595178336055d88e69f/646cb55ce099ffe250835b69_lorenskogvgs_undervisning_LMR_arkitektur_galleri_07.jpg" alt="Lørenskog high school" />

      <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">Studiespesialisering</h4>
          <p className="font-bold text-2xl mt-1">Lørenskog videregående skole</p>
          <p className="uppercase py-5 text-gray-300">Startet skolegangen... - sluttet...</p>
          
          <p className="list-disc space-y-4 text-lg">
              Denne seksjonen er en WIP - Se min CV for info.
          </p>
      </div>
    </article>
}
