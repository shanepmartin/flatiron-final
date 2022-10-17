import { Link } from 'react-router-dom'
import './Style/NavBar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faUser, faBuilding, faBusinessTime } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <div className='header'>
            <div className='header_left'>
                <h1 className='logo'>BackPocket</h1>
                <div className='header_search'>
                    <i className='materials-icons'></i>
                    <FontAwesomeIcon className='materials-icons' icon={faSearch}></FontAwesomeIcon>
                    <input type='text' />
                </div>
            </div>
            <div className='header_right'>
                <Link className='link' to='/'>
                    <div className='headerOption'>
                        <FontAwesomeIcon className='materials-icons headerOption_icon' icon={faHome}></FontAwesomeIcon>
                        <h3>Home</h3>
                    </div>
                </Link>
                <Link className='link' to='/contacts'>
                    <div className='headerOption'>
                        <FontAwesomeIcon className='materials-icons headerOption_icon' icon={faUser}></FontAwesomeIcon>
                        <h3>Contacts</h3>
                    </div>
                </Link>
                <Link className='link' to='/goals'>
                    <div className='headerOption'>
                        <FontAwesomeIcon className='materials-icons headerOption_icon' icon={faBuilding}></FontAwesomeIcon>
                        <h3>Goals</h3>
                    </div>
                </Link>
                <Link className='link' to='/achievements'>
                    <div className='headerOption'>
                        <FontAwesomeIcon className='materials-icons headerOption_icon' icon={faBusinessTime}></FontAwesomeIcon>
                        <h3>Achievements</h3>
                    </div>
                </Link>
                <Link className='link' to='/feels'>
                    <div className='headerOption'>
                        <FontAwesomeIcon className='materials-icons headerOption_icon' icon={faBuilding}></FontAwesomeIcon>
                        <h3>Feels</h3>
                    </div>
                </Link>
            </div>


        </div>
    )
}

export default NavBar;