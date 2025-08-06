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
            console.log(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Map scrollY to some movement values, tweak multipliers to your taste
    let blob1Style = {
        transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.2}px) scale(1)`,
    };
    let blob2Style = {
        transform: `translate(${-scrollY * 0.25}px, ${scrollY * 0.3}px) scale(1)`,
    };
    let blob3Style = {
        transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.1}px) scale(1)`,
    };

    return (
    <>
        <div className="background-blobs">
            <div className="blob blob1" style={blob1Style}></div>
            <div className="blob blob2" style={blob2Style}></div>
            <div className="blob blob3" style={blob3Style}></div>
        </div>
        <h1>Hi, I'm Ben</h1>
        <h3>
            <TypeWriter preText="I'm " type_list={["a University Student", "a Web Developer"]} pause={2000} />
        </h3>
        <ProjectSection />
        <ContactSection />
    </>
    );
}