import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";

import { Container, Header, Sidebar, Button, Sidenav, Content, Navbar, Nav } from 'rsuite';
import CogIcon from '@rsuite/icons/legacy/Cog';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import DashboardIcon from '@rsuite/icons/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';

import { logout } from "../auth/UserState"


const Profile = () => {
    
    const user = useSelector((state) => state.user)

    let navigate = useNavigate()

    const dispatch = useDispatch()

    // console.log('user', user)

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

    const headerStyles = {
        padding: 18,
        fontSize: 26,
        height: 26,
        background: 'beige',
        color: 'black',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    };

    // useEffect(() => {
    //     let token = localStorage.getItem("token");
    //     console.log('token', token)
    //     if (token && !user.isLoggedin) {
    //         fetch("http://localhost:3000/profile", {
    //             headers: {
    //                 token: token,
    //                 "Content-Type": "application/json",
    //             },
    //         })
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 console.log('useEffect data', data)
    //                 dispatch(setUser(data))
    //                 localStorage.setItem('token', data.token)
    //             });
    //     }
    // }, [])

    const NavToggle = ({ expand, onChange }) => {
        return (
            <Navbar appearance="subtle" className="nav-toggle">
                <Nav>
                    <Nav.Menu
                        noCaret
                        placement="topStart"
                        trigger="click"
                        title={<CogIcon style={{ width: 50, height: 200 }} size="sm" />}
                    >
                        <Nav.Item>Settings</Nav.Item>
                        <Nav.Item>Sign out</Nav.Item>
                    </Nav.Menu>
                </Nav>

                <Nav pullRight>
                    <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
                        {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
                    </Nav.Item>
                </Nav>
            </Navbar>
        );
    };

    const [expand, setExpand] = useState(true);
    return (
        <div className="show-fake-browser sidebar-page">
            <Container>
                <Sidebar
                    style={{ display: 'flex', flexDirection: 'column' }}
                    width={expand ? 250 : 56}
                    collapsible
                >
                    <Sidenav.Header>
                        <div style={headerStyles}>
                            <Button className="home-button" onClick={() => navigate('/')}>BackPocket</Button>
                        </div>
                    </Sidenav.Header>
                    <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
                        <Sidenav.Body>
                            <Nav>
                                <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
                                    Dashboard
                                </Nav.Item>
                                <Nav.Menu
                                    eventKey="2"
                                    trigger="hover"
                                    title="Goals"
                                    placement="rightStart"
                                > {goalCount}
                                    <Nav.Item eventKey="2-1" onClick={() => navigate('/objectives')}>Objectives: {objectiveCount} </Nav.Item>
                                    <Nav.Item eventKey="2-2" onClick={() => navigate('/trips')}>Trips: {tripCount} </Nav.Item>
                                </Nav.Menu>
                                <Nav.Menu
                                    eventKey="3"
                                    trigger="hover"
                                    title="Achievements"
                                    placement="rightStart"
                                > {achievementCount}
                                    <Nav.Item eventKey="3-1" onClick={() => navigate('/skills')}>Skills: {skillCount}</Nav.Item>
                                    <Nav.Item eventKey="3-2" onClick={() => navigate('/journeys')}>Journeys: {journeyCount}</Nav.Item>
                                </Nav.Menu>
                                <Nav.Item title="Feels" eventKey="4" onClick={() => navigate('/feels')}>
                                    Feels: {feelCount}
                                </Nav.Item>
                                <Nav.Item title="Contacts" eventKey="5" onClick={() => navigate('/contacts')}>
                                    Contacts: {contactCount}
                                </Nav.Item>
                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                </Sidebar>

                <Container>
                    <Header>
                        <h2>BackPocket</h2>
                    </Header>
                </Container>
            </Container>
            <Container>
                <Nav pullRight>
                    <Nav.Item>
                        <Button 
                            onClick={() => {
                                localStorage.clear();
                                dispatch(logout())
                                navigate("/")
                            }}
                        >
                            Logout
                        </Button>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
    );




    // return (
    //     <div className="profile">
    //         <h5 className="profile-header">Profile</h5>
    //         <div className="profile-details">
    //             <div className="profile-details-left">
    //                 <div className="profile-index">
    //                     <p>Goals: {goalCount}</p>
    //                     <div className="goals-count">
    //                         <p className="objectives-count" onClick={() => navigate('/objectives')}>Objectives: {objectiveCount}</p>
    //                         <p className="trips-count" onClick={() => navigate('/trips')}>Trips: {tripCount}</p>
    //                     </div>
    //                     <p>Achievements: {achievementCount}</p>
    //                     <div className="achievements-count">
    //                         <p className="skills-count" onClick={() => navigate('/skills')}>Skills: {skillCount}</p>
    //                         <p className="journeys-count" onClick={() => navigate('/journeys')}>Journeys: {journeyCount}</p>
    //                     </div>
    //                     <p>Feels</p>
    //                     <div className="feels-count-div">
    //                         <p className="feels-count" onClick={() => navigate('/feels')}>Put yourself in your {feelCount} feels...</p>
    //                     </div>
    //                     <p>Contacts</p>
    //                     <div className="contacts-div">
    //                         <p className="contacts-count" onClick={() => navigate('/contacts')}>Access your {contactCount} contacts. oh so popular!</p>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="entries">
    //                 *******we'll put our entry forms here*******
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default Profile;