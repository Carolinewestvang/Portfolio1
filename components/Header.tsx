"use client";
import react from "react";
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from "@/node_modules/next/link";


type Props = {};
export default function Header({}: Props) {
    return <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition= {{
            duration: 1.5,
        }}
         className="flex flex-row items-center">
            {/*social icons*/}
            <SocialIcon url="https://www.instagram.com/carolinewestvang/" 
            fgColor="white" 
            bgColor="transparent" />
            <SocialIcon url="https://github.com/Carolinewestvang" 
            fgColor="white" 
            bgColor="transparent"/>
            <SocialIcon url="https://www.linkedin.com/in/caroline-andreassen-60883b22b/" 
            fgColor="white" 
            bgColor="transparent"/>
            <SocialIcon url="https://www.behance.net/carolinandreas4" 
            fgColor="white" 
            bgColor="transparent"/>
        </motion.div>
        <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition= {{
                    duration: 1.5,
                }} 
            className="flex flex-row items-center text-white-300 cursor-pointer">
            <Link href="#hero">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
            <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
            </svg>
            </Link>
            <Link href="#hero">
            <p className="uppercase hidden md:inline-flex text-sm text-white-400 mr-3">Hjem</p>
            </Link>
            <Link href="#contactme">
            <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="white"
            bgColor="transparent" />
            <p className="uppercase hidden md:inline-flex text-sm text-white-400">
                Ta kontakt
            </p>
            </Link>
        </motion.div>
        
        
        </header>
}
