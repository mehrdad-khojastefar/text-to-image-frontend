import React from "react";
import { Col, Image } from "react-bootstrap";
import duck from "../../assets/images/Duck-in-pond.jpg";
//style file
import "../../assets/styles/sideimage.scss";

const SideImages = () => {
  return (
    <div className="d-flex flex-wrap ">
      <div className="imageWrapper1 d-none d-lg-block">
        <Image className="mainImage1" fluid src={duck} />
      </div>

      <div className="imageWrapper2 ">
        <Image className="mainImage2" fluid src={duck} />
      </div>
      <div className="imageWrapper3 ">
        <Image className="mainImage3" fluid src={duck} />
      </div>
      <div className="imageWrapper4 d-md-flex d-xs-none ">
        <Image className="mainImage4" fluid src={duck} />
      </div>

      {/*<div className='imageWrapper rounded bg-danger' style={{width:"200px", height:"200px"}}     >
            <Image fluid src={duck} style={{width:"200px", height:"200px"}} className="overflow"/>
        </div>
        <div className='imageWrapper rounded bg-danger' style={{width:"200px", height:"200px"}}     >
            <Image fluid src={duck} style={{width:"200px", height:"200px"}} className="overflow"/>
        </div> */}
    </div>
  );
};

export default SideImages;
