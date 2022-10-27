import { Navbar, Nav, Container, Header, Row, Col, Grid } from 'rsuite';

import { Icon } from '@rsuite/icons';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import TimeIcon from '@rsuite/icons/Time';
import PeopleExpandIcon from '@rsuite/icons/PeopleExpand';

import { useNavigate } from 'react-router-dom';

import GetTime from '../views/GetTime';

const DashboardHeader = ({ onSelect, activeKey, ...props }) => {

    let navigate = useNavigate();
    
    return (
        <Container>
            <Header>
                <Grid fluid>
                    <Row>
                        <Col xs={8}>
                            <Navbar.Brand
                                href="/dashboard"
                            >
                                <h1><Icon as={PeopleExpandIcon} size="10em" /> BackPocket</h1>
                            </Navbar.Brand>
                        </Col>
                        <Col xs={8}>
                            <Nav>
                                <Nav.Item >
                                    <h2><Icon as={TimeIcon} size="10em" /> <GetTime /></h2>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col xs={8}>
                            <Nav pullRight>
                                <Nav.Item
                                    onClick={() => navigate('/profile')}
                                >
                                    <h1><Icon as={UserInfoIcon} size="10em" />Profile</h1>
                                </Nav.Item>
                            </Nav>
                        </Col> 
                    </Row>
                </Grid>
            </Header>
        </Container>
    );
};

export default DashboardHeader;