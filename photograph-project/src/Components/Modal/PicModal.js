import React, { useEffect, useState } from "react";
import { Modal, Col, Row, Container, Image } from "react-bootstrap";
import axios from "axios";
import "../../assets/styles/modal.scss";
//test image
import duck from "../../assets/images/Duck-in-pond.jpg";

//icon
import svg from "../../assets/icons/search-magnifier-outline-svgrepo-com.svg";
import { getData } from "../../Services/api";
const PicModal = (props) => {
  const { text } = props;
  // const [newSearch, SetnewSearch] = useState(text);
  // const [newInput, setNewinput] = useState(text);
  const [imageLink, setImageLink] = useState("");

  useEffect(() => {
    const fetchAPi = async () => {
      
      setImageLink(await getData(text));
      console.log("connected");
      console.log(imageLink);
    };
    // !imageLink && 
    fetchAPi();
  }, [text]);
  // console.log(newSearch);
console.log(imageLink)
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
              <Image className="searchedImage" fluid src={imageLink} />
            </Col>
            <Col
              xs={12}
              lg={5}
              className="info px-5 py-3 d-flex justify-content-center align-item-center"
            >
              <Col xs={12}>
                <p className="infoText mb-2 me-2">{`${text}`}</p>
              </Col>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
    
  );
};

export default PicModal;
