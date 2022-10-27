import '../style.css';
import { Navbar, Nav } from 'rsuite';

import { Icon } from '@rsuite/icons';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import TimeIcon from '@rsuite/icons/Time';
import PeopleExpandIcon from '@rsuite/icons/PeopleExpand';

import { useNavigate } from 'react-router-dom';

import GetTime from '../views/GetTime';

const DashboardHeader = ({ onSelect, activeKey, ...props }) => {

    let navigate = useNavigate();
    
    return (
        <div className="dashboard-header">
            <Navbar {...props} appearance="subtle">
                <Navbar.Brand 
                    size="lg" 
                    href="/dashboard" 
                >
                    <h1><Icon as={PeopleExpandIcon} size="10em" /> BackPocket</h1>
                </Navbar.Brand>
                <Nav className="date-and-time">
                    <Nav.Item >
                        <h2><Icon as={TimeIcon} size="10em" /> <GetTime /></h2>
                    </Nav.Item>
                </Nav>
                <Nav pullRight>
                    <Nav.Item 
                        onClick={() => navigate('/profile')} 
                    >
                        <h1><Icon as={UserInfoIcon} size="10em" />Profile</h1>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </div>
    );
};

export default DashboardHeader;