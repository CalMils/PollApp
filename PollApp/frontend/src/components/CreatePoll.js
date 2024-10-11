import { useState} from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap"

const CreatePoll = () => {
    const navigate = useNavigate();
    const [ inputs, setInputs ] = useState([
        {name: "Title", value: "", type: "text", required:true},
        {name: "Active", value: "", type: "checkbox", required:false},
        {name: "Option", value: "", type: "text", required:true},
        {name: "Option", value: "", type: "text", required:true}

    ])

    let message = ""
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const inputs = Array.from(event.target);

        let poll = {title: "", options: []}

        inputs.forEach(input => {
            if(input.name === "Title"){
                poll.title = input.value
            }
            if(input.name === "Option"){
                let option = {title: input.value, votes: 0}
                poll.options.push(option)
            }
            if(input.name === "Active"){
                if(input.value === 'on'){
                    poll.active = true
                } else {
                    poll.active = false
                }
            }
        })
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(poll)
        }
        fetch('http://localhost:4000/createPoll', requestOptions)
        .then(res => {
            if (res.ok) {
            console.log("Poll saved")
            }
        })
        .catch(err => {
            console.log("Save failed " + err)
        })
        
        navigate("/");
    }

    const addOption = () => {
        if(inputs.length < 8){
            let newOption = {name: "Option", value: ""}
            setInputs([...inputs, newOption])
        }
    }
    
  return (
    <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <Form onSubmit={handleSubmit}>
                <div className="d-grid gap-2">
                    {inputs.map((input, index) => (
                        <>
                        <label key={index}>{input.name}</label>
                        <input name={input.name} type={input.type} required={input.required}/>
                        </>
                    ))}
                    <Button variant="success" type="button"  onClick={() => addOption()}>Add Option</Button>
                    <Button variant="primary" type="submit">Save</Button>
                    <p>{message}</p>
                </div>
            </Form>
    </Container>
  )
}
export default CreatePoll