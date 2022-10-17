import { useState, useEffect, forwardRef, useRef } from "react"

import { Form, Input, Button, ButtonToolbar, SelectPicker } from 'rsuite'
import { Popover, Whisper } from 'rsuite';
import { Message, useToaster } from 'rsuite'
import { Container, Header } from 'rsuite'

import userSlice from './UserState'

const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const newFeel = () => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [entry, setEntry] = useState('')

    const handleFeelSubmit = async (e) => {
        e.preventDefault();

        console.log('Feel', { date, time, entry })

        let req = await fetch(`http://localhost:3000/contacts`, {
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
        entry: 
    })
}