import './GlowButton.css'

export default function Button({color, onClick, children}) {
    return (
    <>
        <button className="glow-button" style={{"--color-button": color}} onClick={onClick}>
            {children}
        </button>
    </>
    )
}