import { useRef, forwardRef } from "react"
import { Form, Input, Button, ButtonToolbar, Popover, Whisper, Container, Panel } from 'rsuite'
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

    return (
        <>
            <Panel bordered>
                <Container>
                    <Form 
                        className="form-new"
                        ref={formRef}
                        onSubmit={handleFeelSubmit}
                        fluid
                    >
                        <Panel>
                            <h1 className="form-new-heading">New Feel</h1>
                        </Panel>
                        <br>
                        </br>
                        <Form.Group controlId='date'>
                            <Form.ControlLabel><h2>date</h2></Form.ControlLabel>
                            <Form.Control 
                                name='date'
                                size='lg'
                                placeholder="please enter today's date..." 
                            />
                        </Form.Group>
                        <br>
                        </br>
                        <Form.Group controlId='time'>
                            <Form.ControlLabel><h2>time</h2></Form.ControlLabel>
                            <Form.Control 
                                name='time'
                                size='lg'
                                placeholder="please enter the current time..." 
                            />
                        </Form.Group>
                        <br>
                        </br>
                        <Form.Group controlId='entry'>
                            <Form.ControlLabel><h2>entry</h2></Form.ControlLabel>
                            <Form.Control 
                                rows={13} 
                                name='entry' 
                                accepter={Textarea}
                                size="lg"
                                placeholder="let out your feely feels..." 
                            />
                        </Form.Group>
                        <br>
                        </br>
                        <ButtonToolbar>
                            <Whisper
                                placement='right'
                                trigger='active'
                                speaker={<Popover arrow={false}>feels submitted!</Popover>}>
                                <Button appearance='subtle' type='submit'>
                                    <h3>submit</h3>
                                </Button>
                            </Whisper>
                        </ButtonToolbar>
                    </Form>
                </Container>
            </Panel>
        </>
    )
}

export default NewFeel;