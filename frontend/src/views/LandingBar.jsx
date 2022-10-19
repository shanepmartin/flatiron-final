import { Navbar, Nav, Button, Header } from 'rsuite';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { logout } from "../auth/UserState"


const LandingBar = () => {
    let dispatch = useDispatch();
    return (
        <Header>
            <Navbar className="navbar">
                <Navbar.Brand>
                    <Link href="/">
                        <Button className="home-button">BackPocket</Button>
                    </Link>
                </Navbar.Brand>
            </Navbar>
        </Header>
    )
}

export default LandingBar;