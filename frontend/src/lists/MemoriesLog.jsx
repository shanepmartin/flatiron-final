import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { List, Panel } from 'rsuite';

import DashboardHeader from "../dashboard/DashboardHeader"
import DashBoardSideBar from "../dashboard/DashboardSideBar"

const MemoriesLog = () => {

    const user = useSelector((state) => state.user)

    const [memoriesArray, setMemoryList] = useState([])

    const getMemoriesList = () => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/memories_list/${user.id}`, {
            method: "GET",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
        })
            .then((res) => res.json())
            .then((list) => {
                console.log('list of Memories', list)
                setMemoryList(list)
            })

    }

    useEffect(() => {
        getMemoriesList();
    }, []);

    const styles = {
        display: 'inline-table'
    }

    return (
        <>
            <DashboardHeader />
            <DashBoardSideBar />
            <div className="list" style={styles}>Memories Log
                {memoriesArray.map((memory, index) => {
                    return (
                        <Panel>
                            <List bordered>
                                <div className="list-heading"> {index + 1}: {memory.name}
                                    <List key={index} bordered>
                                        <List.Item>description: {memory.description}</List.Item>
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

export default MemoriesLog;