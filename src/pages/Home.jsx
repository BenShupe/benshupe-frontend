import "./Home.css"
import TypeWriter from "../components/TypeWriter"
import ProjectSection from "../components/ProjectSection"
import ContactSection from "../components/ContactSection"

import { useEffect, useState } from "react";


export default function Home() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    let blob1Style = {
    transform: `translate(${scrollY * 0.8}px, ${scrollY * 0.4}px) scale(1.05)`,
    };
    let blob2Style = {
        transform: `translate(${-scrollY * 0.5}px, ${scrollY * 0.6}px) scale(1.05)`,
    };
    let blob3Style = {
        transform: `translate(${scrollY * 0.3}px, ${scrollY * 0.3}px) scale(1.05)`,
    };


    return (
    <>
        <div className="background-blobs">
            <div className="blob blob1" style={blob1Style}></div>
            <div className="blob blob2" style={blob2Style}></div>
            <div className="blob blob3" style={blob3Style}></div>
        </div>
        <h1>Hi, I'm Ben</h1>
        <h2>
            <TypeWriter preText="I'm " type_list={["a University Student", "a Web Developer"]} pause={2000} />
        </h2>
        <ProjectSection />
        <ContactSection />
    </>
    );
}