import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Panel, PanelGroup, Button, Grid, Col, Row, Container } from 'rsuite';
import { useNavigate } from "react-router-dom";

import DashboardHeader from "../dashboard/DashboardHeader"
import DashBoardSideBar from "../dashboard/DashboardSideBar"

const TripsLog = () => {

    const navigate = useNavigate();

    const user = useSelector((state) => state.user)

    const [tripsArray, setTripList] = useState([])

    const getTripsList = () => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/trips_list/${user.id}`, {
            method: "GET",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
        })
        .then((res) => res.json())
        .then((list) => {
            console.log('list of trips', list)
            setTripList(list)
        })

    }

    useEffect(() => {
        getTripsList();
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
                    <Col sm={24} md={8} lg={6}>
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
                    <Col sm={12} md={8} lg={12}>
                        <Panel>
                            <h1 className="log-title">Trips Log</h1>
                        </Panel>
                            {tripsArray.map((trip, index) => {
                            return (
                                <PanelGroup accordion bordered>
                                    <Panel
                                        key={index}
                                        className="panel"
                                        header={<h2>[{index + 1}] {trip.country} trip</h2>}
                                    >
                                        <h3>city: {trip.city}</h3>
                                        <br>
                                        </br>
                                        <h3>date: {trip.date}</h3>
                                        <br>
                                        </br>
                                        <Button
                                            onClick={() => navigate(`/memories/new/${trip.id}`)}
                                        >add memory
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

export default TripsLog;