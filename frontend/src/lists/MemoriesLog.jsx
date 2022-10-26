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
                <h1 className="log-title">Memories Log</h1>
                {memoriesArray.map((memory, index) => {
                    return (
                        <Panel>
                            <List bordered>
                                <div className="list"> 
                                    <h2>[{index + 1}] {memory.name}</h2>
                                    <List key={index} bordered>
                                        <List.Item>
                                            <h3>description: {memory.description}</h3>
                                        </List.Item>
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