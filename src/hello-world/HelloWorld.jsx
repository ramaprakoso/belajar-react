import './HelloWorld.css'; 

export default function HelloWorld() {
    // const text = "Hello World!";
    const props = {
        text: "Hello World Motherfucker !!!"
    }

    return (
        <div>
            <HeaderHelloWorld {...props} />
            <ParagraphText />
        </div>
    )
}

// function HeaderHelloWorld({props}) { //props without descrupting props 
//     // const text = "Hello World!";
//     const style = {
//         color: "blue",
//         backgroundColor: "aqua"
//     }
//     return (
//         <h1 style={style}>{props.text.toUpperCase()}</h1>
//     )
// }

function HeaderHelloWorld({ text }) { //destructing props 
    return (
        <h1 className='title'>{text.toUpperCase()}</h1>
    )
}


function ParagraphText() {
    const text = "Selamat Datang di React JS";

    return (
        <p className='content'>{text.toLowerCase()}</p>
    )
}