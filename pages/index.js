import { Container } from "../components/TailwindSC/Styled"
import NavBar from "../components/NavBar"
import Home from "../components/Home"

export default function Index() {
    return (
        <Container>
            <NavBar />
            <div className="bg-yellow-400 w-screen h-1" />
            <Home />
        </Container>
    )
}
