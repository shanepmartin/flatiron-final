import { Container, Content, Panel, FlexboxGrid, } from 'rsuite';
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";

const LandingHero = () => {

    return (
        <Container className="Home">
            <Content>
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item colspan={12}>
                        <Panel header={<h3>BackPocket</h3>} bordered>
                            <Login />
                        </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Content>
        </Container>
    )
}

export default LandingHero;