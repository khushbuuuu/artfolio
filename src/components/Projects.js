import { Col, Container, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorsharp2 from "../assets/images/color-sharp2.png";
import projImg1 from "../assets/images/allicon1.png";
import projImg2 from "../assets/images/psychecage1.png";
import projImg3 from "../assets/images/promiseofhope1.png";
import projImg4 from "../assets/images/lovestrokes1.png";
import projImg5 from "../assets/images/sweetgems1.png";
import projImg6 from "../assets/images/devarupa1.png";


export const Projects=()=>{
    const projects =[
        {
            title: "Art Melody",
            description:"Artistic symphony blending diverse themes, emotions, and creativity harmoniously together.",
            imgurl: projImg1,
        },
        {
            title: "Psyche Cage",
            description:"Intriguing mind's emotional complexities",
            imgurl: projImg2,
        },
        {
            title: "Promise of Hope",
            description:"Promising art, inspiring hope amid challenges",
            imgurl: projImg3,
        },
        {
            title: "Love Strokes",
            description:"Tender strokes, love's embrace, romantic moments painted",
            imgurl: projImg4,
        },
        {
            title: "Sweet Little Gems",
            description:"Charming little gems, joy to behold, lasting impressions",
            imgurl: projImg5,
        },
        {
            title: "Devarupa",
            description:"Devarupa: Shri krishna's beautiful deep eyes, Shri Radhe's inevitable love. Spiritual artistry.",
            imgurl: projImg6,
        },
       
    ];
    return(
        <section className="project" id="artgallery">
            <Container >
                <Row>
                    <Col className="kbi">
                    <h2>Art Gallery</h2>
                    <p className="parath">Welcome to my art gallery, where you have the freedom to choose from an array of captivating themes. Delight in exploring each unique collection or simply savor the experience of witnessing them all at once by clicking the 'Art Melody' tab.</p>
                    <Row className="nav-pills" id="pills-tab">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                        
                </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorsharp2}></img>
        </section>

    )

}