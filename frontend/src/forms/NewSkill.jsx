import { useState, useEffect, forwardRef, useRef } from "react"

import { Form, Input, Button, ButtonToolbar, SelectPicker } from 'rsuite'
import { Popover, Whisper } from 'rsuite';
import { Message, useToaster } from 'rsuite'
import { Container, Header } from 'rsuite'

import userSlice from './UserState'

import { useSelector } from "react-redux"

const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const NewSkill = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')

    const handleSkillSubmit = async (e) => {
        e.preventDefault();

        console.log('description', { name, type, description })

        let req = await fetch(`http://localhost:3000/skills`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                type: type,
                description: description
            })
        })

        setName('')
        setType('')
        setDescription('')
    }

    // R Suite Form

    const toaster = useToaster()

    const message = (
        <Message showIcon type="success">
            Skill Input !
        </Message>
    )

    const [value, setValue] = useState(null)

    const [formValue, setFormValue] = useState({
        name: "",
        type: "",
        description: ""
    })

    const formRef = useRef()

    const model = SchemaModel({
        Description: StringType().isRequired("Set a Skill!")
    })

    const formClick = async => {
        if (!formRef.current.check()) {
            console.error('form.error');
            return;
        }
        let fName = formValue.name
        let fType = formValue.type
        let fDescription = formValue.description

        console.log(`New Skill Added: `, `Name: ${fName}`, `Type: ${fType}`, `Description: ${fDescription}`)

        let req = await fetch(`http://localhost:3000/skills`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: fName,
                type: fType,
                description: fDescription
            })
        })
        setFormValue(defaultFormValue)
        toaster.push(message)
    }

    const defaultFormValue = {
        name: '',
        type: '',
        description: ''
    }

    return (
        <>
            <h1 style={{ margin: 40 }}>New Skill</h1>
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
                    <Form.HelpText tooltip>Contact Name is required</Form.HelpText>
                </Form.Group>
                <Form.Group controlId='type'>
                    <Form.ControlLabel>Type</Form.ControlLabel>
                    <Form.Control name='type' />
                    <Form.HelpText tooltip>Type</Form.HelpText>
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

export default NewSkill;