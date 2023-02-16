import React, { useState } from "react";
//React-bootstrap
import { Col, Container, Row } from "react-bootstrap";
//messages
import { messages } from "../../assets/messages";
//import css file 
import "../../assets/styles/MainPage.scss"
//icon
import svg from "../../assets/icons/search-magnifier-outline-svgrepo-com.svg"
import SideImages from "../SideImages/SideImages";
const MainPage = () => {
    const[searchvalue,setSearchvalue]=useState()
  const { headerSpan, header, MainPageText, SearchInPutPlaceHolder, MainLink } =
    messages;
    const header1=header.split(" ");
    const header1firstarray=header1[0].concat(" ",header1[1])
    const header1secondarray=header1[2].concat(" ",header1[3]," ",header1[4])
    console.log(header1firstarray);
    console.log(header1secondarray);
  return (
    <Container className="main rounded-5 m-auto p-5 position-relative">
      <Row className="d-flex flex-nowrap m-auto">
        <Col xs={12} md={7} className="mt-md-3 ps-md-5 ">
          <span className="headerSpan ">{headerSpan}</span>

            <Col xs={12} className="mt-5 ps-2 position-relative" style={{zIndex:"2"}}>

          <h1 className="header">{header1firstarray}</h1>
          <h1 className="header">{header1secondarray}</h1>
            </Col>
            <Col xs={12} md={6} className="mt-md-4 ps-3">
            <p>{MainPageText}</p>
            </Col>
          <Col xs={12} md={12} className="SearchInput position-relative rounded-pill  ">
            <input
              className="SearchInput"
              placeholder={SearchInPutPlaceHolder}
              type="search"
              onChange={(e)=>searchvalue(e.target.value)}
              />
              <button>
                <img src={svg}/>
              </button>
          </Col>
        </Col>
        <Col xs={12} md={5} className="mt-md-5 ps-md-5">
        <SideImages/>
            
        </Col>
        
      </Row>
    </Container>
  );
};

export default MainPage;
