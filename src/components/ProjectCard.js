import {  Col } from "react-bootstrap";


export const ProjectCard=({title, description, imgurl}) =>{
   return (
    <Col sm={6} md={4} className="themebox">
        <div className="imgbx">
            <img src={imgurl}/>
            <div className="textt">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
   ) 
}