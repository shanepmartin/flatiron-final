import { useRef } from "react"
import { Form, Button, ButtonToolbar, Popover, Whisper } from 'rsuite'
import { SchemaModel, StringType } from "schema-typed"

const UpdateContact = ({id, contact, fetchContact}) => {

    console.log('id', id)
    console.log('contact', contact)

    const updateName = async (e) => {
        e.preventDefault();
        let token = localStorage.getItem("token");
        let newName = e.target[0].value
        let req = await fetch(`http://localhost:3000/contacts/${id}`, {
            method: "PATCH",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: newName
            })
        })
        fetchContact()
    }

    const updatePhone = async (e) => {
        e.preventDefault();
        let token = localStorage.getItem("token");
        let newPhone = e.target[0].value
        let req = await fetch(`http://localhost:3000/contacts/${id}`, {
            method: "PATCH",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                phone_number: newPhone
            })
        })
        fetchContact()
    }

    const updateAddress = async (e) => {
        e.preventDefault();
        let token = localStorage.getItem("token");
        let newAddress = e.target[0].value
        let req = await fetch(`http://localhost:3000/contacts/${id}`, {
            method: "PATCH",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                address: newAddress
            })
        })
        fetchContact()
    }

    const formRef = useRef()

    const model = SchemaModel({
        name: StringType().isRequired("update contact's name"),
        phone_number: StringType().isRequired("update contact's phone number"),
        address: StringType().isRequired("update contact's address")
    })

    return (
        <>
            <h1 style={{ margin: 40 }}>Update Contact</h1>
            <Form
                style={{ margin: 40 }}
                ref={formRef}
                model={model}
                fluid
            >
                <Form.Group controlId='update-name'>
                    <Form.ControlLabel>Update Name</Form.ControlLabel>
                    <Form.Control name='update-name' onSubmit={updateName}/>
                    <Form.HelpText tooltip>"update contact's name"</Form.HelpText>
                </Form.Group>
                <Form.Group controlId='update-phone'>
                    <Form.ControlLabel>Update Phone Number</Form.ControlLabel>
                    <Form.Control name='update-phone' onSubmit={updatePhone}/>
                    <Form.HelpText tooltip>"update contact's phone number"</Form.HelpText>
                </Form.Group>
                <Form.Group controlId='update-address'>
                    <Form.ControlLabel>Update Address</Form.ControlLabel>
                    <Form.Control name='update-address' onSubmit={updateAddress}/>
                    <Form.HelpText tooltip>"update contact's address"</Form.HelpText>
                </Form.Group>
                <ButtonToolbar>
                    <Whisper
                        placement='right'
                        trigger='active'
                        speaker={<Popover arrow={false}>Submitted!</Popover>}>
                        <Button appearance='ghost' type='submit'>
                            Submit
                        </Button>
                    </Whisper>
                </ButtonToolbar>
            </Form>
        </>
    )
}

export default UpdateContact;