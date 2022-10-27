import { useRef, forwardRef, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Form, Button, ButtonToolbar, Popover, Whisper, Container, Grid, Col, Row, Panel, Input } from 'rsuite'
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

    const [activeKey, setActiveKey] = useState('1');
    const [openKeys, setOpenKeys] = useState(['3', '4']);
    const [expanded, setExpand] = useState(true);

    return (
        <>
            <Grid fluid>
                <DashboardHeader
                    appearance="subtle"
                    activeKey={activeKey}
                    onSelect={setActiveKey}
                />
                <br>
                </br>
                <Row>
                    <Col xs={8}>
                        <DashBoardSideBar
                            activeKey={activeKey}
                            openKeys={openKeys}
                            onOpenChange={setOpenKeys}
                            onSelect={setActiveKey}
                            expanded={expanded}
                            onExpand={setExpand}
                            appearance="subtle"
                        />
                    </Col>
                    <Col xs={8}>
                        <Panel bordered>
                            <Container>
                                <Form 
                                    className="form-new"
                                    ref={formRef}
                                    onSubmit={handleMemorySubmit}
                                    fluid
                                >
                                    <h1 className="form-new-heading">Add Memory</h1>
                                    <br>
                                    </br>
                                    <Form.Group controlId='name'>
                                        <Form.ControlLabel><h2>memory</h2></Form.ControlLabel>
                                        <Form.Control 
                                            name='name'
                                            placeholder="please give your memory a name..." 
                                        />
                                    </Form.Group>
                                    <br>
                                    </br>
                                    <Form.Group controlId='description'>
                                        <Form.ControlLabel><h2>description</h2></Form.ControlLabel>
                                        <Form.Control 
                                        rows={13} 
                                        name='entry' 
                                        accepter={Textarea} 
                                        placeholder="please provide a description of your memory..."
                                        />
                                    </Form.Group>
                                    <ButtonToolbar>
                                        <Whisper
                                            placement='right'
                                            trigger='active'
                                            speaker={<Popover arrow={false}>memory submitted!</Popover>}>
                                            <Button appearance='subtle' type='submit'>
                                                <h3>submit</h3>
                                            </Button>
                                        </Whisper>
                                    </ButtonToolbar>
                                </Form>
                            </Container>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </>
    )
}

export default NewMemory;