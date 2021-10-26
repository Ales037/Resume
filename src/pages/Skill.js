import React from 'react';
import './Skill.css';
import {Row,Col,Container } from 'react-bootstrap';
import { FaHtml5 ,FaCss3Alt,FaReact,FaChessKnight} from "react-icons/fa";
import { SiCplusplus,SiCodio,SiCsharp,SiPython,SiJavascript,SiJava,SiBootstrap,SiAngular,SiMysql,SiMicrosoftsqlserver,SiAdobexd,SiPostman,SiSwagger} from "react-icons/si"; 
import { DiPhp } from "react-icons/di"; 
import { AiOutlineConsoleSql ,AiFillGithub,AiFillFire} from "react-icons/ai";
import { VscFileCode ,VscMultipleWindows} from "react-icons/vsc";


const Skill = () =>{

    return(
       
        <div>
        <Container fluid>
            <Row>
                <Col>
                <div className="card-posiction">
                    <div className="card-skill text-center">
                    <div className="card-header">
                    Programing Skills<i style={{color: '#FD5713'}}> <AiFillFire /></i>
                    </div><br />
                    <Row>
                    <Col md={4}>
                        <div className="icon-size" style={{color:'#F5781C'}}><FaHtml5 /></div>
                        <h4>HTML</h4>
                    </Col>
                    <Col md={4}>
                    <div className="icon-size" style={{color:'#3693ff'}}><FaCss3Alt /></div>
                    <h4>CSS</h4>
                    </Col>
                    <Col md={4}>
                    <div className="icon-size" style={{color:'#582CB0'}}><DiPhp  /></div>
                    <h4>PHP</h4>
                    </Col>
                    </Row>
                    <Row>
                    <Col md={4}>
                        <div className="icon-size" style={{color:'#EC2E2B'}}><SiJava /></div>
                        <h4>Java</h4>
                    </Col>
                    <Col md={4}>
                    <div className="icon-size" style={{color:'#11D999'}}><SiCplusplus /></div>
                    <h4>C++</h4>
                    </Col>
                    <Col md={4}>
                    <div className="icon-size" style={{color:'#BC5BFF'}}><SiCsharp /></div>
                    <h4>C#</h4>
                    </Col>
                    </Row>
                    <Row>
                    <Col md={4}>
                        <div className="icon-size" style={{color:'#5BFFF0'}}><SiCodio /></div>
                        <h4>C</h4>
                    </Col>
                    <Col md={4}>
                    <div className="icon-size" style={{color:'#2690A5'}}><AiOutlineConsoleSql /></div>
                    <h4>SQL</h4>
                    </Col>
                    <Col md={4}>
                    <div className="icon-size" style={{color:'#1CF736'}}><SiPython /></div>
                    <h4>Python</h4>
                    </Col>
                    </Row>
                    <Row>
                    <Col md={4}>
                        <div className="icon-size" style={{color:'#F3F017'}}><SiJavascript /></div>
                        <h4>Javascript</h4>
                    </Col>
                    </Row>
                    </div>
                </div><br />
                </Col>
            </Row>
                
                <Row>
                    <Col>
                    <div className="card-posiction">
                        <div className="card-skill text-center">
                        <div className="card-header">
                        Software and Tool Framework Skills<i style={{color: '#5D70F7'}}> <FaChessKnight /></i>
                        </div><br />
                        <Row>
                        <Col md={4}>
                            <div className="icon-size" style={{color:'#8F17F3'}}><SiBootstrap /></div>
                            <h4>Bootstrap</h4>
                            <p>พื้นฐาน : Grid layout styles, Content types, Responsive</p>
                        </Col>
                        <Col md={4}>
                            <div className="icon-size" style={{color:'#F3172E'}}><SiAngular /></div>
                            <h4>Angular</h4>
                            <p>พื้นฐาน : Routing root, Databinding , Cors API</p>
                        </Col>
                        <Col md={4}>
                        <div className="icon-size" style={{color:'#17CEF3'}}><FaReact  /></div>
                        <h4>React</h4>
                        <p>พื้นฐาน : Component, React JSX, JSX Style</p>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={4}>
                            <div className="icon-size" style={{color:'#8A9495'}}><VscFileCode /></div>
                            <h4>C# ASP.NET Framework</h4>
                            <p>พื้นฐาน : data entity framework</p>
                        </Col>
                        <Col md={4}>
                        <div className="icon-size" style={{color:'#8A9495'}}><VscMultipleWindows /></div>
                        <h4>C# ASP.NET Core API</h4>
                        <p>พื้นฐาน : HTTP  Request</p>
                        </Col>
                        <Col md={4}>
                        <div className="icon-size" style={{color:'#4A1661'}}><AiFillGithub  /></div>
                        <h4>Github GitCli</h4>
                        <p>พื้นฐาน : Clone, push, Pull</p>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={4}>
                            <div className="icon-size" style={{color:'#2D0FB5'}}><SiMysql /></div>
                            <h4>MySQL</h4>
                            <p>พื้นฐาน : connected  PHP</p>
                        </Col>
                        <Col md={4}>
                        <div className="icon-size" style={{color:'#EC2BA0'}}><SiMicrosoftsqlserver /></div>
                        <h4>Microsoft SQL Server</h4>
                        <p>พื้นฐาน : connected  C#</p>
                        </Col>
                        <Col md={4}>
                        <div className="icon-size" style={{color:'#EC2BB7'}}><SiAdobexd  /></div>
                        <h4>adobe XD</h4>
                        <p>พื้นฐาน : Web application, Mobile application Design</p>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={4}>
                            <div className="icon-size" style={{color:'#F88C19'}}><SiPostman /></div>
                            <h4>Postman</h4>
                            <p>พื้นฐาน : Test HTTP Request</p>
                        </Col>
                        <Col md={4}>
                        <div className="icon-size" style={{color:'#0FC812'}}><SiSwagger /></div>
                        <h4>Swagger</h4>
                        <p>พื้นฐาน : Swagger API  Document in C#</p>
                        </Col>
                        </Row>
                        </div>
                    </div><br />
                    </Col>
                </Row>
        </Container>
        </div>
    );


}

export default Skill;