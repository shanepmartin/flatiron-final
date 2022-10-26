import '../style.css';
import { Navbar, Nav, IconButton } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import TimeIcon from '@rsuite/icons/Time';
import { useNavigate } from 'react-router-dom';

import GetTime from '../views/GetTime';

const DashboardHeader = ({ onSelect, activeKey, ...props }) => {

    let navigate = useNavigate();
    
    return (
        <div className="dashboard-header">
            <Navbar {...props} appearance="subtle">
                <Navbar.Brand size="lg" href="/dashboard" icon={<HomeIcon />}>
                    <h1>BackPocket</h1>
                </Navbar.Brand>
                <Nav className="date-and-time">
                    <Nav.Item icon={<h1><TimeIcon /></h1>}>
                        <h2><GetTime /></h2>
                    </Nav.Item>
                </Nav>
                <Nav pullRight>
                    <Nav.Item 
                        onClick={() => navigate('/profile')} 
                        icon={<UserInfoIcon />}
                    >
                        <h1>Profile</h1>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </div>
    );
};

export default DashboardHeader;