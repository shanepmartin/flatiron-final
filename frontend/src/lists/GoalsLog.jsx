import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { List, Panel } from 'rsuite';

const GoalsLog = () => {

    const user = useSelector((state) => state.user)

    const [goalsArray, setGoalList] = useState([])

    const getGoalsList = () => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/goals_list/${user.id}`, {
            method: "GET",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
        })
        .then((res) => res.json())
        .then((list) => {
            console.log('list of goals', list)
            setGoalList(list)
        })

    }

    useEffect(() => {
        getGoalsList();
    }, []);

    return (
        <>
            <div className="list-title"> Goals Log
                {goalsArray.map((goal, index) => {
                    return (
                        <Panel>
                            <List bordered>
                                <div className="list-heading"> {index + 1}: {goal.name}
                                    <List key={index} bordered>
                                        <List.Item>date: {goal.date}</List.Item>
                                        <List.Item>category: {goal.category}</List.Item>
                                        <List.Item>description: {goal.description}</List.Item>
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

export default GoalsLog;