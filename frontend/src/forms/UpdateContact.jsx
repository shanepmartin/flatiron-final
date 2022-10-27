import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { useRef } from "react"
import { Form, Button, ButtonToolbar, Popover, Whisper, Container, Row, Col, Grid } from 'rsuite'
import { SchemaModel, StringType } from "schema-typed"

import DashboardHeader from "../dashboard/DashboardHeader"
import DashBoardSideBar from "../dashboard/DashboardSideBar"

const UpdateContact = () => {

    const navigate = useNavigate();

    const user = useSelector((state) => state.user)

    const [contacts, setContacts] = useState([]);

    const [contact, setContact] = useState();

    const { id } = useParams()

    const fetchContacts = () => {
        fetch(`http://localhost:3000/contacts/${id}`, {
            method: "GET", 
            headers: {
                // token: token,
                "Content-Type": "application/json"
            },
        })
        .then((res) => res.json())
        .then((res) => {
            console.log('this is the user contact we are modifying...', res)
            setContact(res)
        })
    }

    useEffect(() => {
        fetchContacts();
        console.log(contact)
    }, []);


    const updateName = async () => {
        let req = await fetch(`http://localhost:3000/contacts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formRef.current.root[0].value
            }),
        })
        let res = await req.json()
        console.log('res', res)
        updateName()
    }

    const updatePhone = async () => {
        let req = await fetch(`http://localhost:3000/contacts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                phone_number: formRef.current.root[0].value
            })
        })
        let res = await req.json()
        console.log('res', res)
        updatePhone()
    }

    const updateAddress = async () => {
        let req = await fetch(`http://localhost:3000/contacts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                address: formRef.current.root[0].value
            })
        })
        let res = await req.json()
        console.log('res', res)
        updateAddress()
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
                        <Container>
                            <Form
                                onSubmit={updateName}
                                className="form-update"
                                ref={formRef}
                                fluid
                            >
                                <h1 className="form-update-heading">Update Contact</h1>
                                <br>
                                </br>
                                <Form.Group controlId='update-form'>
                                    <Form.ControlLabel><h2>name</h2></Form.ControlLabel>
                                    <Form.Control 
                                    name='update-name'
                                    size='lg'
                                    placeholder="update contact's name..." />
                                </Form.Group>
                                <ButtonToolbar>
                                    <Whisper
                                        placement='right'
                                        trigger='active'
                                        speaker={<Popover arrow={false}>name updated!</Popover>}>
                                        <Button appearance='subtle' type='submit'>
                                            <h4>submit</h4>
                                        </Button>
                                    </Whisper>
                                </ButtonToolbar>
                            </Form>
                            <Form
                                onSubmit={updatePhone}
                                className="form-update"
                                ref={formRef}
                                fluid
                            >
                                <Form.Group controlId='update-form'>
                                    <Form.ControlLabel><h2>phone number</h2></Form.ControlLabel>
                                    <Form.Control 
                                        name='update-phone' 
                                        onSubmit={updatePhone}
                                        size='lg'
                                        placeholder="update contact's phone number..."
                                    />
                                </Form.Group>
                                <ButtonToolbar>
                                    <Whisper
                                        placement='right'
                                        trigger='active'
                                        speaker={<Popover arrow={false}>phone number updated!</Popover>}>
                                        <Button appearance='subtle' type='submit'>
                                            <h4>submit</h4>
                                        </Button>
                                    </Whisper>
                                </ButtonToolbar>
                            </Form>
                            <Form
                                onSubmit={updateAddress}
                                className="form-update"
                                ref={formRef}
                                fluid
                            >
                                <Form.Group controlId='update-form'>
                                    <Form.ControlLabel><h2>address</h2></Form.ControlLabel>
                                    <Form.Control 
                                        name='update-address' 
                                        onSubmit={updateAddress}
                                        size='lg'
                                        placeholder="update contact's address..."
                                    />
                                </Form.Group>
                                <ButtonToolbar>
                                    <Whisper
                                        placement='right'
                                        trigger='active'
                                        speaker={<Popover arrow={false}>address updated!</Popover>}>
                                        <Button appearance='subtle' type='submit'>
                                            <h4>submit</h4>
                                        </Button>
                                    </Whisper>
                                </ButtonToolbar>
                            </Form>
                        </Container>
                    </Col>
                </Row>
            </Grid>
        </>
    )
}

export default UpdateContact;