import './GlowButton.css'

export default function Button({color, onClick, children}) {
    return (
    <>
        <button style={{"--color-button": color}} onClick={onClick}>
            {children}
        </button>
    </>
    )
}