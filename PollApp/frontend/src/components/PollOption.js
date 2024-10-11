import { Button} from "react-bootstrap"

const PollOption = ( {polls, setPolls, option, index, pollTitle, setShowResults}) => {

    const handleVote = (optionTitle, pollTitle) => {
        let pollTemp = polls
        pollTemp.forEach(p => {
            if(p.title === pollTitle){
                p.options.forEach(opt => {
                    if(optionTitle === opt.title){
                        opt.votes ++
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
                })
            }
        })
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
        // setPolls(null)
        setShowResults(true)
    }

    return(
        <>
        {option &&
            <Button key={index} variant="primary" size="lg" onClick={() => handleVote(option.title, pollTitle)}>
                {option.title} {option.votes}
            </Button>
        }
        </>
    )

}
export default PollOption