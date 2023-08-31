"use client";
import Link from "@/node_modules/next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Velkommen til min portefølje",
            "Jeg heter Andreassen,",
            "Caroline Westvang Andreassen"
        ],
        loop: true,
        delaySpeed: 1500,
    });
    return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <img 
       className="relative rounded-full h-40 w-40 mx-auto object-cover"
       src="https://media.licdn.com/dms/image/C4D03AQEg4wg8MmqaNw/profile-displayphoto-shrink_800_800/0/1642490513665?e=1698278400&v=beta&t=RcfU9lFNWE_jO_zTHbgV99MEGDkanBq7aDfH7_5cL7A" alt="Image of Caroline Westvang Andreassen" />
        <div className="z-20">
            <h2 className="text-xs xl:text-sm uppercase text-gray-500 pb-2 tracking-[5px] md:tracking-[15px] xl:tracking-[15px]">Bachelor i digitale medier og design</h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold px-10">
        <span className="mr-3">Caroline Westvang Andreassen</span>
        </h1>
        <h3 className="text-lg md:text-2xl xl:text-2xl text-[#40E0D0]/40 pt-2 tracking-[2px]">Velkommen til min portefølje</h3>
        <div className="pt-5">
            <Link href="#about">
            <button className="heroButton">Om meg</button>
            </Link>
            <Link href="#education">
            <button className="heroButton">Utdanning</button>
            </Link>
            <Link href="#experience">
            <button className="heroButton">Erfaring</button>
            </Link>
            <Link href="#skills">
            <button className="heroButton">Ferdigheter</button>
            </Link>   
            <Link href="#projects">        
            <button className="heroButton">Prosjekter</button>
            </Link>           
        </div>

        </div>
    </div>
)
}