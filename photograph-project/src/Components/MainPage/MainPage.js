import React, { useEffect, useState } from "react";
//React-bootstrap
import { Col, Container, Row } from "react-bootstrap";
//messages
import { messages } from "../../assets/messages";
//import css file
import "../../assets/styles/MainPage.scss";
//icon
import svg from "../../assets/icons/search-magnifier-outline-svgrepo-com.svg";
import SideImages from "../SideImages/SideImages";
import PicModal from "../Modal/PicModal";

const MainPage = () => {
  const [searchvalue, setSearchvalue] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const { headerSpan, header, MainPageText, SearchInPutPlaceHolder, MainLink } =
    messages;
  const header1 = header.split(" ");
  const header1firstarray = header1[0].concat(" ", header1[1]);
  const header1secondarray = header1[2].concat(
    " ",
    header1[3],
    " ",
    header1[4]
  );
  const enterchangehandler=async (event)=>{
    
    if(event.key === 'Enter'){
    await  setSearchvalue(event.target.value);
      searchvalue && setModalShow(true);

      event.target.value=""
  }
}
  useEffect(()=>{

  },[searchvalue])
 
  return (
    <Container className="main rounded-5 mb-5 p-5 position-relative">
      <Row className="d-flex flex-nowrap m-auto">
        <Col xs={12} sm={12} md={8} className="mt-md-3 ps-md-5 ">
          <span className="headerSpan position-relative">{headerSpan}</span>
          <Col
            xs={12}
            className="headerWrapper mt-5 ps-2 position-relative"
            style={{ zIndex: "2" }}
          >
            <h1 className="header">{header1firstarray}</h1>
            <h1 className="header">{header1secondarray}</h1>
          </Col>
          <Col xs={12} md={6} className="mt-md-4 ps-3">
            <p className="position-relative" style={{ zIndex: "2" }}>
              {MainPageText}
            </p>
          </Col>
          <Col
            xs={12}
            md={12}
            lg={9}
            className="SearchInput position-relative rounded-pill  "
          >
            <input
              className="SearchInput"
              placeholder={SearchInPutPlaceHolder}
              type="search"
              onChange={(e) => {
                setSearchvalue(e.target.value)
              }}
              onKeyDown={enterchangehandler}
                // if(event.key === 'Enter'){
                //   setSearchvalue(event.target.value);
                //   searchvalue && setModalShow(true);

                //   event.target.value=""
                // }
              
            />
            <button
              onClick={async() => {
               await searchvalue && setModalShow(true);
                console.log(searchvalue);
                
              }}
            >
              <img src={svg} alt="searchIcon" />
            </button>
          </Col>
        </Col>
        <Col xs={12} md={4} sm={12} className="mt-md-5 ps-md-5">
          <SideImages />
        </Col>
      </Row>
      {setModalShow && (
        <PicModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          text={searchvalue}
        />
      )}
    </Container>
  );
};

export default MainPage;
