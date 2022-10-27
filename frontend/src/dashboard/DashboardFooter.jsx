import { Footer, Container, Button } from 'rsuite'
import { useNavigate } from 'react-router-dom';

import { Icon } from '@rsuite/icons';
import ExitIcon from '@rsuite/icons/Exit';

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
                    <Button 
                        icon={<ExitIcon />} 
                        appearance="subtle" 
                        onClick={logout}
                    >
                        <h3><Icon as={ExitIcon} size="10em" /> SignOut</h3>
                    </Button>
                </Footer>
            </Container>
        </div>
    )
}

export default DashboardFooter;