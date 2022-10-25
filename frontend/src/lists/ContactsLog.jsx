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

    const styles = {
        display: 'inline-table'
    }

    return (
        <>
            <DashboardHeader />
            <DashBoardSideBar />
            <div className="list" style={styles}> Contacts Log
                {contactsArray.map((contact, index, id) => {
                    return (
                        <Panel>
                            <List bordered>
                                <div className="list-heading"> {index + 1}: {contact.name} 
                                    <Button appearance="default" placement="right" onClick={() => navigate(`/contacts/${contact.id}`)}>Update</Button>
                                    <IconButton icon={<WarningRoundIcon />} placement="right" appearance="link" active></IconButton>
                                    <List 
                                        key={index} 
                                        bordered
                                    >
                                        <List.Item>name: {contact.name}</List.Item>
                                        <List.Item>phone: {contact.phone_number}</List.Item>
                                        <List.Item>address: {contact.address}</List.Item>
                                    </List>
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