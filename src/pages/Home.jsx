import "./Home.css"
import TypeWriter from "../components/TypeWriter"
import githubLogo from "../assets/github.svg"
import emailLogo from "../assets/email.svg"
import linkedinLogo from "../assets/linkedin.svg"

export default function Home() {
    return (
    <>
        <h1>Hi, I'm Ben</h1>
        <h2>
            <TypeWriter preText="I'm " type_list={["a Student", "a Web Developer"]} pause={2000} />
        </h2>
        <div className="social">
            <a target="_blank" href="https://github.com/BenShupe" className="social-icon">
                <img src={githubLogo} />
            </a>
            <a target="_blank" href="mailto:benshupe@sasktel.net" className="social-icon">
                <img src={emailLogo} />
            </a>
            <a target="_blank" href="https://ca.linkedin.com/in/benjamin-shupe-21700b354" className="social-icon">
                <img src={linkedinLogo} />
            </a>
        </div>
    </>
    );
}