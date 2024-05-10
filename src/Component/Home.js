import { Container,Alert } from "react-bootstrap";
export default function Home()
{
    return(
        <div>
            <Container className="text-center mt-5">
                <Alert variant=""><span className="badge bg-light text-dark"><h1>News-Hub</h1></span></Alert>
            </Container>
            <Container>
                <h1>Welcome</h1>
                <b>This Is News App</b>
            </Container>
        </div>
    )
}