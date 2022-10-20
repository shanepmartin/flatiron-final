import NewFeel from "../forms/NewFeel";
import DashBoardSideBar from "../dashboard/DashboardSideBar";
import { useState } from "react"

const Feels = () => {
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
            <NewFeel />
        </>
    )
}

export default Feels;