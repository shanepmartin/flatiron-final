import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { List, Panel } from 'rsuite';

const ContactsLog = () => {

    const user = useSelector((state) => state.user)

    const [contactsArray, setContactList] = useState([])

    const getcontactsList = () => {
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
        getcontactsList();
    }, []);

    return (
        <>
            <div className="list-title"> Contacts Log
                {contactsArray.map((contact, index) => {
                    return (
                        <Panel>
                            <List bordered>
                                <div className="list-heading"> {index + 1}: {contact.name}
                                    <List key={index} bordered>
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