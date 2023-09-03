import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Image from '@/node_modules/next/image'

export default function Home() {
  return ( 
    <div className="bg-black text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-thin scrollbar-track-black scrollbar-thumb-blue-900/80">
    <head>
      <title>Caroline Westvang Andreassen</title>
      <meta name="keywords" content="portefølje, portfolio, Caroline Westvang Andreassen, prosjekter, skoleprosjekter, CV, experience, education, utdanning, ferdigheter, skills, erfaring, Caroline W Andreassen, Caroline Andreassen, Caroline Westvang"/>
      <meta name="description" content="En portefølje nettside for Caroline Westvang Andreassen"/>
      <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
    </head>
     {/* Header */}
      <Header/>

     {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero/>
      </section>
      
     {/* About */}
     <section id="about" className="snap-center">
      <About />
     </section>

     {/* Education */}
     <section id="education" className="snap-center">
      <Education />
    </section>

     {/* Experience */}
    <section id="experience" className="snap-center">
      <Experience />
    </section>

     {/* Skills */}
     <section id="skills" className="snap-start">
      <Skills />
     </section>

     {/* Projects */}
     <section id="projects" className="snap-start">
       <Projects />
     </section>

     {/* Contact me */}
     <section id="contactme" className="snap-start">
       <ContactMe />
     </section>
    </div>

  )
}
