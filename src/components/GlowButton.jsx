import './GlowButton.css'

export default function Button({color, onClick, disabled, children}) {
    return (
    <>
        <button className="glow-button" style={{"--color-button": color}} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    </>
    )
}