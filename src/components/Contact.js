import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import cntctimg from "../assets/images/contact-img.svg";

export const Contact=() =>{
    const formInitialDetails={
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        message:'', 
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const[buttonText, setButtonText]= useState('send');
    const[status, setStatus] = useState({});
    
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]:value
        }
        )

    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        setButtonText('sending...');
        let response = await fetch ("http://localhost:5500/contact", {
            method: "POST",
            headers:{
                "Content-Type": "Application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result= response.json();
        setFormDetails(formInitialDetails);
        if(result.code===200){
            setStatus({success: true, message:'Message sent successfully'});

        } else{
            setStatus({success: false, message: 'Something went wrong. please try again later.'})
        }
        

    }
    return(
        <section className="contactform" id="connect">
            <Container className="contact" >
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src ={cntctimg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                   <input type="text" value={formDetails.firstname} placeholder="First Name" onChange={(e) =>onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                               </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                </Col>
                                <Col>
                                <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e)=> onFormUpdate('message', e.target.value)}/>
                                <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                   status.message&&
                                   <Col>
                                   <p className={status.success===false?"danger":"success"}>{status.message}</p>
                                   </Col> 
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

