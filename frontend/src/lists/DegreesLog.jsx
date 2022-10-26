import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { List, Panel } from 'rsuite';

import DashboardHeader from "../dashboard/DashboardHeader"
import DashBoardSideBar from "../dashboard/DashboardSideBar"

const DegreesLog = () => {

    const user = useSelector((state) => state.user)

    const [degreesArray, setdegreeList] = useState([])

    const getDegreesList = () => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/degrees_list/${user.id}`, {
            method: "GET",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
        })
            .then((res) => res.json())
            .then((list) => {
                console.log('list of Degrees', list)
                setdegreeList(list)
            })

    }

    useEffect(() => {
        getDegreesList();
    }, []);

    const styles = {
        display: 'inline-table'
    }

    return (
        <>
            <DashboardHeader />
            <DashBoardSideBar />
            <div className="list" style={styles}>Degrees Log
                {degreesArray.map((degree, index) => {
                    return (
                        <Panel>
                            <List bordered>
                                <div className="list-heading"> {index + 1}: {degree.name}
                                    <List key={index} bordered>
                                        <List.Item>level: {degree.level}</List.Item>
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

export default DegreesLog;