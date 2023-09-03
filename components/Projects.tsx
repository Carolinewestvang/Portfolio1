"use client";
import Image from "@/node_modules/next/image";
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
            
                <div className="w-screen flex-shrink-0 snap-center flex flex-col spaxe-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <div className="flex flex-row space-x-5">
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/active.png`}
                    width="1080"
                    height="1920"
                    alt="Active logo with mountain background"/>
                    </motion.div>
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/visittkort.png`}
                    width="1080"
                    height="1920"
                    alt="Business card mockup for Active"/>
                    </motion.div>
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/profilmanual.png`}
                    width="1080"
                    height="1920"
                    alt="Logomanual for active - rules for use: spacing"/>
                    </motion.div>
                    </div>
                    <div className="space-y-5 px-0 md:px-10 max-w-6xl mt-5">
                        <h4 className="text-4xl font-semibold text-center"><span className="text-blue-300">Prosjekt 1 av 9: </span>Logo og profilmanual</h4>
                        <p className="text-lg text-center md:text-left font-bold">Det skulle lages en logo og senere en komplett profilmanual for en hypotetisk bedrift. Bedriften heter Active og er et eventbyrå som arrangerer turer for ansatte i bedrifter. De byr på turer i skog og mark med mange ulike aktiviteter i fjell, vann, skog etc. De ønsker å fremme fysisk aktivitet ute, og ønsker dette representert i logoen. 
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
                <div className="w-screen flex-shrink-0 snap-center flex flex-col spaxe-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <div className="flex flex-row space-x-5">
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/modell1.jpg`}
                    width="1080"
                    height="1920"
                    alt="Guitar detail"/>
                    </motion.div>
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/modell2.jpg`}
                    width="1080"
                    height="1920"
                    alt="romantic dinner for two"/>
                    </motion.div>
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/modell3.jpg`}
                    width="1080"
                    height="1920"
                    alt="Angry troll in the woods"/>
                    </motion.div>
                    </div>
                    <div className="space-y-5 px-0 md:px-10 max-w-6xl mt-5">
                        <h4 className="text-4xl font-semibold text-center"><span className="text-blue-300">Prosjekt 2 av 9: </span>3D - modeller</h4>
                        <p className="text-lg text-center md:text-left">Det skulle lages ulike 3D modeller, med nytt tema for hver oppgave. Det ble også gradvis vanskeligere og høyere krav til hver oppgave. Alle modeller måtte lages selv, ingen ting kunne lastes ned fra nett.
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Se prosjekt:</span> <a href="https://www.behance.net/gallery/178922067/3D-modeller" className="text-blue-500 underline">3D-modeller</a>
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Fag:</span> 3D - modellering
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Semester:</span> Vår 2021
                        </p>
                        <p className="text-lg text-center uppercase"><span className="font-bold">Karakter:</span> B
                        </p>
                    </div>
                </div>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col spaxe-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <div className="flex flex-row space-x-5">
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/web1.png`}
                    width="1080"
                    height="1920"
                    alt="Website overview - first version"/>
                    </motion.div>
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/web2.png`}
                    width="1080"
                    height="1920"
                    alt="website overview - final version"/>
                    </motion.div>
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/web3.png`}
                    width="1080"
                    height="1920"
                    alt="website pageview - final version"/>
                    </motion.div>
                    </div>
                    <div className="space-y-5 px-0 md:px-10 max-w-6xlmt-5">
                        <h4 className="text-4xl font-semibold text-center"><span className="text-blue-300">Prosjekt 3 av 9: </span>Nettside</h4>
                        <p className="text-lg text-center md:text-left">Ved hjelp av HTML og CSS skulle det lages en samleside for webutvikling. Den skulle være responsiv, sjekkes for tilgjengelighet og utbedres deretter, skulle ha en godt utbedret SEO. 
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Se prosjekt:</span> <a href="https://www.behance.net/gallery/178924753/Nettside" className="text-blue-500 underline">Nettside</a>
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Fag:</span> Webutvikling
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Semester:</span> Høst 2021
                        </p>
                        <p className="text-lg text-center uppercase"><span className="font-bold">Karakter:</span> B
                        </p>
                    </div>
                </div>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col spaxe-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <div className="flex flex-row space-x-5">
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/laika.png`}
                    width="1080"
                    height="1920"
                    alt="Robot dog named Laika on the moon"/>
                    </motion.div>
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/witch.png`}
                    width="1080"
                    height="1920"
                    alt="Magic witch trying to cook a horse head in her crockpot"/>
                    </motion.div>
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/BSVIP.png`}
                    width="1080"
                    height="1920"
                    alt="Britney spears' perfume: VIP"/>
                    </motion.div>
                    </div>
                    <div className="space-y-5 px-0 md:px-10 max-w-6xl mt-5">
                        <h4 className="text-4xl font-semibold text-center"><span className="text-blue-300">Prosjekt 4 av 9: </span>3D animasjoner</h4>
                        <p className="text-lg text-center md:text-left">Det skulle lages ulike 3D animasjonsfilmer, med nytt tema for hver oppgave. Det ble også gradvis vanskeligere og høyere krav til hver oppgave. I dette faget kunne vi laste ned og bruke ferdiglagede 3D modeller fra nett så lenge vi lagde animasjonene selv.
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Se prosjekt:</span> <a href="https://www.behance.net/gallery/178926123/3D-animasjonsfilmer" className="text-blue-500 underline">3D-animasjonsfilmer</a>
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Fag:</span> 3D-animasjon
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Semester:</span> Høst 2021
                        </p>
                        <p className="text-lg text-center uppercase"><span className="font-bold">Karakter:</span> A
                        </p>
                    </div>
                </div>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col spaxe-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <div className="flex flex-row space-x-5">
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/spill1.png`}
                    width="1080"
                    height="1920"
                    alt="2D-game: Tictactoe"/>
                    </motion.div>
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/spill2.png`}
                    width="1080"
                    height="1920"
                    alt="2D-game: The Satyr Reaper"/>
                    </motion.div>
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/spill3.png`}
                    width="1080"
                    height="1920"
                    alt="2D - game: Guess the countries"/>
                    </motion.div>
                    </div>
                    <div className="space-y-5 px-0 md:px-10 max-w-6xl mt-10">
                        <h4 className="text-4xl font-semibold text-center"><span className="text-blue-300">Prosjekt 5 av 9: </span>2D - spill</h4>
                        <p className="text-lg text-center md:text-left">Vi fikk ferdig utfylte filer med HTML, CSS og litt JavaScrpt, hvor vi skulle gjøre spillene fungerende ved hjelp av å fylle inn den manglende koden. Vi fikk 2 ulike spill vi måtte få til å fungere, i tillegg fikk vi lage et eget spill til slutt.
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Se prosjekt:</span> <a href="https://www.behance.net/gallery/178928123/2D-spill" className="text-blue-500 underline">2D-spill</a>
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Fag:</span> Innføring i programmering
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Semester:</span> Høst 2021
                        </p>
                        <p className="text-lg text-center uppercase"><span className="font-bold">Karakter:</span> A
                        </p>
                    </div>
                </div>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col spaxe-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <div className="flex flex-row space-x-5">
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/lms1.jpeg`}
                    width="1080"
                    height="1920"
                    alt="LMS login page"/>
                    </motion.div>
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/lms2.jpeg`}
                    width="1080"
                    height="1920"
                    alt="LMS courses overview page"/>
                    </motion.div>
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/lms3.jpeg`}
                    width="1080"
                    height="1920"
                    alt="LMS lesson page"/>
                    </motion.div>
                    </div>
                    <div className="space-y-5 px-0 md:px-10 max-w-6xl mt-10">
                        <h4 className="text-4xl font-semibold text-center"><span className="text-blue-300">Prosjekt 6 av 9: </span>Learning Management System (LMS)</h4>
                        <p className="text-lg text-center md:text-left">Det skulle lages et enkelt læringssystem for den hypotetiske bedriften Mikro LMS, ved hjelp av React, SaSS og Sanity CMS. Dette var en gruppeoppgave.
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Se prosjekt:</span> <a href="https://www.behance.net/gallery/178929281/Learning-management-system-(LMS)" className="text-blue-500 underline">LMS</a>
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Fag:</span> Utvikling av interaktive nettsteder
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Semester:</span> Vår 2022
                        </p>
                        <p className="text-lg text-center uppercase"><span className="font-bold">Karakter:</span> A
                        </p>
                    </div>
                </div>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col spaxe-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <div className="flex flex-row space-x-5">
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/gym1.png`}
                    width="1080"
                    height="1920"
                    alt="Gymbutikken webpgage improvement suggestion - frontpage"/>
                    </motion.div>
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/gym2.png`}
                    width="1080"
                    height="1920"
                    alt="Personas made for gymbutikken"/>
                    </motion.div>
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/gym3.png`}
                    width="1080"
                    height="1920"
                    alt="Gymbutikken webpage improvement suggestion - product page"/>
                    </motion.div>
                    </div>
                    <div className="space-y-5 px-0 md:px-10 max-w-6xl mt-5">
                        <h4 className="text-4xl font-semibold text-center"><span className="text-blue-300">Prosjekt 7 av 9: </span>Gymbutikken</h4>
                        <p className="text-lg text-center md:text-left">Dette var en gruppeoppgave hvor vi ved hjelp av ulike metoder skulle kartlegge og analysere informasjonsarkitekturen for en ekte bedrifts nettside. Deretter skulle vi legge frem et forslag for forbedring. Hele prosessen skulle til slutt presenteres i en rapport.
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Se prosjekt:</span> <a href="https://www.behance.net/gallery/179124031/Gymbutikken" className="text-blue-500 underline">Gymbutikken</a>
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Fag:</span> Informasjonsarkitektur
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Semester:</span> Vår 2022
                        </p>
                        <p className="text-lg text-center uppercase"><span className="font-bold">Karakter:</span> A
                        </p>
                    </div>
                </div>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col spaxe-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <div className="flex flex-row space-x-5">
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/vr1.png`}
                    width="1080"
                    height="1920"
                    alt="John travolta on dance floor in saturday night fever scene"/>
                    </motion.div>
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/vr3.png`}
                    width="1080"
                    height="1920"
                    alt="VR game overview - sketch"/>
                    </motion.div>
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/vr2.png`}
                    width="1080"
                    height="1920"
                    alt="VR game user testing"/>
                    </motion.div>
                    </div>
                    <div className="space-y-5 px-0 md:px-10 max-w-6xl mt-5">
                        <h4 className="text-4xl font-semibold text-center"><span className="text-blue-300">Prosjekt 8 av 9: </span>Saturday night fever - VR spill</h4>
                        <p className="text-lg text-center md:text-left">Dette var en gruppeoppgave hvor vi skulle lage et VR-spill basert på et tema. Temaet var: Exertion.<br></br>
                        Exertion betyr å bevege seg. Dermed valgte vi å lage et spill som lærer brukeren å danse samme dansebevegelser som John travolta i filmen "Saturday night fever", i scenen på nattklubben da han danser til sangen "You should be daning - Bee Gees".
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Se prosjekt:</span> <a href="https://www.behance.net/gallery/179135799/Saturday-night-fever-VR-spill" className="text-blue-500 underline">Saturday night fever</a>
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Fag:</span> Design av virtuelle miljøer
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Semester:</span> Vår 2022
                        </p>
                        <p className="text-lg text-center uppercase"><span className="font-bold">Karakter:</span> A
                        </p>
                    </div>
                </div>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col spaxe-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <div className="flex flex-row space-x-5">
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/bach1.jpeg`}
                    width="1080"
                    height="1920"
                    alt="Data analysis: using post-its"/>
                    </motion.div>
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/bach3.jpeg`}
                    width="1080"
                    height="1920"
                    alt="Students writing bachelor thesis"/>
                    </motion.div>
                    <motion.div
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
                    className="w-40 h-40 xl:h-60 xl:w-80 md:h-40 md:w-60">
                    <Image src={`/bach2.png`}
                    width="1080"
                    height="1920"
                    alt="Strigoo logo"/>
                    </motion.div>
                    </div>
                    <div className="space-y-5 px-0 md:px-10 max-w-6xl mt-5">
                        <h4 className="text-4xl font-semibold text-center"><span className="text-blue-300">Prosjekt 9 av 9: </span>Digital lekseplanlegging i barneskolen</h4>
                        <p className="text-lg text-center md:text-left">Dette prosjektet var et gruppearbeid, og det var vår bacheloroppgave. Sammen undersøkte og analyserte vi brukeropplevelsen, konkurrenter og eksisterende praksiser knyttet til lekseplanlegging i barneskolen. Vi utviklet et designsystem som sikrer konsistens og brukervennlighet for fremtidige utviklingsprosjekter. Designsystemet inkluderer layout, typografi, farger, ikoner, komponenter og interaksjoner.    
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Se prosjekt:</span> <a href="https://www.behance.net/gallery/179139135/Digital-lekseplanlegging-i-barneskolen-Bachelor" className="text-blue-500 underline">Digital lekseplanlegging</a>
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Fag:</span> Bacheloroppgave
                        </p>
                        <p className="text-lg text-center"><span className="font-bold uppercase">Semester:</span> Vår 2023
                        </p>
                        <p className="text-lg text-center uppercase"><span className="font-bold">Karakter:</span> B
                        </p>
                    </div>
                </div>

                </div>

        <div className="w-full absolute top-[30%] bg-blue-800/10 left-0 h-[300px] -skew-y-12" />
        <div className="w-full absolute top-[40%] bg-blue-800/10 right-0 h-[300px] -skew-y-12" />
    </motion.div>
}
