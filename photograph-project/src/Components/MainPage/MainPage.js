import React, { useContext, useEffect, useRef, useState } from "react";
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
//Context
import { PictureContext } from "../../Context/PictureContextProvider";

const MainPage = () => {
  const [searchvalue, setSearchvalue] = useState("");
  const [apinput, setapiinput] = useState("");
  const [defaultvalue, setDefaultValue] = useState("");
  const [modalShow, setModalShow] = useState(false);

  //Context
  const {setPicture,picture}=useContext(PictureContext)

  const { headerSpan, header, MainPageText, SearchInPutPlaceHolder, MainLink } =
    messages;
  const header1 = header.split(" ");
  const enterchangehandler = async (event) => {
    if (event.key === "Enter") {
      await setSearchvalue(event.target.value);
      searchvalue && setModalShow(true);
      console.log(apinput);
      event.target.value = "";
    }
  };
  useEffect(() => {
    setapiinput(searchvalue);
    // setPicture("")
  }, [searchvalue,picture]);
  const input = useRef(null);

  return (
    <Container className="main rounded-5 mb-5 p-5 position-relative">
      <Row className="d-flex flex-nowrap ">
        <Col xs={12} sm={12} md={8} lg={8} className="mt-md-3 ps-md-5 ">
          <span className="headerSpan position-relative">{headerSpan}</span>
          <Col
            sm={12}
            xs={12}
            md={12}
            lg={9}
            xl={7}
            className="headerWrapper mt-5 pt-2 pt-md-0  ps-2 position-relative"
            style={{ zIndex: "2" }}
          >
            <h1 className="header mt-5">{header}</h1>
          </Col>
          <Col xs={12} md={12} lg={6} className="my-4 ps-3">
            <p className="position-relative mainText" style={{ zIndex: "2" }}>
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
              ref={input}
              className="SearchInput"
              placeholder={SearchInPutPlaceHolder}
              type="search"
              spellCheck="false"
              defaultValue={defaultvalue}
              onChange={(e) => {
                setSearchvalue(e.target.value);
              }}
              onKeyDown={enterchangehandler}
              // if(event.key === 'Enter'){
              //   setSearchvalue(event.target.value);
              //   searchvalue && setModalShow(true);

              //   event.target.value=""
              // }
            />
            <button
              onClick={() => {
                input.current.value && setModalShow(true);
                console.log(apinput);
                setDefaultValue("");
                input.current.value = "";
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

      {modalShow && (
        <PicModal
          show={modalShow}
          onHide={() =>{
           setModalShow(false);
           setPicture("");
           console.log("hide");
           console.log(picture)
          
          }}
          text={apinput}
        />
      )}
    </Container>
  );
};

export default MainPage;
