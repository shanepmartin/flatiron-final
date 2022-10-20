import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { Sidenav, Nav } from 'rsuite';

import DashboardIcon from '@rsuite/icons/Dashboard';

import { logout } from "../auth/UserState"


const DashBoardSideBar = ({ appearance,  onOpenChange, onExpand, ...navProps }) => {

    let navigate = useNavigate()

    const styles = {
        width: 240,
        display: 'inline-table',
        marginRight: 10
    };

    const [expanded, setExpanded] = useState(true);

    return (
        <div style={styles}>
            <hr />
            <Sidenav expanded={expanded} defaultOpenKeys={['1']}>
                <Sidenav.Body>
                    <Nav {...navProps}>
                        <Nav.Item eventKey="1" active icon={<DashboardIcon />} onClick={() => navigate('/')}>
                            Dashboard
                        </Nav.Item>
                        <Nav.Menu eventKey="2" title="Goals" >
                            <Nav.Item eventKey="2-1" onClick={() => navigate('/goals')}>New Goal</Nav.Item>
                            <Nav.Item eventKey="2-2">Goals Log</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu eventKey="3" title="Achievements" >
                            <Nav.Item eventKey="3-1" onClick={() => navigate('/achievements')}>New Achievement</Nav.Item>
                            <Nav.Item eventKey="3-2">Achievements Log</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu eventKey="4" title="Trips" >
                            <Nav.Item eventKey="4-1" onClick={() => navigate('/trips')}>New Trip</Nav.Item>
                            <Nav.Item eventKey="4-2">Trips Log</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu eventKey="5" title="School" >
                            <Nav.Item eventKey="5-1" onClick={() => navigate('/schools')}>Add Education</Nav.Item>
                            <Nav.Item eventKey="5-2">Education Log</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu eventKey="6" title="Contacts" >
                            <Nav.Item eventKey="6-1" onClick={() => navigate('/contacts')}>New Contact</Nav.Item>
                            <Nav.Item eventKey="6-2">Contacts Log</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu eventKey="7" title="Feels" >
                            <Nav.Item eventKey="7-1" onClick={() => navigate('/feels')}>New Feel</Nav.Item>
                            <Nav.Item eventKey="7-2">Feels Log</Nav.Item>
                        </Nav.Menu>
                    </Nav>
                </Sidenav.Body>
                <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)}/>
            </Sidenav>
        </div>
    );
}

export default DashBoardSideBar;

