import { Footer, Container, Button } from 'rsuite'
import { useNavigate } from 'react-router-dom';

const DashboardFooter = () => {
    let navigate = useNavigate()
    return (
        <div className='footer'>
            <Container>
                <Footer>
                    <Button onClick={() => navigate('/signup')}>SignUp</Button>
                </Footer>
            </Container>
        </div>
    )
}

export default DashboardFooter;