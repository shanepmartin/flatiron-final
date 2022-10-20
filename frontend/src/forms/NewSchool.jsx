import { useRef } from "react"
import { Form, Button, ButtonToolbar, Popover, Whisper } from 'rsuite'
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

    const model = SchemaModel({
        name: StringType().isRequired(" please enter your school's name "),
        location: StringType().isRequired(" please enter your school's location "),
        date: StringType().isRequired(" please enter the dates you attended ")
    })

    return (
        <>
            <h1 class="form" style={{ margin: 40 }}>New School</h1>
            <Form 
                style={{ margin: 40 }}
                ref={formRef}
                model={model}
                onSubmit={handleSchoolSubmit}
                fluid
            >
                <Form.Group controlId='name'>
                    <Form.ControlLabel>School</Form.ControlLabel>
                    <Form.Control name='name' />
                    <Form.HelpText tooltip>School Name</Form.HelpText>
                </Form.Group>
                <Form.Group controlId='location'>
                    <Form.ControlLabel>location</Form.ControlLabel>
                    <Form.Control name='location' />
                    <Form.HelpText tooltip>location</Form.HelpText>
                </Form.Group>
                <Form.Group controlId='date'>
                    <Form.ControlLabel>date</Form.ControlLabel>
                    <Form.Control name='date' />
                    <Form.HelpText tooltip>dates attended</Form.HelpText>
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

export default NewSchool;