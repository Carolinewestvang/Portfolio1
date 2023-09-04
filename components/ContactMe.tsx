"use client";
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };



export default function ContactMe({}) {
    const { register, handleSubmit, } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => window.location.href = `mailto:caroline@andreassen.no?subject=${formData.subject}&body=${formData.message} Hilsen ${formData.name} (${formData.email})`;

    return <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 mr-5 ml-10 uppercase tracking-[20px] text-gray-500 text-2xl">Kontakt meg</h3>
        <div className="space-y-10">
        <div className="flex flex-col space-y-10 items-center justify-center md:pb-12 mt-10">
            <h4 className="text-1xl md:text-1xl md:text-4xl font-semibold text-center">
                Ønsker du å høre mer? <span className="text-[#40E0D0]/80">Ta kontakt.</span>
            </h4>
        </div>
        
        <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#40E0D0]/60 h-7 w-7 animate-pulse"/>
            <p className="text-2xl">+47 908 00 650</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#40E0D0]/60 h-7 w-7 animate-pulse"/>
            <p className="text-2xl">caroline@andreassen.no</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-[350px] md:w-fit mx-auto">
            <div className="flex space-x-2">
                <input {... register("name")} placeholder="Navn"className="contactInput w-[171px] md:w-fit" type="text" />
                <input {... register("email")} placeholder="E-post"className="contactInput w-[171px] md:w-fit" type="email" />
            </div>

            <input {... register("subject")} placeholder="Emne" className="contactInput" type="text" />

            <textarea {... register("message")} placeholder="Melding" className="contactInput" />
            <button type="submit"className="bg-[#40E0D0]/40 py-5 px-10 rounded-md text-white font-bold text-lg">Send</button>
        </form>
        </div>
        <div className="flex flex-col absolute bottom-0 h-16 px-5">
        <footer className="text-sm text-gray-500 tracking-[3px]">Nettside inspirert av: Sonny Sangha | Papa react</footer>
        </div>
    </div>
}
