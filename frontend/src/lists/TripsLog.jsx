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

    return (
        <>
            <DashboardHeader />
            <DashBoardSideBar />
            <div className="list" style={styles}>Trips Log
                {tripsArray.map((trip, index) => {
                    return (
                        <Panel>
                            <List bordered>
                                <div className="list-heading"> {index + 1}: {trip.country}
                                    <List key={index} bordered>
                                        <List.Item>city: {trip.city}</List.Item>
                                        <List.Item>date: {trip.date}</List.Item>
                                        <Button onClick={() => navigate(`/memories/new/${trip.id}`)}>add memory</Button>
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