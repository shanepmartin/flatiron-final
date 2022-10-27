import { useRef, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Form, Button, ButtonToolbar, Popover, Whisper, Container, Grid, Col, Row, Panel } from 'rsuite'
import { SchemaModel, StringType } from "schema-typed"

import DashboardHeader from "../dashboard/DashboardHeader"
import DashBoardSideBar from "../dashboard/DashboardSideBar"

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
                                    onSubmit={handleDegreeSubmit}
                                    fluid
                                >
                                    <h1>Add Degree</h1>
                                    <br>
                                    </br>
                                    <Form.Group controlId='name'>
                                        <Form.ControlLabel><h2>name</h2></Form.ControlLabel>
                                        <Form.Control 
                                            name='name' 
                                            size="lg"
                                            placeholder="please enter the name of the degree you received..."
                                        />
                                    </Form.Group>
                                    <br>
                                    </br>
                                    <Form.Group controlId='date'>
                                        <Form.ControlLabel><h2>level</h2></Form.ControlLabel>
                                        <Form.Control 
                                            name='date'
                                            size="lg"
                                            placeholder="please enter the level of the degree you received..." 
                                        />
                                    </Form.Group>
                                    <ButtonToolbar>
                                        <Whisper
                                            placement='right'
                                            trigger='active'
                                            speaker={<Popover arrow={false}>degree submitted!</Popover>}>
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

export default NewDegree;