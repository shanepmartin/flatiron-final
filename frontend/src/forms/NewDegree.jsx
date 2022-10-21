import { useRef } from "react"
import { Form, Button, ButtonToolbar, Popover, Whisper } from 'rsuite'
import { SchemaModel, StringType } from "schema-typed"

const NewDegree = () => {

    const handleDegreeSubmit = async (e) => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/degrees`, {
            method: "POST",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formRef.current.root[0].value,
                level: formRef.current.root[1].value,
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
        level: StringType().isRequired("please enter the degree level"),
    })

    return (
        <>
            <h1 style={{ margin: 40 }}>New Degree</h1>
            <Form 
                style={{ margin: 40 }}
                ref={formRef}
                model={model}
                onSubmit={handleDegreeSubmit}
                fluid
            >
                <Form.Group controlId='name'>
                    <Form.ControlLabel>Degree</Form.ControlLabel>
                    <Form.Control name='name' />
                    <Form.HelpText tooltip>Degree</Form.HelpText>
                </Form.Group>
                <Form.Group controlId='date'>
                    <Form.ControlLabel>level</Form.ControlLabel>
                    <Form.Control name='date' />
                    <Form.HelpText tooltip>level</Form.HelpText>
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

export default NewDegree;