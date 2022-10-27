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

    const styles = {
        display: 'inline-table'
    }

    return (
        <>
            <div className="form-heading-div" style={styles}>
                <h1 className="form-new-heading">New Studies</h1>
                <Form 
                    className="form-new"
                    ref={formRef}
                    model={model}
                    onSubmit={handleSchoolSubmit}
                    fluid
                >
                    <Form.Group controlId='name'>
                        <Form.ControlLabel><h2>school name</h2></Form.ControlLabel>
                        <Form.Control name='name' />
                        <Form.HelpText tooltip>please enter then name of the school you attended</Form.HelpText>
                    </Form.Group>
                    <Form.Group controlId='location'>
                        <Form.ControlLabel><h2>location</h2></Form.ControlLabel>
                        <Form.Control name='location' />
                        <Form.HelpText tooltip>please enter the location of the school you attended</Form.HelpText>
                    </Form.Group>
                    <Form.Group controlId='date'>
                        <Form.ControlLabel><h2>date</h2></Form.ControlLabel>
                        <Form.Control name='date' />
                        <Form.HelpText tooltip>please enter the date range you attended the school</Form.HelpText>
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

export default NewSchool;