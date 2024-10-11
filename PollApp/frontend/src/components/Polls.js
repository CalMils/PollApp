import { Container } from "react-bootstrap"
import useFetch from './useFetch'
import { useState, useEffect } from 'react'
import Poll from "./Poll"

const Polls = ({activePoll}) => {

    const { data: pollData} = useFetch('http://localhost:4000/polls')
    const [polls, setPolls] = useState([])

    useEffect(() => {
        if(activePoll){
            let data = pollData
            data = data.filter((d) => d.active === true)
            setPolls(data)
        } else {
        setPolls(pollData)
        }
    }, [pollData, activePoll])

    return(
        <>
        <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            {polls &&
            <div className="d-grid gap-2">
                {polls.map((poll, index) => (
                    <Poll poll={poll} index={index} polls={polls}/>
                ))}
            </div>
            }
        </Container>
        </>
    )
}
export default Polls
