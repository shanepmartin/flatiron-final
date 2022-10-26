import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { List, Panel } from 'rsuite';

import DashboardHeader from "../dashboard/DashboardHeader"
import DashBoardSideBar from "../dashboard/DashboardSideBar"

const SchoolsLog = () => {

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

    const styles = {
        display: 'inline-table'
    }

    return (
        <>
            <DashboardHeader />
            <DashBoardSideBar />
            <div className="list" style={styles}>Schools Log
                {schoolsArray.map((school, index) => {
                    return (
                        <Panel>
                            <List bordered>
                                <div className="list-heading"> {index + 1}: {school.name}
                                    <List key={index} bordered>
                                        <List.Item>location: {school.location}</List.Item>
                                        <List.Item>date: {school.date}</List.Item>
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

export default SchoolsLog;