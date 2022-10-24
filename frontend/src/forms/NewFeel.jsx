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

    const styles = {
        display: 'inline-table'
    }

    return (
        <>
        <div className="form-heading-div" style={styles}>
                <h1 className="form-new-heading">New Feel</h1>
                <Form 
                    className="form-new"
                    ref={formRef}
                    model={model}
                    onSubmit={handleFeelSubmit}
                    fluid
                >
                    <Form.Group controlId='date'>
                        <Form.ControlLabel>date</Form.ControlLabel>
                        <Form.Control name='date' />
                        <Form.HelpText tooltip>please enter today's date</Form.HelpText>
                    </Form.Group>
                    <Form.Group controlId='time'>
                        <Form.ControlLabel>time</Form.ControlLabel>
                        <Form.Control name='time' />
                        <Form.HelpText tooltip>please enter the current time</Form.HelpText>
                    </Form.Group>
                    <Form.Group controlId='entry'>
                        <Form.ControlLabel>entry</Form.ControlLabel>
                        <Form.Control rows={13} name='entry' accepter={Textarea} />
                        <Form.HelpText tooltip>let out your feely feels</Form.HelpText>
                    </Form.Group>
                    <ButtonToolbar>
                        <Whisper
                            placement='right'
                            trigger='active'
                            speaker={<Popover arrow={false}>Clicked</Popover>}>
                            <Button appearance='default' type='submit'>
                                Submit
                            </Button>
                        </Whisper>
                    </ButtonToolbar>
                </Form>
            </div>
        </>
    )
}

export default NewFeel;