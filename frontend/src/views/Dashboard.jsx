import DashBoardSideBar from "../dashboard/DashboardSideBar";
import DashboardHeader from "../dashboard/DashboardHeader";
import DashboardFooter from "../dashboard/DashboardFooter"

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
            <br>
            </br>
            <DashBoardSideBar 
                activeKey={activeKey}
                onSelect={setActiveKey}
                appearance="subtle" 
            />
            <br>
            </br>
            <DashboardFooter />
        </>
    )
}

export default Dashboard;