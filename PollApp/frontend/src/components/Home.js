import { Button, Container } from "react-bootstrap"
import './Home.scss'

const Home = () => {

    return(
        <>
        <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <div className="d-grid gap-2 mt-5">
                <a href={"/Polls"}>
                    <Button variant="primary" size="lg">
                        Polls
                    </Button>
                </a>
                <a href={"/CreatePoll"}>
                    <Button variant="primary" size="lg">
                        Create Poll
                    </Button>
                </a>
                <a href={"/Votes"}>
                    <Button variant="primary" size="lg">
                        Votes
                    </Button>
                </a>
            </div>
        </Container>
        </>
    )
}
export default Home
