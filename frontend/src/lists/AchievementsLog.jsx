import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { List, Panel } from 'rsuite';

import DashboardHeader from "../dashboard/DashboardHeader"
import DashBoardSideBar from "../dashboard/DashboardSideBar"

const AchievementsLog = () => {

    const user = useSelector((state) => state.user)

    const [achievementsArray, setAchievementList] = useState([])

    const getAchievementsList = () => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/achievements_list/${user.id}`, {
            method: "GET",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
        })
        .then((res) => res.json())
        .then((list) => {
            console.log('list of achievements', list)
            setAchievementList(list)
        })

    }

    useEffect(() => {
        getAchievementsList();
    }, [] );

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
                <h1 className="log-title">Achievements Log</h1>
                {achievementsArray.map((achievement, index) => {
                    return (
                        <Panel> 
                            <List bordered>
                                <div className="list"> 
                                    <h2>[{index + 1}] {achievement.name}</h2>
                                    <List key={index} bordered>
                                        <List.Item>
                                            <h3>date: {achievement.date}</h3>
                                        </List.Item>
                                        <List.Item>
                                            <h3>category: {achievement.category}</h3>
                                        </List.Item>
                                        <List.Item>
                                            <h3>description: {achievement.description}</h3>
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

export default AchievementsLog;