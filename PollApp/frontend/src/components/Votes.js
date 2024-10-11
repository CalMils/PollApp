import useFetch from './useFetch'
import { useState, useEffect } from 'react'
import { Table, Container } from "react-bootstrap"

const Votes = () => {
    const { data: voteData} = useFetch('http://localhost:4000/votes')
    const [votes, setVotes] = useState([])

    useEffect(() => {
        setVotes(voteData)
        console.log(votes)
    }, [votes, voteData])

    return(
        <Container className='mt-5'>
            <h2>Vote Data</h2>
            {votes &&
            <Table class="table">
                <thead>
                    <tr>
                    <th scope="col">Poll Title</th>
                    <th scope="col">Option Chosen</th>
                    <th scope="col">Time of vote</th>
                    </tr>
                </thead>
                <tbody>
                {votes.map(vote => (
                    <tr>
                    <td>{vote.pollTitle}</td>
                    <td>{vote.optionTitle}</td>
                    <td>{vote.voteTime}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
            }
        </Container>
        
    )
}
export default Votes