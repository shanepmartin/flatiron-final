import { useRef } from "react"
import { Form, Button, ButtonToolbar, Popover, Whisper, Container, Panel } from 'rsuite'
import { SchemaModel, StringType } from "schema-typed"

const NewSchool = () => {

    const handleSchoolSubmit = async (e) => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/schools`, {
            method: "POST",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formRef.current.root[0].value,
                location: formRef.current.root[1].value,
                date: formRef.current.root[2].value,
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
                        onSubmit={handleSchoolSubmit}
                        fluid
                    >
                        <Panel bordered>
                            <h1 className="form-new-heading">Add Studies</h1>
                        </Panel>
                        <br>
                        </br>
                        <Form.Group controlId='name'>
                            <Form.ControlLabel><h2>school name</h2></Form.ControlLabel>
                            <Form.Control 
                                name='name'
                                size='lg'
                                placeholder="please enter the name of the school you attended..." 
                            />
                        </Form.Group>
                        <br>
                        </br>
                        <Form.Group controlId='location'>
                            <Form.ControlLabel><h2>location</h2></Form.ControlLabel>
                            <Form.Control 
                                name='location'
                                size='lg'
                                placeholder="please enter the location of the school you attended..." 
                            />
                        </Form.Group>
                        <br>
                        </br>
                        <Form.Group controlId='date'>
                            <Form.ControlLabel><h2>dates attended</h2></Form.ControlLabel>
                            <Form.Control 
                                name='date'
                                size='lg'
                                placeholder="please enter the date range you attended the school..." 
                            />
                        </Form.Group>
                        <ButtonToolbar>
                            <Whisper
                                placement='right'
                                trigger='active'
                                speaker={<Popover arrow={false}>studies submitted!</Popover>}>
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

export default NewSchool;