// Honor.js
import React from 'react';
import {Col, Container, Row,Carousel } from "react-bootstrap";
import choyon from "../Assets/Images/choyon.jpg";
import ChoyonSirCard from "./ChoyonSirCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";

function Honor(props) {
    return (
        <Container fluid="true" className="text-center mt-5 honorContainer">
            <Row className="p-0 m-2">
                <Col className="noticeDivLeft" md={8} lg={8} sm={12}>
                    <h4 className="noticeTitle text-center">About JU CSE</h4>
                    <img className="juShoidMinar" src="https://i.pinimg.com/originals/9c/b5/0e/9cb50e29be9f450bb8e0b36d4f8ccdf6.jpg" alt=""/>
                    <p className="description text-start p-3">

                        <hr/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad aliquid at blanditiis commodi consequuntur corporis deleniti doloremque dolorum ducimus eos error, expedita fuga illo inventore libero natus non nulla numquam porro possimus qui quibusdam quidem, quis quo recusandae sit totam vero vitae voluptatum? Aliquid error inventore optio quaerat tempora.
                    </p>
                </Col>

                <Col md={4} lg={4} sm={12} >
                    <div className="noticeDivRight">
                        <div className="noticeDivRightheading">
                   <h3 className="noticeTitle"> <FontAwesomeIcon icon={faBell} beatFade size="l" /><span>     </span>Notice</h3>
                        
                        
                        </div>
                        
                        <a href="#">1. Registration Rules</a>
                        <hr/>
                        <a href="#">2. Accomodation</a>
                        <hr/>
                        <a href="#">3. Payment Details</a>
                        <hr/>
                        <a href="#">4. Main Contest Date</a>
                        <hr/>
                        <a href="#" className="seeMoreLink">See More...</a>  
                        <hr/>  
                    </div>
                    <div className="carouselItemContainerSpeech">
                        <h5 className="noticeTitleSpeech"><FontAwesomeIcon icon={faUser} />     Insights from Respected Personalities </h5>
                        <hr/>
                        <Carousel className='carouselVideo'>
      <Carousel.Item>
        <div >
        <iframe className='carouselVideoframe'width="320" height="315" src="https://www.youtube.com/embed/bC4kQ2-kHZE?si=YNCq8mEbLr2EOU7P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="carouselCaptionSpeech">
            <h6>Abraham Lincoln</h6>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div >
        <iframe width="320" height="315" src="https://www.youtube.com/embed/UF8uR6Z6KLc?si=vqzt33t2fjHVALCL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="carouselCaptionSpeech">
            <h6>Steve Jobs</h6>
          </div>
        </div>
      </Carousel.Item>
      {/* Add more Carousel.Items for other videos */}
    </Carousel>
                    </div>
                </Col>
                
            </Row>
        </Container>
    );
}

export default Honor;
