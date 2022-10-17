import { useState, useEffect, forwardRef, useRef } from "react"

import { Form, Input, Button, ButtonToolbar, SelectPicker } from 'rsuite'
import { Popover, Whisper } from 'rsuite';
import { Message, useToaster } from 'rsuite'
import { Container, Header } from 'rsuite'

import userSlice from './UserState'

const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const NewFeel = () => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [entry, setEntry] = useState('')

    const handleFeelSubmit = async (e) => {
        e.preventDefault();

        console.log('Feel', { date, time, entry })

        let req = await fetch(`http://localhost:3000/feels`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                date: date,
                time: time,
                entry: entry
            })
        })

        setDate('')
        setTime('')
        setEntry('')
    }

    // R Suite Form

    const toaster = useToaster()

    const message = (
        <Message showIcon type="success">
            Feels Input !
        </Message>
    )

    const [value, setValue] = useState(null)

    const formValue, setFormValue = useState({
        date: "",
        time: "",
        entry: ""
    })

    const formRef = useRef()

    const model = SchemaModel({
        entry: StringType().isRequired("Make an entry!")
    })

    const formClick = async () => {
        if (!formRef.current.check()) {
            console.error('form error');
            return;
        }
        let fDate = formValue.date
        let fTime = formValue.time
        let fEntry = formValue.entry

        console.log(`New Entry Added: `, `Date: ${fDate}`, `Time: ${fTime}`, `Entry: ${fEntry} `)

        let req = await fetch(`http://localhost:3000/feels`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                date: fDate,
                time: fTime,
                entry: fEntry
            })
        })
        setFormValue(defaultFormValue)
        toaster.push(message)
    }

    const defaultFormValue = {
        date: '',
        time: '',
        entry: ''
    }

    return (
        <>
            <h1 style={{ margin: 40 }}>New Feel</h1>
            <Form
                style={{ margin: 40 }}
                ref={formRef}
                model={model}
                formValue={formValue}
                onChange={formValue => setFormValue(formValue)}
                onSubmit={formClick}
                fluid
            >
                <Form.Group controlId='date'>
                    <Form.ControlLabel>Date</Form.ControlLabel>
                    <Form.Control name='date' />
                    <Form.HelpText tooltip>Contact Name is required</Form.HelpText>
                </Form.Group>
                <Form.Group controlId='time'>
                    <Form.ControlLabel>Time</Form.ControlLabel>
                    <Form.Control name='time' />
                    <Form.HelpText tooltip>Phone Number</Form.HelpText>
                </Form.Group>
                <Form.Group controlId='feel'>
                    <Form.ControlLabel>Entry</Form.ControlLabel>
                    <Form.Control rows={13} name='feel' accepter={Textarea} />
                    <Form.HelpText tooltip>Entry</Form.HelpText>
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


export default NewFeel;