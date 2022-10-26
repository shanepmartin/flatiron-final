import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { List, Panel, Button } from 'rsuite';
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
                <h1 className="log-title">Studies Log</h1>
                {schoolsArray.map((school, index) => {
                    return (
                        <Panel>
                            <List bordered>
                                <div className="list">
                                    <h2>[{index + 1}] {school.name}</h2>
                                    <List key={index} bordered>
                                        <List.Item>
                                            <h3>location: {school.location}</h3>
                                        </List.Item>
                                        <List.Item>
                                            <h3>date: {school.date}</h3>
                                        </List.Item>
                                        <Button 
                                            onClick={() => navigate(`/degrees/new/${school.id}`)}
                                        >add degree
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

export default SchoolsLog;