import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Sidenav, Nav } from 'rsuite';
// import "../style.css"

const styles = {
    width: 340,
    display: 'inline-table',
    marginRight: 10
};

const DashBoardSideBar = ({appearance}) => {

    let navigate = useNavigate()

    const [expanded, setExpanded] = useState(false);
    const [activeKey, setActiveKey] = useState('1');
    return (
        <>
            <div className="dashboard-side-bar" style={styles}> 
                <Sidenav 
                    // className="side-nav" 
                    expanded={expanded}
                    appearance="subtle"
                >
                    <Sidenav.Body className="sidenav-body">
                        <Nav 
                            className="nav" 
                            activeKey={activeKey} 
                            onSelect={setActiveKey}
                        >
                            <Nav.Item className="nav-item" eventKey="1" >
                                <h2>Dashboard</h2>
                            </Nav.Item>
                            <Nav.Menu
                                className="nav-menu"
                                placement="rightStart"
                                eventKey="2"
                                title= {<h3>Goals</h3>}
                            >
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="2-1"
                                    onClick={() => navigate('/goals/new')}
                                >Add Goal
                                </Nav.Item>
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="2-2"
                                    onClick={() => navigate('/goals')}
                                >Goals Log
                                </Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu
                                className="nav-menu"
                                placement="rightStart"
                                eventKey="3"
                                title={<h3>Achievements</h3>}
                            >
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="3-1"
                                    onClick={() => navigate('/achievements/new')}
                                    >Add Achievements
                                </Nav.Item>
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="3-2"
                                    onClick={() => navigate('/achievements')}
                                    >Achievements Log
                                </Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu
                                className="nav-menu"
                                placement="rightStart"
                                eventKey="4"
                                title={<h3>Trips</h3>}
                            >
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="4-1"
                                    onClick={() => navigate('/trips/new')}
                                >Add Trip
                                </Nav.Item>
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="4-2"
                                    onClick={() => navigate('/trips')}
                                >Trips Log
                                </Nav.Item>
                                <Nav.Menu 
                                    className="nav-menu" 
                                    eventKey="4-5" 
                                    title={<h3>Memories</h3>}
                                >
                                    <Nav.Item 
                                        className="nav-item" 
                                        eventKey="4-5-1"
                                        onClick={() => navigate('/memories')}
                                    >Memories Log
                                    </Nav.Item>
                                </Nav.Menu>
                            </Nav.Menu>
                            <Nav.Menu
                                className="nav-menu"
                                placement="rightStart"
                                eventKey="5"
                                title={<h3>Studies</h3>}
                            >
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="5-1"
                                    onClick={() => navigate('/schools/new')}
                                >Add Studies
                                </Nav.Item>
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="5-2"
                                    onClick={() => navigate('/schools')}
                                >Studies Log
                                </Nav.Item>
                                <Nav.Menu 
                                    className="nav-menu" 
                                    eventKey="5-5" 
                                    title={<h3>Degrees</h3>}
                                >
                                    <Nav.Item 
                                        className="nav-item" 
                                        eventKey="5-5-1"
                                        onClick={() => navigate('/degrees')}
                                    >Degrees Log
                                    </Nav.Item>
                                </Nav.Menu>
                            </Nav.Menu>
                            <Nav.Menu
                                className="nav-menu"
                                placement="rightStart"
                                eventKey="6"
                                title={<h3>Contacts</h3>}
                            >
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="6-1"
                                    onClick={() => navigate('/contacts/new')}
                                >Add Contact
                                </Nav.Item>
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="6-2"
                                    onClick={() => navigate('/contacts')}
                                >Contacts Log
                                </Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu
                                className="nav-menu"
                                placement="rightStart"
                                eventKey="7"
                                title={<h3>Feels</h3>}
                            >
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="7-1"
                                    onClick={() => navigate('/feels/new')}
                                >Add Feels
                                </Nav.Item>
                                <Nav.Item 
                                    className="nav-item" 
                                    eventKey="7-2"
                                    onClick={() => navigate('/feels')}
                                >Feely Feels
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
            </div>
        </>
    );
};

export default DashBoardSideBar;

