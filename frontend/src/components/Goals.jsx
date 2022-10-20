import NewGoal from "../forms/NewGoal"
import DashBoardSideBar from "../dashboard/DashboardSideBar";
import { useState } from "react"

const Goals = () => {
    const [activeKey, setActiveKey] = useState('1');
    const [openKeys, setOpenKeys] = useState(['3', '4']);
    const [expanded, setExpand] = useState(true);
    return (
        <>
            <DashBoardSideBar
                activeKey={activeKey}
                openKeys={openKeys}
                onOpenChange={setOpenKeys}
                onSelect={setActiveKey}
                expanded={expanded}
                onExpand={setExpand}
                appearance="subtle"
            />
            <NewGoal />
        </>
    )
}

export default Goals;