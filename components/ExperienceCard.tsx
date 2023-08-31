import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
    return <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snao-center bg-blue-900/40 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
      viewPort={{
          once: true
      }}
      className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      src="https://images.unsplash.com/photo-1601467995997-ac1ae9a8fff4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Transportation truck" />

      <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">Ekstrahjelp og sjåfør</h4>
          <p className="font-bold text-2xl mt-1">Brødr. Andreassen AS</p>
          <p className="uppercase py-5 text-gray-300">Startet jobben... - sluttet...</p>
          
          <p className="list-disc space-y-4 text-lg">
              Denne seksjonen er en WIP - Se min CV for info.
          </p>
      </div>
    </article>
}
