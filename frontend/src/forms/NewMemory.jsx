import { useRef } from "react"
import { Form, Button, ButtonToolbar, Popover, Whisper } from 'rsuite'
import { SchemaModel, StringType } from "schema-typed"

const NewMemory = () => {

    const handleMemorySubmit = async (e) => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/memories`, {
            method: "POST",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formRef.current.root[0].value,
                description: formRef.current.root[1].value,
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
    }


    const formRef = useRef()

    const model = SchemaModel({
        name: StringType().isRequired("please enter a name"),
        description: StringType().isRequired("please enter a description")
    })

    return (
        <>
            <h1 class="form" style={{ margin: 40 }}>New Memory</h1>
            <Form 
                style={{ margin: 40 }}
                ref={formRef}
                model={model}
                onSubmit={handleMemorySubmit}
                fluid
            >
                <Form.Group controlId='name'>
                    <Form.ControlLabel>Memory</Form.ControlLabel>
                    <Form.Control name='name' />
                    <Form.HelpText tooltip>Memory</Form.HelpText>
                </Form.Group>
                <Form.Group controlId='description'>
                    <Form.ControlLabel>description</Form.ControlLabel>
                    <Form.Control name='description' />
                    <Form.HelpText tooltip>description</Form.HelpText>
                </Form.Group>
                <ButtonToolbar>
                    <Whisper
                        placement='right'
                        trigger='active'
                        speaker={<Popover arrow={false}>Submitted!</Popover>}>
                        <Button appearance='ghost' type='submit'>
                            Submit
                        </Button>

                    </Whisper>

                </ButtonToolbar>

            </Form>
        </>
    )
}

export default NewMemory;