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

    const styles = {
        display: 'inline-table'
    }

    return (
        <>
            <div className="form-heading-div" style={styles}>
            <h1 className="form-new-heading">New Degree</h1>
                <Form 
                    className="form-new"
                    ref={formRef}
                    model={model}
                    onSubmit={handleDegreeSubmit}
                    fluid
                >
                    <Form.Group controlId='name'>
                        <Form.ControlLabel><h2>name of degree</h2></Form.ControlLabel>
                        <Form.Control name='name' />
                        <Form.HelpText tooltip>please enter the name of the degree you received </Form.HelpText>
                    </Form.Group>
                    <Form.Group controlId='date'>
                        <Form.ControlLabel><h2>level of degree</h2></Form.ControlLabel>
                        <Form.Control name='date' />
                        <Form.HelpText tooltip>please enter the level of the degree you received</Form.HelpText>
                    </Form.Group>
                    <ButtonToolbar>
                        <Whisper
                            placement='right'
                            trigger='active'
                            speaker={<Popover arrow={false}>Submitted!</Popover>}>
                            <Button appearance='subtle' type='submit'>
                                <h2>submit</h2>
                            </Button>
                        </Whisper>
                    </ButtonToolbar>
                </Form>
            </div>
        </>
    )
}

export default NewDegree;