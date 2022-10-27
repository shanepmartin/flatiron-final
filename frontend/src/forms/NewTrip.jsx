import { useRef } from "react"
import { Form, Button, ButtonToolbar, Popover, Whisper, Container } from 'rsuite'
import { SchemaModel, StringType } from "schema-typed"

const NewTrip = () => {

    const handleTripSubmit = async (e) => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/trips`, {
            method: "POST",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                country: formRef.current.root[0].value,
                city: formRef.current.root[1].value,
                date: formRef.current.root[2].value
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
    }

    const formRef = useRef()

    return (
        <>
            <Container>
                <Form 
                    className="form-new"
                    ref={formRef}
                    onSubmit={handleTripSubmit}
                    fluid
                >
                    <h1 className="form-new-heading">New Trip</h1>
                    <br>
                    </br>
                    <Form.Group controlId='country'>
                        <Form.ControlLabel><h2>country</h2></Form.ControlLabel>
                        <Form.Control 
                            name='country'
                            size='lg'
                            placeholder="what country did you go to?" 
                        />
                        <Form.HelpText tooltip>what country did you go to ?</Form.HelpText>
                    </Form.Group>
                    <Form.Group controlId='city'>
                        <Form.ControlLabel><h2>city</h2></Form.ControlLabel>
                        <Form.Control 
                            name='city'
                            size='lg'
                            placeholder="what city did you go to?" 
                        />
                        <Form.HelpText tooltip>what city did you go to ?</Form.HelpText>
                    </Form.Group>
                    <Form.Group controlId='date'>
                        <Form.ControlLabel><h2>date</h2></Form.ControlLabel>
                        <Form.Control 
                            name='date'
                            size='lg'
                            placeholder="when did you go?"
                         />
                        <Form.HelpText tooltip>when did you go ?</Form.HelpText>
                    </Form.Group>
                    <ButtonToolbar>
                        <Whisper
                            placement='right'
                            trigger='active'
                            speaker={<Popover arrow={false}>trip submitted!</Popover>}>
                            <Button appearance='subtle' type='submit'>
                                <h3>submit</h3>
                            </Button>
                        </Whisper>
                    </ButtonToolbar>
                </Form>
            </Container>
        </>
    )
}

export default NewTrip;