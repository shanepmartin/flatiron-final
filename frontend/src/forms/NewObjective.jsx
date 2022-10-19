import { useRef, forwardRef } from "react"
import { Form, Input, Button, ButtonToolbar, Popover, Whisper } from 'rsuite'
import { SchemaModel, StringType } from "schema-categoryd"


// input area to describe your objective...
const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const NewObjective = () => {
    
    const handleObjectiveSubmit = async (e) => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/objectives`, {
            method: "POST",
            headers: {
                token: token,
                "Content-category": "application/json"
            },
            body: JSON.stringify({
                name: formRef.current.root[0].value,
                category: formRef.current.root[1].value,
                description: formRef.current.root[2].value
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
    }

    const formRef = useRef()

    const model = SchemaModel({
        name: StringType().isRequired("name your objective !"),
        category: StringType().isRequired("what kind of objective is it?"),
        description: StringType().isRequired("describe all things about your objective!")
    })

    return (
        <>
            <h1 style={{ margin: 40 }}>New Objective</h1>
            <Form
                style={{ margin: 40 }}
                ref={formRef}
                model={model}
                onSubmit={handleObjectiveSubmit}
                fluid
            >
                <Form.Group controlId='name'>
                    <Form.ControlLabel>Name</Form.ControlLabel>
                    <Form.Control name='name' />
                    <Form.HelpText tooltip>Name of Objective</Form.HelpText>
                </Form.Group>
                <Form.Group controlId='category'>
                    <Form.ControlLabel>category</Form.ControlLabel>
                    <Form.Control name='category' />
                    <Form.HelpText tooltip>category of Objective</Form.HelpText>
                </Form.Group>
                <Form.Group controlId='description'>
                    <Form.ControlLabel>Description</Form.ControlLabel>
                    <Form.Control rows={13} name='description' accepter={Textarea} />
                    <Form.HelpText tooltip>Description of Objective</Form.HelpText>
                </Form.Group>
                <ButtonToolbar>
                    <Whisper
                        placement='right'
                        trigger='active'
                        speaker={<Popover arrow={false}>Clicked</Popover>}>
                        <Button appearance='ghost' category='submit'>
                            Submit
                        </Button>

                    </Whisper>

                </ButtonToolbar>

            </Form>
        </>
    )
}

export default NewObjective;