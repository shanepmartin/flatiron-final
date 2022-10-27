import { useRef } from "react"
import { Form, Button, ButtonToolbar, Popover, Whisper } from 'rsuite'
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

    const model = SchemaModel({
        name: StringType().isRequired("please enter a name"),
        phone_number: StringType().isRequired("please enter a phone number"),
        address: StringType().isRequired("please enter an address")
    })

    const styles = {
        display: 'inline-table'
    }

    return (
        <>
            <div className="form-heading-div" style={styles}>
                <h1 className="form-new-heading">Add Contact</h1>
                <Form 
                    className="form-new"
                    ref={formRef}
                    model={model}
                    onSubmit={handleContactSubmit}
                    fluid
                >
                    <Form.Group controlId='name'>
                        <Form.ControlLabel><h2>name</h2></Form.ControlLabel>
                        <Form.Control name='name' />
                        <Form.HelpText tooltip>please enter the name of your new contact</Form.HelpText>
                    </Form.Group>
                    <Form.Group controlId='phone'>
                        <Form.ControlLabel><h2>phone number</h2></Form.ControlLabel>
                        <Form.Control name='phone' />
                        <Form.HelpText tooltip>please enter the phone number of your new contact</Form.HelpText>
                    </Form.Group>
                    <Form.Group controlId='address'>
                        <Form.ControlLabel><h2>address</h2></Form.ControlLabel>
                        <Form.Control name='address' />
                        <Form.HelpText tooltip>please enter the address of your new contact</Form.HelpText>
                    </Form.Group>
                    <ButtonToolbar>
                        <Whisper
                            placement='right'
                            trigger='active'
                            speaker={<Popover arrow={false}>Submitted!</Popover>}>
                            <Button appearance='subtle' type='submit'>
                                <h2>submit</h2>
                            </Button>
                        </Whisper>
                    </ButtonToolbar>
                </Form>
            </div>
        </>
    )
}

export default NewContact;