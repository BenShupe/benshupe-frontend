import "./HeroSection.css";
import TypeWriter from "../components/TypeWriter";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <h1 className="hero-title">Hi, I'm Ben</h1>
      <h2 className="hero-subtitle">
        <TypeWriter
          preText="I'm "
          type_list={[
            "an engineering student",
            "into software engineering",
            "building cool projects"
          ]}
          pause={2000}
        />
      </h2>
      <p className="hero-description">
        I’m an engineering student who is passionate about tech, design, and solving real-world problems.
        Always experimenting with new tools, always learning, and always 
        pushing my skills forward.
      </p>

      <div className="scroll-cue">↓ Scroll to see my work ↓</div>
    </section>
  );
}
