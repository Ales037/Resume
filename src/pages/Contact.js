import React from 'react';
import {Row,Col,Container } from 'react-bootstrap';
import './Contact.css';
import { FcPhoneAndroid ,FcAddressBook ,FcVoicePresentation,FcSms} from "react-icons/fc";
import line_img from '../images/lineMe.jpg';

const Contact = () =>{

    let contact = {

        phone:"Phone : 093-6373722",
        email:"Email : zznuzz447@gmail.com",
        facebook:"Facebook : Nu Panupong",
        line:"Line ID : nuworsnop",
    }

    return(
        <div>
             <Container fluid>
                 <Row>
                    <Col>
                    <div className="card-posiction">
                        <div className="card-contact text-center">
                            <div className="card-body-con">
                                <div className="text-con">
                                    <br />Contact
                                </div><br />
                                    <p style={{color:'#000'}}>
                                    <i className="icon-size-con"><FcPhoneAndroid /></i>{contact.phone}<br />
                                    <i className="icon-size-con"><FcAddressBook /></i>{contact.email}<br />
                                    <i className="icon-size-con"><FcVoicePresentation /></i>{contact.facebook}<br />
                                    <i className="icon-size-con"><FcSms /></i>{contact.line}<br />
                                    </p><br />
                                    
                            </div>
                            <div className="img-size"> 
                            <img src={line_img} alt="line code"/>
                            </div><br />
                        </div>
                    </div>
                    </Col>
                </Row>
             </Container>
        </div>
    );


}

export default Contact;