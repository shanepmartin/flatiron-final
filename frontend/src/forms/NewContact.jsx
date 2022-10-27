import { useRef } from "react"
import { Form, Button, ButtonToolbar, Popover, Whisper, Container } from 'rsuite'
import { SchemaModel, StringType } from "schema-typed"

const NewContact = () => {

    const handleContactSubmit = async (e) => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/contacts`, {
            method: "POST",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formRef.current.root[0].value,
                phone_number: formRef.current.root[1].value,
                address: formRef.current.root[2].value
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
                    onSubmit={handleContactSubmit}
                    fluid
                >
                    <h1 className="form-new-heading">Add Contact</h1>
                    <br>
                    </br>
                    <Form.Group controlId='name'>
                        <Form.ControlLabel><h2>name</h2></Form.ControlLabel>
                        <Form.Control 
                            name='name' 
                            size="lg"
                            placeholder="please enter the name of your new contact"
                        />
                    </Form.Group>
                    <Form.Group controlId='phone'>
                        <Form.ControlLabel><h2>phone number</h2></Form.ControlLabel>
                        <Form.Control 
                            name='phone'
                            size="lg"
                            placeholder="please enter the phone number of your new contact" 
                        />
                    </Form.Group>
                    <Form.Group controlId='address'>
                        <Form.ControlLabel><h2>address</h2></Form.ControlLabel>
                        <Form.Control 
                            name='address'
                            size="lg"
                            placeholder="please enter the address of your new contact" 
                        />
                    </Form.Group>
                    <ButtonToolbar>
                        <Whisper
                            placement='right'
                            trigger='active'
                            speaker={<Popover arrow={false}>new contact submitted!</Popover>}>
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

export default NewContact;