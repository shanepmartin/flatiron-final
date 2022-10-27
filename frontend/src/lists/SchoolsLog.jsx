import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { List, Panel, PanelGroup, Grid, Col, Row, Container, Button } from 'rsuite';
import { useNavigate } from "react-router-dom";

import DashboardHeader from "../dashboard/DashboardHeader"
import DashBoardSideBar from "../dashboard/DashboardSideBar"

const SchoolsLog = () => {

    const navigate = useNavigate();

    const user = useSelector((state) => state.user)

    const [schoolsArray, setSchoolList] = useState([])

    const getSchoolsList = () => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/schools_list/${user.id}`, {
            method: "GET",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
        })
            .then((res) => res.json())
            .then((list) => {
                console.log('list of Schools', list)
                setSchoolList(list)
            })

    }

    useEffect(() => {
        getSchoolsList();
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
                            <h1 className="log-title">Studies Log</h1>
                        </Panel>
                            {schoolsArray.map((school, index) => {
                            return (
                                <PanelGroup accordion bordered>
                                    <Panel
                                        key={index}
                                        className="panel"
                                        header={<h2>[{index + 1}] {school.name}</h2>}
                                    >
                                        <h3>location: {school.location}</h3>
                                        <br>
                                        </br>
                                        <h3>date: {school.date}</h3>
                                        <br>
                                        </br>
                                        <Button
                                            onClick={() => navigate(`/degrees/new/${school.id}`)}
                                        >add degree
                                        </Button>
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

export default SchoolsLog;