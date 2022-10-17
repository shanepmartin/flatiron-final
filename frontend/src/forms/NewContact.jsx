import { useState, useEffect, forwardRef, useRef } from "react"

import { Form, Input, Button, ButtonToolbar, SelectPicker } from 'rsuite'
import { Popover, Whisper } from 'rsuite';
import { Message, useToaster } from 'rsuite'
import { Container, Header } from 'rsuite'

import userSlice from './UserState'

const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const NewContact = () => {
    
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const [contacts, setContacts] = useState([])

    const handleContactSubmit = async (e) => {
        e.preventDefault();

        console.log('Contact', { name, phone, address })

        let req = await fetch(`http://localhost:3000/contacts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                phone: phone,
                address: address
            })
        })

        setName('')
        setPhone('')
        setAddress('')
    }

    // R Suite Form

    const toaster = useToaster()

    const message = (
        <Message showIcon type="success">
            Contact Created!
        </Message>
    )

    const [value, setValue] = useState(null)

    const formValue, setFormValue = useState({
        name: "",
        phone: "",
        address: ""
    })

    const formRef = useRef()

    const model = SchemaModel({
        name: StringType().isRequired("Contact name is required !")
    })

    const formClick = async () => {
        if (!formRef.current.check()) {
            console.error('form error');
            return;
        }
        let fName = formValue.name
        let fPhone = formValue.phone
        let fAddress = formValue.address

        console.log(`New Contact Added: `, `Name: ${fName}`, `Phone: ${fPhone}`, `Address: ${fAddress}`)

        let req = await fetch(`http://localhost:3000/contacts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: fName,
                phone: fPhone,
                address: fAddress
            })
        })
        setFormValue(defaultFormValue)
        toaster.push(message)
    }

    const defaultFormValue = {
        name: '',
        phone: '',
        address: ''
    }

    return (
        <>
            <h1 style={{ margin: 40 }}>New Contact</h1>
            <Form
                style={{ margin: 40 }}
                ref={formRef}
                model={model}
                formValue={formValue}
                onChange={formValue => setFormValue(formValue)}
                onSubmit={formClick}
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

export default NewContact;