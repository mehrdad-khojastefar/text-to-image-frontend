import React, { useContext, useEffect, useState } from "react";
import { Modal, Col, Row, Container, Image } from "react-bootstrap";
import "../../assets/styles/modal.scss";
//Context
import { PictureContext } from "../../Context/PictureContextProvider";
const PicModal = (props) => {
  const { text, picturesent } = props;
  const { picture, setPicture } = useContext(PictureContext);
  console.log(picture);
  console.log(picturesent);
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };
  useEffect(() => {
    setPicture(picture);
  }, [picture]);
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
              <Image
                className="searchedImage"
                fluid
                src={picture}
                onLoad={handleLoad}
              />
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
