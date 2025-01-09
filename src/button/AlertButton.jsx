export default function AlertButton({ text = "Click me" }) {
    function handleClick() {
        alert("Button Clicked")
    }

    return (
        <button onClick={handleClick}>{text}</button>
    ) 
}