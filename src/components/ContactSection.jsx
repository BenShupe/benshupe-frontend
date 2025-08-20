import "./ContactSection.css";
import GlowButton from "./GlowButton";
import { useState } from "react";

export default function ContactSection() {
    const [form, setForm] = useState({ email: "", message: "" });
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setStatus(null);

        try {
            const res = await fetch("https://xmexsc5p03.execute-api.us-east-2.amazonaws.com/default/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    to: "benshupe@sasktel.net",
                    email: `Email from: ${form.email} on benshupe.com`,
                    message: form.message,
                }),
            });

            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            setStatus("Message sent!");
            setForm({ email: "", message: "" });
        } catch (err) {
            console.error("Error:", err);
            setStatus("Something went wrong. Try again?");
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="contact-section" id="contact">
            <h2 className="contact-title">Contact Me</h2>
            <p className="contact-description">Messages sent here go through AWS Lambda and SES then straight to my email. </p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your message" value={form.message} onChange={handleChange} rows={5} required/>

                <GlowButton type="submit" disabled={sending} className="contact-button" color="rgba(138, 92, 245, 1)">
                    {sending ? "Sending..." : "Send Email"}
                </GlowButton>
                {status && <p className="status-text">{status}</p>}
            </form>







            <div className="social-wrapper">
                <div className="social">
                    <a target="_blank" href="https://github.com/BenShupe" className="social-icon">
                        <img src="/github.svg" />
                    </a>
                    <a target="_blank" href="mailto:benshupe@sasktel.net" className="social-icon">
                        <img src="/email.svg" />
                    </a>
                    <a target="_blank" href="https://ca.linkedin.com/in/benjamin-shupe-21700b354" className="social-icon">
                        <img src="/linkedin.svg" />
                    </a>
                </div>
            </div>
        </section>
    );
}