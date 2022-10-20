import { Navbar, Button, Header } from 'rsuite';
import { Link } from "react-router-dom";


const LandingBar = () => {
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