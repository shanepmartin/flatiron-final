import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Sidenav, Nav, Toggle } from 'rsuite';

const DashBoardSideBar = () => {

    let navigate = useNavigate()

    const [expanded, setExpanded] = useState(false);
    const [activeKey, setActiveKey] = useState('1');
    return (
        <div className="dashboard-side-bar" style={{ width: 240 }}>
            <hr />
            <Sidenav expanded={expanded}>
                <Sidenav.Body>
                    <Nav activeKey={activeKey} onSelect={setActiveKey}>
                        <Nav.Item className="dropdown" eventKey="1" >
                            Dashboard
                        </Nav.Item>
                        <Nav.Menu
                            placement="rightStart"
                            eventKey="2"
                            title="Goals"
                        >
                            <Nav.Item eventKey="2-1">Add Goal</Nav.Item>
                            <Nav.Item eventKey="2-2">Goals Log</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu
                            placement="rightStart"
                            eventKey="3"
                            title="Achievements"
                        >
                            <Nav.Item eventKey="3-1">Add Achievements</Nav.Item>
                            <Nav.Item eventKey="3-2">Achievements Log</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu
                            placement="rightStart"
                            eventKey="4"
                            title="Trips"
                        >
                            <Nav.Item eventKey="4-1">Add Trip</Nav.Item>
                            <Nav.Item eventKey="4-2">Trips Log</Nav.Item>
                            <Nav.Menu eventKey="4-5" title="Memories">
                                <Nav.Item eventKey="4-5-1">Add Memory</Nav.Item>
                                <Nav.Item eventKey="4-5-2">Memories Log</Nav.Item>
                            </Nav.Menu>
                        </Nav.Menu>
                        <Nav.Menu
                            placement="rightStart"
                            eventKey="5"
                            title="Studies"
                        >
                            <Nav.Item eventKey="5-1">Add Studies</Nav.Item>
                            <Nav.Item eventKey="5-2">Studies Log</Nav.Item>
                            <Nav.Menu eventKey="5-5" title="Degrees">
                                <Nav.Item eventKey="5-5-1">Add Degree</Nav.Item>
                                <Nav.Item eventKey="5-5-2">Degrees Log</Nav.Item>
                            </Nav.Menu>
                        </Nav.Menu>
                        <Nav.Menu
                            placement="rightStart"
                            eventKey="6"
                            title="Contacts"
                        >
                            <Nav.Item eventKey="6-1">Add Contact</Nav.Item>
                            <Nav.Item eventKey="6-2">Contacts Log</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu
                            placement="rightStart"
                            eventKey="7"
                            title="Feels"
                        >
                            <Nav.Item eventKey="7-1">Add Feels</Nav.Item>
                            <Nav.Item eventKey="7-2">Feely Feels</Nav.Item>
                        </Nav.Menu>
                    </Nav>
                </Sidenav.Body>
                <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
            </Sidenav>
        </div>
    );
};

export default DashBoardSideBar;

