import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";

import { Container, Header, Sidebar, Sidenav, Content, Navbar, Nav, Button } from 'rsuite';
import CogIcon from '@rsuite/icons/legacy/Cog';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import DashboardIcon from '@rsuite/icons/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';

import Profile from './Profile';

import { logout } from "../auth/UserState"

const DashBoardSideBar = () => {

    let navigate = useNavigate()

    const dispatch = useDispatch()

    const headerStyles = {
        padding: 18,
        fontSize: 16,
        height: 56,
        background: '#34c3ff',
        color: ' #fff',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    };

    const NavToggle = ({ expand, onChange }) => {
        return (
            <Navbar appearance="subtle" className="nav-toggle">
                <Nav>
                    <Nav.Menu
                        noCaret
                        placement="topStart"
                        trigger="click"
                        title={<CogIcon style={{ width: 20, height: 20 }} size="sm" />}
                    >
                        <Nav.Item>Settings</Nav.Item>
                        <Nav.Item>Sign out</Nav.Item>
                    </Nav.Menu>
                </Nav>

                <Nav pullRight>
                    <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
                        {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
                    </Nav.Item>
                </Nav>
            </Navbar>
        );
    };

    const [expand, setExpand] = useState(true);
    return (
        <div className="show-fake-browser sidebar-page">
            <Container>
                <Sidebar
                    style={{ display: 'flex', flexDirection: 'column' }}
                    width={expand ? 260 : 56}
                    collapsible
                >
                    <Sidenav.Header>
                        <div style={headerStyles}>
                            <span style={{ marginLeft: 12 }}>BackPocket</span>
                        </div>
                    </Sidenav.Header>
                    <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
                        <Sidenav.Body>
                            <Nav>
                                <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
                                    Dashboard
                                </Nav.Item>
                                <Nav.Menu
                                    eventKey="2"
                                    trigger="hover"
                                    title="Goals"
                                    placement="rightStart"
                                > Goals: 
                                    <Nav.Item eventKey="2-1">Objectives:  </Nav.Item>
                                    <Nav.Item eventKey="2-2">Trips: </Nav.Item>
                                </Nav.Menu>
                                <Nav.Menu
                                    eventKey="3"
                                    trigger="hover"
                                    title="Achievements"
                                    placement="rightStart"
                                > Achievements:
                                    <Nav.Item eventKey="3-1">Skills: </Nav.Item>
                                    <Nav.Item eventKey="3-2">Journeys: </Nav.Item>
                                </Nav.Menu>
                                <Nav.Item title="Feels" eventKey="4" onClick={() => navigate('/feels')}>
                                    Feels: 
                                </Nav.Item>
                                <Nav.Item title="Contacts" eventKey="5" onClick={() => navigate('/contacts')}>
                                    Contacts: 
                                </Nav.Item>
                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                    <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
                </Sidebar>

                <Container>
                    <Header>
                        <h2>BackPocket</h2>
                    </Header>
                </Container>
            </Container>
            <Container>
                <Nav pullRight>
                    <Nav.Item>
                        <Button
                            onClick={() => {
                                localStorage.clear();
                                dispatch(logout())
                                navigate("/")
                            }}
                        >
                            Logout
                        </Button>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
    );
}

export default DashBoardSideBar;