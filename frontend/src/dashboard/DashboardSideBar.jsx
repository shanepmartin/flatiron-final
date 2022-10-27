import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Sidenav, Nav, Container } from 'rsuite';

// sidebar icons...
import { Icon } from '@rsuite/icons';
import DashboardIcon from '@rsuite/icons/Dashboard';
import GrowthIcon from '@rsuite/icons/Growth';
import CheckOutlineIcon from '@rsuite/icons/CheckOutline';
import ExploreIcon from '@rsuite/icons/Explore';
import CreativeIcon from '@rsuite/icons/Creative';
import PeoplesIcon from '@rsuite/icons/Peoples';
import EditIcon from '@rsuite/icons/Edit';
import ImportIcon from '@rsuite/icons/Import';
import DocPassIcon from '@rsuite/icons/DocPass';

// rsuite sidebar styling...
const styles = {
    width: 360,
    display: 'inline-table',
};

const DashBoardSideBar = ({appearance}) => {

    let navigate = useNavigate()

    const [expanded, setExpanded] = useState(false);
    const [activeKey, setActiveKey] = useState('1');
    return (
        <>
            <Container style={styles}>
                <Sidenav 
                    className="side-nav" 
                    expanded={expanded}
                    appearance="subtle"
                >
                    <Sidenav.Body className="sidenav-body">
                        <Nav 
                            className="nav" 
                            activeKey={activeKey} 
                            onSelect={setActiveKey}
                        >
                            <Nav.Item 
                                className="nav-item" 
                                eventKey="1" 
                            >
                            <h2>
                                <Icon as={DashboardIcon} size="10em" /> Dashboard
                            </h2>
                            </Nav.Item>
                            <Nav.Menu
                                className="nav-menu"
                                placement="rightStart"
                                eventKey="2"
                                title={<h3><Icon as={GrowthIcon} size="10em" /> Goals</h3>}
                            >
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="2-1"
                                    onClick={() => navigate('/goals/new')}
                                ><h4>Add Goal</h4>
                                </Nav.Item>
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="2-2"
                                    onClick={() => navigate('/goals')}
                                ><h4>Goals Log</h4>
                                </Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu
                                className="nav-menu"
                                placement="rightStart"
                                eventKey="3"
                                title={<h3><Icon as={CheckOutlineIcon} size="10em" /> Achievements</h3>}
                            >
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="3-1"
                                    onClick={() => navigate('/achievements/new')}
                                    ><h4>Add Achievements</h4>
                                </Nav.Item>
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="3-2"
                                    onClick={() => navigate('/achievements')}
                                    ><h4>Achievements Log</h4>
                                </Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu
                                className="nav-menu"
                                placement="rightStart"
                                eventKey="4"
                                title={<h3><Icon as={ExploreIcon} size="10em" /> Trips</h3>}
                            >
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="4-1"
                                    onClick={() => navigate('/trips/new')}
                                ><h4>Add Trip</h4>
                                </Nav.Item>
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="4-2"
                                    onClick={() => navigate('/trips')}
                                ><h4>Trips Log</h4>
                                </Nav.Item>
                                <Nav.Menu 
                                    className="nav-menu" 
                                    eventKey="4-5" 
                                    title={<h3><Icon as={ImportIcon} size="10em" /> Memories</h3>}
                                >
                                    <Nav.Item 
                                        className="nav-item" 
                                        eventKey="4-5-1"
                                        onClick={() => navigate('/memories')}
                                    ><h4>Memories Log</h4>
                                    </Nav.Item>
                                </Nav.Menu>
                            </Nav.Menu>
                            <Nav.Menu
                                className="nav-menu"
                                placement="rightStart"
                                eventKey="5"
                                title={<h3><Icon as={CreativeIcon} size="10em" /> Studies</h3>}
                            >
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="5-1"
                                    onClick={() => navigate('/schools/new')}
                                ><h4>Add Studies</h4>
                                </Nav.Item>
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="5-2"
                                    onClick={() => navigate('/schools')}
                                ><h4>Studies Log</h4>
                                </Nav.Item>
                                <Nav.Menu 
                                    className="nav-menu" 
                                    eventKey="5-5" 
                                    title={<h3><Icon as={DocPassIcon} size="10em" /> Degrees</h3>}
                                >
                                    <Nav.Item 
                                        className="nav-item" 
                                        eventKey="5-5-1"
                                        onClick={() => navigate('/degrees')}
                                    ><h4>Degrees Log</h4>
                                    </Nav.Item>
                                </Nav.Menu>
                            </Nav.Menu>
                            <Nav.Menu
                                className="nav-menu"
                                placement="rightStart"
                                eventKey="6"
                                title={<h3><Icon as={PeoplesIcon} size="10em" /> Contacts</h3>}
                            >
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="6-1"
                                    onClick={() => navigate('/contacts/new')}
                                ><h4>Add Contact</h4>
                                </Nav.Item>
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="6-2"
                                    onClick={() => navigate('/contacts')}
                                ><h4>Contacts Log</h4>
                                </Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu
                                className="nav-menu"
                                placement="rightStart"
                                eventKey="7"
                                title={<h3><Icon as={EditIcon} size="10em" /> Feels</h3>}
                            >
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="7-1"
                                    onClick={() => navigate('/feels/new')}
                                ><h4>Add Feels</h4>
                                </Nav.Item>
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="7-2"
                                    onClick={() => navigate('/feels')}
                                ><h4>Feely Feels</h4>
                                </Nav.Item>
                            </Nav.Menu>
                        </Nav>
                    </Sidenav.Body>
                    <Sidenav.Toggle 
                        className="toggle-button"
                        expanded={expanded} 
                        onToggle={expanded => setExpanded(expanded)} 
                    />
                </Sidenav>
            </Container>
        </>
    );
};

export default DashBoardSideBar;

