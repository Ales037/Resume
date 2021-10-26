import React from 'react';
import './Home.css';
import 'font-awesome/css/font-awesome.min.css';
import profileimg from '../images/Me4.jpg';
import {Row,Col,Container } from 'react-bootstrap';
import { FaUserGraduate,FaHiking ,FaMapMarkedAlt,FaCat,FaShapes,FaDiagnoses} from "react-icons/fa";

const Home = () =>{

    let bannerData = {
    
        title: "Curriculum Vitae",
        desc: "landing page Create by ReactJS"
    }

    let profile = {

        nameTH: "ภานุพงศ์ เจริญสวัสดิ์",
        nameEN: "Panupong Jaroensawat"
    }
   
    let position = {

        address: "185/5 ตำบลเมืองเดช อำเภอเดชอุดม จังหวัดอุบลราชธานี"   
    }

    let education = {

        classobj:"ปริญญาตรี Enterprise Software",
        univer:"มหาวิทยาลัยเทคโนโลยีสุรนารี",
        office:"สำนักวิชาเทคโนโลยีสังคม สาขาเทคโนโลยีสารสนเทศ",
      
    }

    let about = {

        detail1:"เรียนเกี่ยวกับ - กระบวนการในการวิเคราะห์ ออกแบบ และพัฒนาซอฟต์แวร์",
        detail2:"ด้วยภาษาการโปรแกรมรูปแบบต่างๆ ทั้งที่เป็นโปรแกรมประยุกต์บนเว็บและบนอุปกรณ์เคลื่อนที่"

    }

    let coopEx = {

        coop:"ระยะเวลา - 4 เดือน ที่บริษัท Betimes solutions co. ltd ตำแหน่ง Programmer ",
    }

    
    let coopDet = {
        coopdetMain:"แก้ไข UI และเพิ่มฟังก์ชั่นบางส่วนของโครงการนั้นๆ",
        coopdetLeg:"ภาษาและฐานข้อมูลที่ใช้",
        coopdetF:"Frontend (AngularJS , HTML , CSS)",
        coopdetB:"Backend (SQL server , javascript)",
        coopdetA:"เขียน API พื้นฐาน (ASP.NET Core API)",
    }

    let activity = {

        acA:"- PHP (CRUD) Project",
        acB:"- Web Application C# ASP.NET Framework (CRUD) Project",
        acC:"- Mobile application (android) Project",
        acD:"- Arduino (IOT) Project",
        
    }

    
    return(
        
    <div className="background-img">
        <Container fluid>
        <Row>
            <Col>
                <div className="banner-con">
                    <div className="banner-text">
                    <h1>{bannerData.title}</h1>
                    <i className="fa fa-heart" style={{color:'red'}}></i><p>{bannerData.desc}</p>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
            <div className="profile-posiction">
                <div className="card">              
                    <div className="card_img"> 
                    <img src={profileimg} alt="frofileMe"/>
                    </div><br />
                        <div className="card-body">
                            <div className="text">
                                <p>{profile.nameEN}</p>
                            </div>  
                                <p className="text-edit">{profile.nameTH}</p>
                            <Row>
                                <Col md={6}>
                                    <div className="card-position">
                                    <p>Education<i style={{color: '#553EE5'}}> <FaUserGraduate /></i></p>
                                    </div>
                                    <p className="text-all">{education.classobj}<br />
                                    {education.office}<br />
                                    {education.univer}</p>
                                    <hr />
                                </Col>
                                <Col md={6}>
                                <div className="card-position">
                                    <p>About Me<i style={{color: '#71CF1E'}}> <FaHiking /></i></p>
                                    </div>
                                    <p className="text-all">{about.detail1}<br />
                                    {about.detail2}</p>
                                    <hr />
                                </Col>
                                <Row>
                                    <Col md={6}>
                                    <div className="card-position">
                                    <p>Position<i style={{color: '#1CE3CE'}}> <FaMapMarkedAlt /></i></p>
                                    </div>
                                    <p className="text-all">{position.address}</p> 
                                    <hr />
                                    </Col>
                                    <Col md={6}>
                                    <div className="card-position">
                                    <p>Cooperative experience <i style={{color: '#FF5733'}}> <FaCat /></i></p>
                                    </div>
                                    <p className="text-all">{coopEx.coop}</p>
                                    <hr />
                                    </Col>
                                </Row>
                                <Row>
                                <Col md={6}>
                                    <div className="card-position">
                                    <p>Activity<i style={{color: '#EEF360'}}> <FaDiagnoses /></i></p>
                                    </div>
                                    <p className="text-all">{activity.acA}<br />{activity.acB}<br />{activity.acC}<br />{activity.acD}</p>
                                    <hr />
                                    </Col>
                                    <Col md={6}>
                                    <div className="card-position">
                                    <p>Cooperative Details<i style={{color: '#ec2ba0'}}> <FaShapes /></i></p>
                                    </div>
                                    <p className="text-all">{coopDet.coopdetMain}<br /><br />{coopDet.coopdetLeg}<br />{coopDet.coopdetF}<br />{coopDet.coopdetB}<br />{coopDet.coopdetA}</p> 
                                    <hr />
                                    </Col>
                                </Row>
                            </Row>
                        </div>  
                </div>
            </div>
            </Col>
        </Row>
        <br />
        </Container>
    </div>

  );
}

export default Home;

