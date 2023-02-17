import React, { useEffect, useState } from "react";
import { Modal, Col, Row, Container, Image } from "react-bootstrap";
import axios from "axios";
import "../../assets/styles/modal.scss";
//test image
import duck from "../../assets/images/Duck-in-pond.jpg";

//icon
import svg from "../../assets/icons/search-magnifier-outline-svgrepo-com.svg";
const PicModal = (props) => {
  const { text , show } = props;
  const [newSearch, SetnewSearch] = useState(text);
  const [newInput, setNewinput] = useState(text);
  useEffect(() => {
    //axios.get
  }, );
  console.log(newSearch);
  const renderImage = () => {
    const response = axios.get("");
  };
  const { setSearchvalue } = props;
  
  return (
    <Modal
      className="MainModal"
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-90w"
      centered
    >
      <Modal.Header closeButton className="modalHeader"></Modal.Header>
      <Modal.Body className="modalbody">
        <Container fluid>
          <Row>
            <Col
              className="image-container"
              xs={{ order: "first", span: 12 }}
              lg={{ order: "last", span: 7 }}
            >
              <Image className="searchedImage" fluid src={duck} />
             

              </Col>

            <Col xs={12} lg={5} className="info ">
              <Col xs={12}>
                {/* {(newSearch!==text) && <h3>{text}</h3>} */}
                <h3 className="infoText my-2 me-2">{newSearch ? `${newSearch}` : `${text}`}</h3>
              </Col>
              <Col className="SearchInput position-relative rounded-pill  "
>
              <input
                className="SearchInput"
                type="search"
                placeholder="search for picture"
                onChange={(e) => {
                  setNewinput(e.target.value);
                }}
                onKeyDown={(event)=>{
                  if(event.key === 'Enter'){
                    setNewinput(event.target.value);
                    SetnewSearch(newInput);
                    event.target.value=""
                  }
                }}
                />
              <button
                onClick={() => {
                  SetnewSearch(newInput);
                  console.log(newSearch);

                }}
                >
                <img src={svg} alt="searchIcon" />
              </button>
                </Col>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default PicModal;
