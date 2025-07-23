import "./ProjectSection.css";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";


export default function ProjectSection() {
    return (
        <section id="projects">
            <h2>Featured Projects</h2>
            {projects.map((project, i) => (
                <ProjectCard key={i} {...project} reverse={i%2==0} />
            ))}
        </section>
    );
}