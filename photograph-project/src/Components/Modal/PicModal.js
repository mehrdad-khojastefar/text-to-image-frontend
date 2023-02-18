import React, { useContext, useEffect, useState } from "react";
import { Modal, Col, Row, Container, Image } from "react-bootstrap";
import axios from "axios";
import "../../assets/styles/modal.scss";
//loader
import loader from "../../assets/images/Eclipse-1s-200px.gif";
//icon
import svg from "../../assets/icons/search-magnifier-outline-svgrepo-com.svg";
import { getData } from "../../Services/api";
//Context
import { PictureContext } from "../../Context/PictureContextProvider";
const PicModal = (props) => {
  const { text } = props;
  const { picture, setPicture } = useContext(PictureContext);

  const [imageLink, setImageLink] = useState("");

  useEffect(() => {
    const fetchApi =async () => {
      console.log("PIC1: " + picture);
      // getData(test).then((res) => {
      //   console.log("result: " + res);
      //   setPicture(res);
      //   console.log("Picture" + " " + picture);
      // });
      await setPicture(getData(text));
      // console.log("connected");
      // !imageLink &&
    };
    fetchApi();
    console.log("changed? " + picture);
  }, []);
  // console.log(newSearch);
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
                src={picture ? picture : loader}
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
