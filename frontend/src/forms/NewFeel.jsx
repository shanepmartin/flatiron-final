import { useRef, forwardRef } from "react"
import { Form, Input, Button, ButtonToolbar, Popover, Whisper } from 'rsuite'
import { SchemaModel, StringType } from "schema-typed"


// input area for the feely feels...
const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const NewFeel = () => {

    const handleFeelSubmit = async (e) => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/feels`, {
            method: "POST",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                date: formRef.current.root[0].value,
                time: formRef.current.root[1].value,
                entry: formRef.current.root[2].value
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
    }

    const formRef = useRef()

    const model = SchemaModel({
        entry: StringType().isRequired("make an entry, share your feels!")
    })

    return (
        <>
            <h1 class="form" style={{ margin: 40 }}>New Feel</h1>
            <Form 
                style={{ margin: 40 }}
                ref={formRef}
                model={model}
                onSubmit={handleFeelSubmit}
                fluid
            >
                <Form.Group controlId='date'>
                    <Form.ControlLabel>Date</Form.ControlLabel>
                    <Form.Control name='date' />
                    <Form.HelpText tooltip>Date</Form.HelpText>
                </Form.Group>
                <Form.Group controlId='time'>
                    <Form.ControlLabel>Time</Form.ControlLabel>
                    <Form.Control name='time' />
                    <Form.HelpText tooltip>Time</Form.HelpText>
                </Form.Group>
                <Form.Group controlId='entry'>
                    <Form.ControlLabel>Entry</Form.ControlLabel>
                    <Form.Control rows={13} name='entry' accepter={Textarea} />
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