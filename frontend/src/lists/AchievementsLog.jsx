import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { List, Panel } from 'rsuite';

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

    return (
        <>
            <div className="list-title"> Achievements Log
                {achievementsArray.map((achievement, index) => {
                    return (
                        <Panel> 
                            <List bordered>
                                <div className="list-heading"> {index + 1}: {achievement.name}
                                    <List key={index} bordered>
                                        <List.Item>date: {achievement.date}</List.Item>
                                        <List.Item>category: {achievement.category}</List.Item>
                                        <List.Item>description: {achievement.description}</List.Item>
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