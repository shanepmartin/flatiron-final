import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../auth/UserState'
import { BsJournalBookmark } from "react-icons/bs"; 
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'


const NavBar = () => {

    let navigate = useNavigate()

    return (
        <div className='navbar'>
            <NavBar>
                <Navbar.Brand>
                    <BsJournalBookmark width="40px" height="40px"/> BackPocket
                </Navbar.Brand>

                <Nav>
                    <Nav.Link href="/">BackPocket</Nav.Link>
                </Nav>
            </NavBar>
        </div>
    )
}

export default NavBar;