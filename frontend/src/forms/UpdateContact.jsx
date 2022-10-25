import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { useRef } from "react"
import { Form, Button, ButtonToolbar, Popover, Whisper } from 'rsuite'
import { SchemaModel, StringType } from "schema-typed"

import DashboardHeader from "../dashboard/DashboardHeader"
import DashBoardSideBar from "../dashboard/DashboardSideBar"

const UpdateContact = () => {

    const navigate = useNavigate();

    // onClick = {() => navigate(`/contacts/update/${id}`)} 

    const user = useSelector((state) => state.user)

    const [contacts, setContacts] = useState([]);

    const [contact, setContact] = useState();

    const { id } = useParams()

    // fetch the USER's list of contacts to select from...

    const fetchContacts = () => {
        // let token = localStorage.getItem("token");
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

    const model = SchemaModel({
        name: StringType().isRequired("update contact's name"),
        phone_number: StringType().isRequired("update contact's phone number"),
        address: StringType().isRequired("update contact's address")
    })

    const styles = {
        display: 'inline-table'
    }

    return (
        <>
            <DashboardHeader />
            <DashBoardSideBar />
            <div className="update-form-div" style={styles}>
                <h1 className="form-update-heading">Update Contact</h1>
                <Form
                    onSubmit={updateName}
                    className="form-update"
                    ref={formRef}
                    model={model}
                    fluid
                >
                    <Form.Group controlId='update-form'>
                        <Form.ControlLabel>Update Name</Form.ControlLabel>
                        <Form.Control name='update-phone' />
                        <Form.HelpText tooltip>"update contact's name"</Form.HelpText>
                    </Form.Group>
                    <ButtonToolbar>
                        <Whisper
                            placement='right'
                            trigger='active'
                            speaker={<Popover arrow={false}>Submitted!</Popover>}>
                            <Button appearance='default' type='submit'>
                                Submit
                            </Button>
                        </Whisper>
                    </ButtonToolbar>
                </Form>
                <Form
                    onSubmit={updatePhone}
                    className="form-update"
                    ref={formRef}
                    model={model}
                    fluid
                >
                    <Form.Group controlId='update-form'>
                        <Form.ControlLabel>Update Phone Number</Form.ControlLabel>
                        <Form.Control name='update-phone' onSubmit={updatePhone}/>
                        <Form.HelpText tooltip>"update contact's phone number"</Form.HelpText>
                    </Form.Group>
                    <ButtonToolbar>
                        <Whisper
                            placement='right'
                            trigger='active'
                            speaker={<Popover arrow={false}>Submitted!</Popover>}>
                            <Button appearance='default' type='submit'>
                                Submit
                            </Button>
                        </Whisper>
                    </ButtonToolbar>
                </Form>
                <Form
                    onSubmit={updateAddress}
                    className="form-update"
                    ref={formRef}
                    model={model}
                    fluid
                >
                    <Form.Group controlId='update-form'>
                        <Form.ControlLabel>Update Address</Form.ControlLabel>
                        <Form.Control name='update-address' onSubmit={updateAddress}/>
                        <Form.HelpText tooltip>"update contact's address"</Form.HelpText>
                    </Form.Group>
                    <ButtonToolbar>
                        <Whisper
                            placement='right'
                            trigger='active'
                            speaker={<Popover arrow={false}>Submitted!</Popover>}>
                            <Button appearance='default' type='submit'>
                                Submit
                            </Button>
                        </Whisper>
                    </ButtonToolbar>
                </Form>
            </div>
        </>
    )
}

export default UpdateContact;