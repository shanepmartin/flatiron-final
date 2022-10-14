import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UserRoute = ({ children }) => {
    const user = useSelector((state) => state.user);
    return user.isLoggedIn ? children : <Navigate to="/login" />
}

export default UserRoute;