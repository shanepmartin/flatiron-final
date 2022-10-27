import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { List, Panel, PanelGroup, Grid, Col, Row } from 'rsuite';

import DashboardHeader from "../dashboard/DashboardHeader"
import DashBoardSideBar from "../dashboard/DashboardSideBar"

const FeelsLog = () => {

    const user = useSelector((state) => state.user)

    const [feelsArray, setFeelList] = useState([])

    const getFeelsList = () => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/feels_list/${user.id}`, {
            method: "GET",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
        })
            .then((res) => res.json())
            .then((list) => {
                console.log('list of feels', list)
                setFeelList(list)
            })

    }

    useEffect(() => {
        getFeelsList();
    }, []);

    const styles = {
        display: 'inline-table'
    }

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
                        <Panel>
                            <h1 className="log-title">Feely Feels</h1>
                        </Panel>
                        <br>
                        </br>
                        {feelsArray.map((feel, index) => {
                        return (
                            <PanelGroup accordion bordered>
                                <Panel
                                    key={index}
                                    className="panel"
                                    header={<h2>entry from {feel.date} @ {feel.time}</h2>}
                                >
                                    <h3>{feel.entry}</h3>
                                </Panel>
                            </PanelGroup>
                        );
                    })}
                    </Col>
                </Row>
            </Grid>
    </>
    )
}

export default FeelsLog;