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

    const getGoalsCount = async () => {
        const res = await fetch(`http://localhost:3000/goalscount/${user.id}`)
        const count = await res.json()
        setGoalCount(count)
    }

    const getObjectivesCount = async () => {
        const res = await fetch(`http://localhost:3000/objectivescount/${user.id}`)
        const count = await res.json()
        setObjectiveCount(count)
    }

    const getTripsCount = async () => {
        const res = await fetch(`http://localhost:3000/tripscount/${user.id}`)
        const count = await res.json()
        setTripCount(count)
    }

    const getAchievementsCount = async () => {
        const res = await fetch(`http://localhost:3000/achievementscount/${user.id}`)
        const count = await res.json()
        setAchievementCount(count)
    }

    const getSkillsCount = async () => {
        const res = await fetch(`http://localhost:3000/skillscount/${user.id}`)
        const count = await res.json()
        setSkillCount(count)
    }

    const getJourneysCount = async () => {
        const res = await fetch(`http://localhost:3000/journeyscount/${user.id}`)
        const count = await res.json()
        setJourneyCount(count)
    }

    const getFeelsCount = async () => {
        const res = await fetch(`http://localhost:3000/feelscount/${user.id}`)
        const count = await res.json()
        setFeelCount(count)
    }

    const getContactsCount = async () => {
        const res = await fetch(`http://localhost:3000/contactscount/${user.id}`)
        const count = await res.json()
        setContactCount(count)
    }

    

}