import { Footer, Container, Button, Row, Col, Grid, Nav } from 'rsuite'
import { useNavigate } from 'react-router-dom';

import { Icon } from '@rsuite/icons';
import ExitIcon from '@rsuite/icons/Exit';
import TmallIcon from '@rsuite/icons/Tmall';

const DashboardFooter = () => {
    let navigate = useNavigate()

    const logout = (state) => {
        localStorage.clear();
        window.location.href = "/";
    }

    return (
        <Container>
            <Footer>
                <Grid fluid>
                    <Row>
                        <Col sm={24} md={8} lg={6}>
                            <Button
                                icon={<ExitIcon />}
                                appearance="subtle"
                                onClick={logout}
                            >
                                <h3><Icon as={ExitIcon} size="10em" /> SignOut</h3>
                            </Button>
                        </Col>
                        <Col sm={12} md={8} lg={12}>
                            <Nav>
                                <Nav.Item><h3>BackPocket 2022</h3></Nav.Item>
                                <Nav.Item
                                    href="https://github.com/smartin38/backpocket-proposal"
                                ><h3><Icon as={TmallIcon} size="10em" /> GitHub</h3>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                </Grid>
            </Footer>
        </Container>
    )
}

export default DashboardFooter;