import DashBoardSideBar from "../dashboard/DashboardSideBar";
import DashboardHeader from "../dashboard/DashboardHeader";

import { useState } from "react"

const Dashboard = () => {
    const [activeKey, setActiveKey] = useState(null);

    return (
        <>
            <DashboardHeader 
                appearance="subtle" 
                activeKey={activeKey} 
                onSelect={setActiveKey} 
            />
            <DashBoardSideBar 
                activeKey={activeKey}
                onSelect={setActiveKey}
                appearance="subtle" 
            />
        </>
    )
}

export default Dashboard;