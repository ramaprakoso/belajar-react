export default function Todo({ text, isCompleted, isDeleted = false }) {
    // if (isDeleted) {
    //     return null
    // } else if (isCompleted) {
    //     return (
    //         <li>
    //             <del>{text}</del>
    //         </li>
    //     )

    // } else {
    //     return (
    //         <li>{text}</li>
    //     )
    // }

    if (isDeleted) {
        return null
    } else {
        return (
            <li>{isCompleted ? <li><del>{text}</del></li> : text}</li>
        )
        
    }

    // if (isDeleted) {
    //     return null
    // } else {
    //     return (
    //         {text} {isCompleted && 'checklist icon'}
    //     )
        
    // }
}