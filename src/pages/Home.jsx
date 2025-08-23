import "./Home.css";
import TypeWriter from "../components/TypeWriter"
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";


export default function Home() {

    return (
    <>
        <div className="background-blobs">
            <div className="blob blob1"></div>
            <div className="blob blob2"></div>
            <div className="blob blob3"></div>
        </div>
        <HeroSection />
        <ProjectSection />
        <ContactSection />
    </>
    );
}