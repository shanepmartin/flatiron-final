import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PanelGroup, Panel } from 'rsuite'
import { setUser } from "../auth/UserState"

import DashboardHeader from "./DashboardHeader"
import DashBoardSideBar from "./DashboardSideBar"

// import icons...
import { Icon } from '@rsuite/icons';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import GrowthIcon from '@rsuite/icons/Growth';
import CheckOutlineIcon from '@rsuite/icons/CheckOutline';
import ExploreIcon from '@rsuite/icons/Explore';
import CreativeIcon from '@rsuite/icons/Creative';
import PeoplesIcon from '@rsuite/icons/Peoples';
import EditIcon from '@rsuite/icons/Edit';
import ImportIcon from '@rsuite/icons/Import';
import DocPassIcon from '@rsuite/icons/DocPass';

const Profile = () => {

    const user = useSelector((state) => state.user)

    const [username, setUsername] = useState();

    let navigate = useNavigate();

    // state for count methods...

    const [goalCount, setGoalCount] = useState();
    const [achievementCount, setAchievementCount] = useState();
    const [feelCount, setFeelCount] = useState();
    const [contactCount, setContactCount] = useState();
    const [degreeCount, setDegreeCount] = useState();
    const [memoryCount, setMemoryCount] = useState();
    const [schoolCount, setSchoolCount] = useState();
    const [tripCount, setTripCount] = useState();

    // state for list methods...

    const getUsername = () => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/me`, {
            method: "GET",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
        })
        .then((res) => res.json())
        .then((user) => {
            console.log('the name of the user is...', user.name)
            setUsername(user.name)
        })
    }

    // user stats count methods...

    const getAchievementsCount = () => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/achievements_count/${user.id}`, {
            method: "GET",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
        })
        .then((res) => res.json())
        .then((count) => {
            console.log('how many achievements?', count)
            setAchievementCount(count)
        })
    }

    const getContactsCount = () => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/contacts_count/${user.id}`, {
            method: "GET",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
        })
        .then((res) => res.json())
        .then((count) => {
            console.log('how many contacts?', count)
            setContactCount(count)
        })
    }

    const getDegreesCount = async () => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/degrees_count/${user.id}`, {
            method: "GET",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
        })
        .then((res) => res.json())
        .then((count) => {
            console.log('how many degrees?', count)
            setDegreeCount(count)
        })
    }

    const getFeelsCount = async () => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/feels_count/${user.id}`, {
            method: "GET",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
        })
        .then((res) => res.json())
        .then((count) => {
            console.log('how many feels?', count)
            setFeelCount(count)
        })
    }

    const getGoalsCount = async () => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/goals_count/${user.id}`, {
            method: "GET",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
        })
        .then((res) => res.json())
        .then((count) => {
            console.log('how many goals?', count)
            setGoalCount(count)
        })
    }

    const getMemoriesCount = async () => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/memories_count/${user.id}`, {
            method: "GET",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
        })
        .then((res) => res.json())
        .then((count) => {
            console.log('how many memories?', count)
            setMemoryCount(count)
        })
    }

    const getSchoolsCount = async () => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/schools_count/${user.id}`, {
            method: "GET",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
        })
        .then((res) => res.json())
        .then((count) => {
            console.log('how many schools?', count)
            setSchoolCount(count)
        })
    }

    const getTripsCount = async () => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/trips_count/${user.id}`, {
            method: "GET",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
        })
        .then((res) => res.json())
        .then((count) => {
            console.log('how many trips?', count)
            setTripCount(count)
        })
    }

    useEffect(() => {
        getGoalsCount();
        getAchievementsCount();
        getFeelsCount();
        getContactsCount();
        getDegreesCount();
        getMemoriesCount();
        getSchoolsCount();
        getTripsCount();
        getUsername();
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
            <div className="profile-div" style={styles}>
                <div className="user-details">
                    <PanelGroup accordion bordered>
                        <Panel 
                            className="panel" 
                            header={<h1><Icon as={UserInfoIcon} size="10em" /> {username}'s profile</h1>} 
                            defaultExpanded
                        >
                        </Panel>
                        <Panel 
                            className="panel" 
                            header={<h3><Icon as={GrowthIcon} size="10em" /> Goals</h3>}
                            >
                            <h4>Total Goals: {goalCount}</h4>
                        </Panel>
                        <Panel 
                            className="panel" 
                            header={<h3><Icon as={CheckOutlineIcon} size="10em" /> Achievements</h3>}
                            >
                            <h4>Total Achievements: {achievementCount}</h4>
                        </Panel>
                        <Panel 
                            className="panel" 
                            header={<h3><Icon as={ExploreIcon} size="10em" /> Trips</h3>}
                            >
                            <h4>Total Trips: {tripCount}</h4>
                        </Panel>
                        <Panel 
                            className="panel" 
                            header={<h3><Icon as={ImportIcon} size="10em" /> Memories</h3>}
                            >
                            <h4>Total Memories: {memoryCount}</h4>
                        </Panel>
                        <Panel 
                            className="panel" 
                            header={<h3><Icon as={CreativeIcon} size="10em" /> Schools</h3>}
                            >
                            <h4>Schools Attended: {schoolCount}</h4>
                        </Panel>
                        <Panel 
                            className="panel" 
                            header={<h3><Icon as={DocPassIcon} size="10em" /> Degrees</h3>}
                            >
                            <h4>Total Degrees: {degreeCount}</h4>
                        </Panel>
                        <Panel 
                            className="panel" 
                            header={<h3><Icon as={PeoplesIcon} size="10em" /> Contacts</h3>}
                            >
                            <h4>Total Contacts: {contactCount}</h4>
                        </Panel>
                        <Panel 
                            className="panel" 
                            header={<h3><Icon as={EditIcon} size="10em" /> Feels</h3>}
                            >
                            <h4>Total Feels: {feelCount}</h4>
                        </Panel>
                    </PanelGroup>
                </div>
            </div>
        </>
    )
}

export default Profile;

