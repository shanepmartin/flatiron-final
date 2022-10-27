import { Col, Grid, Row } from 'rsuite';

import NewSchool from "../forms/NewSchool"
import DashboardHeader from "../dashboard/DashboardHeader";
import DashBoardSideBar from "../dashboard/DashboardSideBar";
import { useState } from "react"

const Schools = () => {
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
                        <NewSchool />
                    </Col>
                </Row>
            </Grid>
        </>
    )
}

export default Schools;