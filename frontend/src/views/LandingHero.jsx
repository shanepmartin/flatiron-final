import { Container, Content, Panel, FlexboxGrid, } from 'rsuite';
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";

const LandingHero = () => {

    return (
        <Container className="Home">
            <Content>
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item colspan={12}>
                        <Panel header={<h3>BackPocket</h3>} bordered>
                            <Login />
                        </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Content>
        </Container>
    )
}

export default LandingHero;




    // return (
    //     <div className="Login">
    //         <div>
    //             <h1>LogIn</h1>
    //             <form onSubmit={e => loginSubmit(e)}>
    //                 <input
    //                     onChange={loginChange}
    //                     type="text"
    //                     name="username"
    //                     placeholder="username"
    //                     value={loginData.username}
    //                 />
    //                 <input
    //                     onChange={loginChange}
    //                     type="text"
    //                     name="password"
    //                     placeholder="password"
    //                     value={loginData.password}
    //                 />
    //                 <input type="submit"/>
    //             </form>
    //         </div>
    //     </div>
    // )
// }

// export default Login;




// import { Container, Header, Content, Button, Form, Panel, FlexboxGrid, ButtonToolbar } from 'rsuite';
// import { loginSubmit, loginChange } from './auth/Login'

// const LandingHero = () => {
//     return (
//         <Container className="Login">
//             <Content>
//                 <FlexboxGrid justify="center">
//                     <FlexboxGrid.Item colspan={12}>
//                         <Panel header={<h3>BackPocket</h3>} bordered>
//                             <Form onSubmit={e => loginSubmit(e)}>
//                                 <Form.Group>
//                                     <Form.ControlLabel>Username</Form.ControlLabel>
//                                     <Form.Control 
//                                         onChange={loginChange}
//                                         name="name" 
//                                     />
//                                 </Form.Group>
//                                 <Form.Group>
//                                     <Form.ControlLabel>Password</Form.ControlLabel>
//                                     <Form.Control 
//                                         onChange={loginChange}
//                                         name="password" 
//                                         type="password" 
//                                         autoComplete="off" 
//                                     />
//                                 </Form.Group>
//                                 <Form.Group>
//                                     <ButtonToolbar>
//                                         <Button 
//                                         appearance="primary" href="login" >Sign in</Button>
//                                     </ButtonToolbar>
//                                 </Form.Group>
//                             </Form>
//                         </Panel>
//                     </FlexboxGrid.Item>
//                 </FlexboxGrid>
//             </Content>
//         </Container>
//     )
// }

// export default LandingHero;

