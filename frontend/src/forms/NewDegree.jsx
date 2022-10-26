import { useRef, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Form, Button, ButtonToolbar, Popover, Whisper } from 'rsuite'
import { SchemaModel, StringType } from "schema-typed"

const NewDegree = () => {

    const { id } = useParams()

    const [school, setSchool] = useState()

    const fetchSchools = () => {
        fetch(`http://localhost:3000/schools/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((res) => res.json())
            .then((res) => {
                console.log('this is the user school we will assign a degree to...', res)
                setSchool(res)
            })
    }

    useEffect(() => {
        fetchSchools();

    }, []);

    const handleDegreeSubmit = async (e) => {
        let req = await fetch(`http://localhost:3000/degrees/new/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formRef.current.root[0].value,
                level: formRef.current.root[1].value,
            })
        })
        let res = await req.json()
        console.log('res', res)
    }


    const formRef = useRef()

    const model = SchemaModel({
        name: StringType().isRequired("please enter the name of your degree"),
        level: StringType().isRequired("please enter the degree level you attained"),
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