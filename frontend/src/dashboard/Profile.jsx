import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PanelGroup, Panel } from 'rsuite'
import { setUser } from "../auth/UserState"

const Profile = () => {

    const user = useSelector((state) => state.user)

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
    }, []);

    // user list methods...

    // const getAchievementsList = () => {
    //     let token = localStorage.getItem("token");
    //     fetch(`http://localhost:3000/achievements_list/${user.id}`, {
    //         method: "GET",
    //         headers: {
    //             token: token,
    //             "Content-Type": "application/json"
    //         },
    //     })
    //     .then((res) => res.json())
    //     .then((list) => {
    //         console.log('list of achievements', list)
    //         setAchievementList(list)
    //     })
    // }

    // useEffect(() => {
    //     getAchievementsList();
    // }, []);

    // const achievementsList = achievementArray.map((achievement) => 
    //     <li>{achievement}</li>
    // );





    return (
        <>
            <div className="profile-heading-div">
                <h1 className="profile-heading">Profile</h1>
                <div className="user-details">
                    <PanelGroup accordion bordered>
                        <Panel header="User Details" defaultExpanded>
                            <h3>Welcome back {user.name} !</h3>
                            <h4>Refer to your index below...</h4>
                        </Panel>
                        <Panel header="Goals">
                            <h4>Total Goals: {goalCount}</h4>
                        </Panel>
                        <Panel header="Achievements">
                            <h4>Total Achievements: {achievementCount}</h4>
                            {/* <ul>{achievementsList}</ul> */}
                        </Panel>
                        <Panel header="Trips">
                            <h4>Total Trips: </h4>
                        </Panel>
                        <Panel header="Studies">
                            <h4>Schools Attended: </h4>
                        </Panel>
                        <Panel header="Contacts">
                            <h4>Total Contacts: {contactCount}</h4>
                        </Panel>
                        <Panel header="Feels">
                            <h4>Total Feels: {feelCount}</h4>
                        </Panel>
                    </PanelGroup>
                </div>
            </div>
        </>
    )
}

export default Profile;

