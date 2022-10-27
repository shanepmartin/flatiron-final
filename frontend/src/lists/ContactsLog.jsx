import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Panel, PanelGroup, Grid, Col, Row, Button } from 'rsuite';
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
                    <Col sm={24} md={8} lg={6}>
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
                    <Col sm={12} md={8} lg={12}>
                        <Panel>
                            <h1 className="log-title">Contacts Log</h1>
                        </Panel>
                            {contactsArray.map((contact, index) => {
                            return (
                                <PanelGroup accordion bordered>
                                    <Panel
                                        key={index}
                                        className="panel"
                                        header={<h2>[{index + 1}] {contact.name}</h2>}
                                    >
                                        <h3>name: {contact.name}</h3>
                                        <br>
                                        </br>
                                        <h3>phone: {contact.phone_number}</h3>
                                        <br>
                                        </br>
                                        <h3>address: {contact.address}</h3>
                                        <br>
                                        </br>
                                        <Button
                                            appearance="default"
                                            placement="right"
                                            onClick={() => navigate(`/contacts/${contact.id}`)}
                                        >Update Contact
                                        </Button>
                                    </Panel>
                                </PanelGroup>
                            );
                            })}
                        </Col>
                    </Row>
                </Grid>
        </>
    )
}

export default ContactsLog;