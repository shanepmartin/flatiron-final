import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { List, Panel, Button } from 'rsuite';
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

    const styles = {
        display: 'inline-table'
    }

    const [activeKey, setActiveKey] = useState('1');
    const [openKeys, setOpenKeys] = useState(['3', '4']);
    const [expanded, setExpand] = useState(true);

    return (
        <>
            <DashboardHeader
                appearance="subtle"
                activeKey={activeKey}
                onSelect={setActiveKey}
            />
            <br>
            </br>
            <DashBoardSideBar
                activeKey={activeKey}
                openKeys={openKeys}
                onOpenChange={setOpenKeys}
                onSelect={setActiveKey}
                expanded={expanded}
                onExpand={setExpand}
                appearance="subtle"
            />
            <div className="log" style={styles}>
                <h1 className="log-title">Trips Log</h1>
                {tripsArray.map((trip, index) => {
                    return (
                        <Panel>
                            <List bordered>
                                <div className="list"> 
                                    <h2>[{index + 1}] {trip.country}</h2>
                                    <List key={index} bordered>
                                        <List.Item>
                                            <h3>city: {trip.city}</h3>
                                        </List.Item>
                                        <List.Item>
                                            <h3>date: {trip.date}</h3>
                                        </List.Item>
                                        <Button 
                                            onClick={() => navigate(`/memories/new/${trip.id}`)}
                                        >add memory
                                        </Button>
                                    </List>
                                </div>
                            </List>
                        </Panel>
                    );
                })}
            </div>
        </>
    )
}

export default TripsLog;