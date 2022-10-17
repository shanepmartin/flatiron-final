import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";

const Profile = () => {
    
    const user = useSelector((state) => state.user).profile;

    let navigate = useNavigate()

    console.log('user', user)

    const [goalCount, setGoalCount] = useState()
    const [objectiveCount, setObjectiveCount] = useState()
    const [tripCount, setTripCount] = useState()
    const [achievementCount, setAchievementCount] = useState()
    const [skillCount, setSkillCount] = useState()
    const [journeyCount, setJourneyCount] = useState()
    const [feelCount, setFeelCount] = useState()
    const [contactCount, setContactCount] = useState()
    

    // these need routes in the user controller !!!!
        // also need to create associating getList functions...

    // count functions will provide the number of the associated variable related to the user...

    const getGoalsCount = async () => {
        const res = await fetch(`http://localhost:3000/goals_count/${user.id}`)
        const count = await res.json()
        setGoalCount(count)
    }

    const getObjectivesCount = async () => {
        const res = await fetch(`http://localhost:3000/objectives_count/${user.id}`)
        const count = await res.json()
        setObjectiveCount(count)
    }

    const getTripsCount = async () => {
        const res = await fetch(`http://localhost:3000/trips_count/${user.id}`)
        const count = await res.json()
        setTripCount(count)
    }

    const getAchievementsCount = async () => {
        const res = await fetch(`http://localhost:3000/achievements_count/${user.id}`)
        const count = await res.json()
        setAchievementCount(count)
    }

    const getSkillsCount = async () => {
        const res = await fetch(`http://localhost:3000/skills_count/${user.id}`)
        const count = await res.json()
        setSkillCount(count)
    }

    const getJourneysCount = async () => {
        const res = await fetch(`http://localhost:3000/journeys_count/${user.id}`)
        const count = await res.json()
        setJourneyCount(count)
    }

    const getFeelsCount = async () => {
        const res = await fetch(`http://localhost:3000/feels_count/${user.id}`)
        const count = await res.json()
        setFeelCount(count)
    }

    const getContactsCount = async () => {
        const res = await fetch(`http://localhost:3000/contacts_count/${user.id}`)
        const count = await res.json()
        setContactCount(count)
    }

    // list functions will return the entire list of associated variables related to the user...

    useEffect(() => {
        getGoalsCount()
        getObjectivesCount()
        getTripsCount()
        getAchievementsCount()
        getSkillsCount()
        getJourneysCount()
        getFeelsCount()
        getContactsCount()
    }, [])

    return (
        <div className="profile">
            <h5 className="profile-header">Profile</h5>
            <div className="profile-details">
                <div className="profile-details-left">
                    <div className="profile-index">
                        <p>Goals: {goalCount}</p>
                        <div className="goals-count">
                            <p className="objectives-count" onClick={() => navigate('/objectives')}>Objectives: {objectiveCount}</p>
                            <p className="trips-count" onClick={() => navigate('/trips')}>Trips: {tripCount}</p>
                        </div>
                        <p>Achievements: {achievementCount}</p>
                        <div className="achievements-count">
                            <p className="skills-count" onClick={() => navigate('/skills')}>Skills: {skillCount}</p>
                            <p className="journeys-count" onClick={() => navigate('/journeys')}>Journeys: {journeyCount}</p>
                        </div>
                        <p>Feels</p>
                        <div className="feels-count-div">
                            <p className="feels-count" onClick={() => navigate('/feels')}>Put yourself in your {feelCount} feels...</p>
                        </div>
                        <p>Contacts</p>
                        <div className="contacts-div">
                            <p className="contacts-count" onClick={() => navigate('/contacts')}>Access your {contactCount} contacts. oh so popular!</p>
                        </div>
                    </div>
                </div>
                <div className="entries">
                    *******we'll put our entry forms here*******
                </div>
            </div>
        </div>
    )
}

export default Profile;