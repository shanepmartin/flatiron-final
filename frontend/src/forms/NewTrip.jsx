import { useRef } from "react"
import { Form, Button, ButtonToolbar, Popover, Whisper } from 'rsuite'
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

    const model = SchemaModel({
        country: StringType().isRequired("what country did you go to ?"),
        city: StringType().isRequired("what city did you go to ?"),
        date: StringType().isRequired("describe your trip !")
    })

    return (
        <>
            <h1 style={{ margin: 40 }}>New Trip</h1>
            <Form 
                style={{ margin: 40 }}
                ref={formRef}
                model={model}
                onSubmit={handleTripSubmit}
                fluid
            >
                <Form.Group controlId='country'>
                    <Form.ControlLabel>country</Form.ControlLabel>
                    <Form.Control country='country' />
                    <Form.HelpText tooltip>what country did you go to ?</Form.HelpText>
                </Form.Group>
                <Form.Group controlId='city'>
                    <Form.ControlLabel>city</Form.ControlLabel>
                    <Form.Control country='city' />
                    <Form.HelpText tooltip>what city did you go to ?</Form.HelpText>
                </Form.Group>
                <Form.Group controlId='date'>
                    <Form.ControlLabel>date</Form.ControlLabel>
                    <Form.Control country='date' />
                    <Form.HelpText tooltip>when did you go ?</Form.HelpText>
                </Form.Group>
                <ButtonToolbar>
                    <Whisper
                        placement='right'
                        trigger='active'
                        speaker={<Popover arrow={false}>Clicked</Popover>}>
                        <Button appearance='ghost' type='submit'>
                            Submit
                        </Button>

                    </Whisper>

                </ButtonToolbar>

            </Form>
        </>
    )
}

export default NewTrip;