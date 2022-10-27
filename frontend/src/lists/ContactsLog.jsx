import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { List, Panel, Button, IconButton } from 'rsuite';
import { useNavigate } from "react-router-dom";

import DashboardHeader from "../dashboard/DashboardHeader"
import DashBoardSideBar from "../dashboard/DashboardSideBar"

import WarningRoundIcon from '@rsuite/icons/WarningRound';

const ContactsLog = () => {

    const navigate = useNavigate();

    const user = useSelector((state) => state.user)

    const [contactsArray, setContactList] = useState([])

    const getContactsList = () => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/contacts_list/${user.id}`, {
            method: "GET",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
        })
        .then((res) => res.json())
        .then((list) => {
            console.log('list of contacts', list)
            setContactList(list)
        })
    }

    useEffect(() => {
        getContactsList();
    }, []);


    // const deleteContact = async () => {
    //     let req = await fetch(`http://localhost:3000/contacts/${id}`, {
    //         method: "DELETE",
    //     })
    //     let res = await req.json();
    //     console.log('the contact we are deleting...', res)
    //     deleteContact()
    // }

    const styles = {
        display: 'inline-table'
    }

    const [activeKey, setActiveKey] = useState('1');
    const [openKeys, setOpenKeys] = useState(['3', '4']);
    const [expanded, setExpand] = useState(true);

    return (
        <>
            <DashboardHeader
                appearance="subtle"
                activeKey={activeKey}
                onSelect={setActiveKey}
            />
            <br>
            </br>
            <DashBoardSideBar
                activeKey={activeKey}
                openKeys={openKeys}
                onOpenChange={setOpenKeys}
                onSelect={setActiveKey}
                expanded={expanded}
                onExpand={setExpand}
                appearance="subtle"
            />
            <div className="log" style={styles}>
                <h1 className="log-title">Contacts Log</h1>
                {contactsArray.map((contact, index) => {
                    return (
                        <Panel>
                            <List bordered>
                                <div className="list"> 
                                    <h2>{index + 1}: {contact.name}</h2>
                                    <List 
                                        key={index} 
                                        bordered
                                    >
                                        <List.Item>
                                            <h3>name: {contact.name}</h3>
                                        </List.Item>
                                        <List.Item>
                                            <h3>phone: {contact.phone_number}</h3>
                                        </List.Item>
                                        <List.Item>
                                            <h3>address: {contact.address}</h3>
                                        </List.Item>
                                    </List>
                                    <Button 
                                        appearance="default" 
                                        placement="right" 
                                        onClick={() => navigate(`/contacts/${contact.id}`)}
                                    >Update
                                    </Button>
                                </div>
                            </List>
                        </Panel>
                    );
                })}
            </div>
        </>
    )
}

export default ContactsLog;