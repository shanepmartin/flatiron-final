import { Col, Grid, Row } from 'rsuite';

import NewAchievement from "../forms/NewAchievement"
import DashBoardSideBar from "../dashboard/DashboardSideBar";
import DashboardHeader from "../dashboard/DashboardHeader";
import { useState } from "react"

const Achievements = () => {
    const [activeKey, setActiveKey] = useState('1');
    const [openKeys, setOpenKeys] = useState(['3', '4']);
    const [expanded, setExpand] = useState(true);
    return (
        <>
            <Grid fluid>
                <DashboardHeader
                    appearance="subtle"
                    activeKey={activeKey}
                    onSelect={setActiveKey}
                />
                <br>
                </br>
                <Row>
                    <Col xs={8}>
                        <DashBoardSideBar 
                            activeKey={activeKey}
                            openKeys={openKeys}
                            onOpenChange={setOpenKeys}
                            onSelect={setActiveKey}
                            expanded={expanded}
                            onExpand={setExpand}
                            appearance="subtle"
                        />
                    </Col>
                    <Col xs={8}>
                        <NewAchievement />
                    </Col>
                </Row>
            </Grid>
        </>
    )
}

export default Achievements;