import { Footer, Container, IconButton } from 'rsuite'
import ExitIcon from '@rsuite/icons/Exit';
import { useNavigate } from 'react-router-dom';


const DashboardFooter = () => {
    let navigate = useNavigate()

    const logout = (state) => {
        localStorage.clear();
        window.location.href = "/";
    }

    return (
        <div className='footer'>
            <Container>
                <Footer>
                    <IconButton icon={<ExitIcon />} size="lg" onClick={logout}>SignOut</IconButton>
                </Footer>
            </Container>
        </div>
    )
}

export default DashboardFooter;