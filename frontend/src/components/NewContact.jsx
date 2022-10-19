import { useState, useEffect, forwardRef, useRef } from "react"

import { Form, Input, Button, ButtonToolbar, SelectPicker } from 'rsuite'
import { Popover, Whisper } from 'rsuite';
import { Message, useToaster } from 'rsuite'
import { Container, Header } from 'rsuite'
import { SchemaModel, StringType } from "schema-typed"

import { useSelector, useDispatch } from "react-redux"


// import { setUser } from "../auth/UserState"

// import userSlice from './UserState'

// const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const NewContact = () => {

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const [contacts, setContacts] = useState([])


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
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                
            })
    }

   
    const formRef = useRef()

    const model = SchemaModel({
        name: StringType().isRequired("Contact name is required !")
    })

    return (
        <>
            <h1 style={{ margin: 40 }}>New Contact</h1>
            <Form
                style={{ margin: 40 }}
                ref={formRef}
                model={model}
                onSubmit={handleContactSubmit}
                fluid
            >
                <Form.Group controlId='name'>
                    <Form.ControlLabel>Contact Name</Form.ControlLabel>
                    <Form.Control name='name' />
                    <Form.HelpText tooltip>Contact Name is required</Form.HelpText>
                </Form.Group>
                <Form.Group controlId='phone'>
                    <Form.ControlLabel>Phone Number</Form.ControlLabel>
                    <Form.Control name='phone' />
                    <Form.HelpText tooltip>Phone Number</Form.HelpText>
                </Form.Group>
                <Form.Group controlId='address'>
                    <Form.ControlLabel>Address</Form.ControlLabel>
                    <Form.Control name='address' />
                    <Form.HelpText tooltip>Address</Form.HelpText>
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

export default NewContact;