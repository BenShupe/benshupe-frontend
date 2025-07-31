import "./Home.css"
import TypeWriter from "../components/TypeWriter"
import ProjectSection from "../components/ProjectSection"
import ContactSection from "../components/ContactSection"


export default function Home() {
    return (
    <>
        <h1>Hi, I'm Ben</h1>
        <h2>
            <TypeWriter preText="I'm " type_list={["a University Student", "a Web Developer"]} pause={2000} />
        </h2>
        <ProjectSection />
        <ContactSection />
    </>
    );
}