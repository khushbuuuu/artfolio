import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerimg from "../assets/images/header-img.svg";
import { useEffect, useState } from "react";
import "animate.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["an Artist", "a Web Developer", "a Graphic Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(600 - Math.random * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Artfolio</span>
            <h1>
              {"Hi, I'm Khushboo "}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              As an artist, I pour my heart onto canvas and explore diverse
              mediums to bring my imagination to life. Each artwork is a glimpse
              into my emotions and a celebration of artistic expression.{" "}
              <br></br>Thank you for visiting my virtual gallery. Let's embark
              on a creative journey together!
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerimg} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
