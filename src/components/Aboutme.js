import { Col, Container, Row } from "react-bootstrap"
import myimg from "../assets/images/Group 1 (1).png";

export const Aboutme = () =>{
    return(
    <section className="aboutx" id="aboutmex">
        <Container className="aboutme">
                 <Row >
                    <Col>
                    
                   <div className="myimage">
                  
                    <img src={myimg}/>
                   </div>
                   </Col>
                   <Col>
                   <div className="about">
                   <div className="head"><h2> About</h2></div>
                <span>Hello there! I'm Khushboo Ramani, a passionate artist currently in my final year of B.Tech at Dr. B.R. Ambedkar National Institute of Technology in Jalandhar. While my academic journey has revolved around technology, art has always been my lifeline, my way of survival, and my ultimate coping mechanism in this fast-paced world.<br></br>From a very young age, creativity has been coursing through my veins. I find solace and joy in expressing my thoughts, emotions, and ideas through various forms of art. Whether it's sketching, painting, or digital art, I immerse myself in the process, allowing my creativity to flow freely.<br></br>This website serves as a platform for me to showcase my artistic journey, my passion for art, and my growth as an artist. Here, you'll find a collection of my artwork, ranging from traditional to digital pieces, each representing a unique facet of my creative expression.<br></br>Thank you for visiting my artfolio website, and I hope my art speaks to your heart as much as it does to mine. Feel free to explore and connect with me on this artistic journey. Let's celebrate the beauty of creativity together!</span>
                   </div>
                   </Col>
                   
                </Row>

        </Container>
        </section>
    )

}