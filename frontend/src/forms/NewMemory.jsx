import { useRef, forwardRef, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Form, Input, Button, ButtonToolbar, Popover, Whisper } from 'rsuite'
import { SchemaModel, StringType } from "schema-typed"

import DashboardHeader from "../dashboard/DashboardHeader"
import DashBoardSideBar from "../dashboard/DashboardSideBar"

const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const NewMemory = () => {

    const { id } = useParams()

    const [trip, setTrip] = useState();

    const fetchTrips = () => {
        fetch(`http://localhost:3000/trips/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then((res) => res.json())
        .then((res) => {
            console.log('this is the user trip we are assign a memory to...', res)
            setTrip(res)
        })
    }

    useEffect(() => {
        fetchTrips();

    }, []);

    const handleMemorySubmit = async () => {
        // let token = localStorage.getItem("token");
        let req = await fetch(`http://localhost:3000/memories/new/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formRef.current.root[0].value,
                description: formRef.current.root[1].value,
            })
        })
        let res = await req.json()
        console.log('res', res)
    }


    const formRef = useRef()

    const model = SchemaModel({
        name: StringType().isRequired("please enter a name"),
        description: StringType().isRequired("please enter a description")
    })

    const styles = {
        display: 'inline-table'
    }

    return (
        <>
            <DashboardHeader />
            <DashBoardSideBar />
            <div className="form-heading-div" style={styles}>
                <h1 className="form-new-heading">New Memory</h1>
                <Form 
                    className="form-new"
                    ref={formRef}
                    model={model}
                    onSubmit={handleMemorySubmit}
                    fluid
                >
                    <Form.Group controlId='name'>
                        <Form.ControlLabel><h2>memory</h2></Form.ControlLabel>
                        <Form.Control name='name' />
                        <Form.HelpText tooltip>please give your memory a name</Form.HelpText>
                    </Form.Group>
                    <Form.Group controlId='description'>
                        <Form.ControlLabel><h2>description</h2></Form.ControlLabel>
                        <Form.Control rows={13} name='entry' accepter={Textarea} />
                        <Form.HelpText tooltip>please provide a description of your memory</Form.HelpText>
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

export default NewMemory;