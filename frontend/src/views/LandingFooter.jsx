import { Footer, Container, Button } from 'rsuite'
import { useNavigate } from 'react-router-dom';

const LandingFooter = () => {
    let navigate = useNavigate()
    return (
        <div className="flex w-full component-preview items-center justify-center font-sans">
            <Container>
                <Footer>
                    <Button onClick={() => navigate('/signup')}>SignUp</Button>
                </Footer>
            </Container>
        </div>
    )
}

export default LandingFooter;