import { Col, Container, Row } from "react-bootstrap"
import title from "../assets/images/titleog.svg";
import gittt from '../assets/images/github.svg';
import linkedin from '../assets/images/linkedin.svg';
import instagram from '../assets/images/instagram.svg';

export const Footer=()=>{
    return(
        <footer className="footer">
            <Container >
                <Row className="foot">
                    <Row>
                    <Col sm={6} className="title">
                        <img src={title} alt="title"/>

                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={gittt}/></a>
                            <a href=""><img src={linkedin}/></a>
                            <a href=""><img src={instagram}/></a>
                        </div>
                       
                    </Col>
                </Row>

                </Row>
            </Container>
        </footer>
    )
}