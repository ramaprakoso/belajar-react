import Todo from "./Todo";

export default function TodoList() {
    const data = [
        {
            id: 0,
            text: "Belajar HTML",
            isCompleted: true,
            isDeleted: true,
        },
        {
            id: 1,
            text: "Belajar CSS",
            isCompleted: true,
        },
        {
            id: 2,
            text: "Belajar Hono",
            isCompleted: true,
        },
        {
            id: 3,
            text: "Belajar React",
            isCompleted: false,
        }
    ]

    return (
        <ul>
            {
                // jika menggunakan bracket harus di return
                // data.map((todo) => {
                //     return <Todo key={todo.id} {...todo} />
                // })

                data.map((todo) => (
                    <Todo key={todo.id} {...todo} />
                ))
            }
        </ul>
    )
}