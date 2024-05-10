import { Navbar,Nav,  } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export default function Navigation()
{
    return(
        <div>
            <Navbar variant="dark" bg="dark">
                <Navbar.Brand href="#"><span className="badge bg-light text-dark">News-App</span></Navbar.Brand>
                <Nav>
                    <LinkContainer to={'/'}>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to={'/allnews'}>
                        <Nav.Link>AllNews</Nav.Link>
                    </LinkContainer>
                    
                    <LinkContainer to={'/topsports'}>
                        <Nav.Link>Sports</Nav.Link>
                    </LinkContainer>
                    
                    <LinkContainer to={'/topnews'}>
                        <Nav.Link>Top-HeadLines</Nav.Link>
                    </LinkContainer>
                    
                    
                    
                </Nav>
            </Navbar>
        </div>
    )
}