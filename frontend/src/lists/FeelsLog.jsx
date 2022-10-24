import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { List, Panel } from 'rsuite';

const FeelsLog = () => {

    const user = useSelector((state) => state.user)

    const [feelsArray, setFeelList] = useState([])

    const getFeelsList = () => {
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/feels_list/${user.id}`, {
            method: "GET",
            headers: {
                token: token,
                "Content-Type": "application/json"
            },
        })
            .then((res) => res.json())
            .then((list) => {
                console.log('list of feels', list)
                setFeelList(list)
            })

    }

    useEffect(() => {
        getFeelsList();
    }, []);

    return (
        <>
            <div className="list-title"> Feels Log
                {feelsArray.map((feel, index) => {
                    return (
                        <Panel>
                            <List bordered>
                                <div className="list-heading"> {index + 1}: {feel.name}
                                    <List key={index} bordered>
                                        <List.Item>date: {feel.date}</List.Item>
                                        <List.Item>time: {feel.time}</List.Item>
                                        <List.Item>entry: {feel.entry}</List.Item>
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

export default FeelsLog;