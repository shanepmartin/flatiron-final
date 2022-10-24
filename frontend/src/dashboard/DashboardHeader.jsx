import '../style.css';
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import TimeIcon from '@rsuite/icons/Time';
import { useNavigate } from 'react-router-dom';

const DashboardHeader = ({ onSelect, activeKey, ...props }) => {

    let navigate = useNavigate();
    
    return (
        <div className="dashboard-header">
            <Navbar {...props}>
                <Navbar.Brand href="/dashboard" icon={<HomeIcon />}>BackPocket</Navbar.Brand>
                <Nav className="date-and-time">
                    <Nav.Item icon={<TimeIcon />}>we'll put the date & time here</Nav.Item>
                </Nav>
                <Nav pullRight>
                    <Nav.Item onClick={() => navigate('/profile')} icon={<CogIcon />}>Profile</Nav.Item>
                </Nav>
            </Navbar>
        </div>
    );
};

export default DashboardHeader;