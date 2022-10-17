import { useState, useEffect, forwardRef, useRef } from "react"

import { Form, Input, Button, ButtonToolbar, SelectPicker } from 'rsuite'
import { Popover, Whisper } from 'rsuite';
import { Message, useToaster } from 'rsuite'
import { Container, Header } from 'rsuite'

import userSlice from './UserState'

import { useSelector } from "react-redux"

const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const NewTrip = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const handleTripSubmit = async (e) => {
        e.preventDefault();

        console.log('Trip', { name, description })

        let req = await fetch(`http://localhost:3000/trips`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                description: description
            })
        })

        setName('')
        setDescription('')
    }

    // R Suite Form

    const toaster = useToaster()

    const message = (
        <Message showIcon type="success">
            Trip entered!
        </Message>
    )

    const [value, setValue] = useState(null)

    const formValue, setFormValue = useState({
        name: "",
        description: ""
    })

    const formRef = useRef()

    const model = SchemaModel({
        name: StringType().isRequired("Name your Trip!")
    })

    const formClick = async () => {
        if (!formRef.current.check()) {
            console.error('form error');
            return;
        }
        let fName = formValue.name
        let fDescription = formValue.description

        console.log(`New Trip Added: `, `Name: ${fName}`, `Description: ${fDescription}`)

        let req = await fetch(`http://localhost:3000/trips`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: fName,
                description: fDescription
            })
        })
        setFormValue(defaultFormValue)
        toaster.push(message)
    }

    const defaultFormValue = {
        name: '',
        description: ''
    }

    return (
        <>
            <h1 style={{ margin: 40 }}>New Trip</h1>
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
                    <Form.ControlLabel>Name</Form.ControlLabel>
                    <Form.Control name='name' />
                    <Form.HelpText tooltip>Trip Name is required</Form.HelpText>
                </Form.Group>
                <Form.Group controlId='description'>
                    <Form.ControlLabel>Description</Form.ControlLabel>
                    <Form.Control rows={13} name='description' accepter={Textarea} />
                    <Form.HelpText tooltip>Description</Form.HelpText>
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