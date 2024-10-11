import { useState } from 'react'
import { Button} from "react-bootstrap"

const Poll = ( {polls, poll, setPolls, index}) => {

    const [showResults, setShowResults] = useState(false)
    
    const handleVote = (optionTitle, pollTitle) => {
        let pollTemp = polls
        let totalVotes = 0
        pollTemp.forEach(p => {
            if(p.title === pollTitle){
                p.options.forEach(opt => {
                    if(optionTitle === opt.title){
                        opt.votes ++
                        //Save Poll
                        const requestOptions = {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(p)
                        }
                        fetch('http://localhost:4000/savePoll', requestOptions)
                        .then(res => {
                            if (!res.ok) {
                            throw Error('Poll not saved');
                            }
                            return res.json();
                        })
                        .catch(err => {
                            console.log("Save failed " + err)
                        })
                    }
                    totalVotes = totalVotes + opt.votes

                })
                p.options.forEach(opt => {
                    opt.percentage = Math.round((100 * opt.votes) / totalVotes)
                })
            }
        })

        //Add Vote record
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"optionTitle": optionTitle, "pollTitle": pollTitle})
        }
        fetch('http://localhost:4000/createVote', requestOptions)
        .then(res => {
            if (!res.ok) {
            throw Error('Vote not saved')
            }
            return res.json();
        })
        .catch(err => {
            console.log("Save failed " + err)
        })
        setShowResults(true)
    }

    return(
        <>
            <h2 key={index}>{poll.title}</h2>
            <div className="d-grid gap-2">
                {!showResults&&
                <>
                    {poll.options.map((option, index) => (
                        <Button key={index} variant="primary" size="lg" onClick={() => handleVote(option.title, poll.title)}>
                            {option.title}
                        </Button>
                    ))}
                </>
                }
                {showResults&&
                <>
                    <h3 class="text-success">Thank you for your response</h3>
                    {poll.options.map((option, index) => (
                        <Button key={index} variant="primary" size="lg" disabled={true}>
                            {option.title} {option.percentage + "%"}
                        </Button>
                    ))}
                </>
                }
            </div>
        </>
    )

}
export default Poll