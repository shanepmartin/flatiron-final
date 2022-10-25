import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PanelGroup, Panel } from 'rsuite'
import { setUser } from "../auth/UserState"

import DashboardHeader from "./DashboardHeader"
import DashBoardSideBar from "./DashboardSideBar"

const Profile = () => {

    const user = useSelector((state) => state.user)

    const [username, setUsername] = useState();

    let navigate = useNavigate();

    // state for count methods...

    const [goalCount, setGoalCount] = useState();
    const [achievementCount, setAchievementCount] = useState();
    const [feelCount, setFeelCount] = useState();
    const [contactCount, setContactCount] = useState();

    // state for list methods...

    // const [goalArray, setGoalList] = useState([]);
    // const [achievementArray, setAchievementList] = useState([]);
    // const [feelArray, setFeelList] = useState([]);
    // const [contactArray, setContactList] = useState([]);

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

    useEffect(() => {
        getGoalsCount();
        getAchievementsCount();
        getFeelsCount();
        getContactsCount();
        getUsername();
    }, []);

    const styles = {
        display: 'inline-table'
    }


    return (
        <>
            <DashboardHeader />
            <DashBoardSideBar />
            <div className="profile-div" style={styles}>
                {/* <h1 className="profile-heading">{username}</h1> */}
                <div className="user-details">
                    <PanelGroup accordion bordered>
                        <Panel className="panel" header="User Details" defaultExpanded>
                            <h3>Welcome back {username} !</h3>
                            <h4>Take a look at your stats below...</h4>
                        </Panel>
                        <Panel className="panel" header="Goals">
                            <h4>Total Goals: {goalCount}</h4>
                        </Panel>
                        <Panel className="panel" header="Achievements">
                            <h4>Total Achievements: {achievementCount}</h4>
                        </Panel>
                        <Panel className="panel" header="Trips">
                            <h4>Total Trips: </h4>
                        </Panel>
                        <Panel className="panel" header="Studies">
                            <h4>Schools Attended: </h4>
                        </Panel>
                        <Panel className="panel" header="Contacts">
                            <h4>Total Contacts: {contactCount}</h4>
                        </Panel>
                        <Panel className="panel" header="Feels">
                            <h4>Total Feels: {feelCount}</h4>
                        </Panel>
                    </PanelGroup>
                </div>
            </div>
        </>
    )
}

export default Profile;

