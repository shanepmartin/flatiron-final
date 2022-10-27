import { useRef, forwardRef } from "react"
import { Form, Input, Button, ButtonToolbar, Popover, Whisper, Container } from 'rsuite'
import { SchemaModel, StringType } from "schema-typed"

const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const NewGoal = () => {

    const handleGoalSubmit = async (e) => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/goals`, {
            method: "POST",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formRef.current.root[0].value,
                date: formRef.current.root[1].value,
                category: formRef.current.root[2].value,
                description: formRef.current.root[3].value,
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
            <Container>
                <Form 
                    className="form-new"
                    ref={formRef}
                    onSubmit={handleGoalSubmit}
                    fluid
                >
                    <h1 className="form-new-heading">New Goal</h1>
                    <br>
                    </br>
                    <Form.Group controlId='name'>
                        <Form.ControlLabel><h2>name</h2></Form.ControlLabel>
                        <Form.Control 
                            name='name'
                            size='lg'
                            placeholder="please enter the name of the goal you want to achieve..." 
                        />
                    </Form.Group>
                    <Form.Group controlId='date'>
                        <Form.ControlLabel><h2>date</h2></Form.ControlLabel>
                        <Form.Control 
                            name='date'
                            size='lg'
                            placeholder="please enter today's date..." 
                        />
                    </Form.Group>
                    <Form.Group controlId='category'>
                        <Form.ControlLabel><h2>category</h2></Form.ControlLabel>
                        <Form.Control 
                            name='category'
                            size='lg'
                            placeholder="please enter the category of your goal..." 
                        />
                    </Form.Group>
                    <Form.Group controlId='description'>
                        <Form.ControlLabel><h2>description</h2></Form.ControlLabel>
                        <Form.Control 
                            rows={13} 
                            name='entry' 
                            accepter={Textarea}
                            placeholder="please enter a description of your goal..." 
                        />
                    </Form.Group>
                    <ButtonToolbar>
                        <Whisper
                            placement='right'
                            trigger='active'
                            speaker={<Popover arrow={false}>Submitted!</Popover>}>
                            <Button 
                                appearance='subtle' 
                                type='submit'
                                size='lg'
                            >
                                <h2>submit</h2>
                            </Button>
                        </Whisper>
                    </ButtonToolbar>
                </Form>
            </Container>
        </>
    )
}

export default NewGoal;