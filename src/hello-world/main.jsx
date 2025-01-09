import { StrictMode } from "react"
import {createRoot} from "react-dom/client"
import HelloWorld from "./HelloWorld"
import { Container } from "./Container"
import TodoList from "../todolist/Todolist"
import AlertButton from "../button/AlertButton"


createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld/>
                <TodoList/>
                <AlertButton text="Click Me!"/>
            </Container>
        </StrictMode>
    )