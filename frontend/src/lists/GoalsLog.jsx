import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Panel, PanelGroup, Grid, Col, Row } from 'rsuite';

import DashboardHeader from "../dashboard/DashboardHeader"
import DashBoardSideBar from "../dashboard/DashboardSideBar"

const GoalsLog = () => {

    const user = useSelector((state) => state.user)

    const [goalsArray, setGoalList] = useState([])

    const getGoalsList = () => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/goals_list/${user.id}`, {
            method: "GET",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
        })
        .then((res) => res.json())
        .then((list) => {
            console.log('list of goals', list)
            setGoalList(list)
        })

    }

    useEffect(() => {
        getGoalsList();
    }, []);


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
                            <h1 className="log-title">Goals Log</h1>
                        </Panel>
                        <br>
                        </br>
                            {goalsArray.map((goal, index) => {
                            return (
                                <PanelGroup accordion bordered>
                                    <Panel
                                        key={index}
                                        className="panel"
                                        header={<h2>[{index + 1}] {goal.name}</h2>}
                                    >
                                        <h3>date: {goal.date}</h3>
                                        <br>
                                        </br>
                                        <h3>category: {goal.category}</h3>
                                        <br>
                                        </br>
                                        <h3>description: </h3>
                                        <h3>{goal.description}</h3>
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

export default GoalsLog;