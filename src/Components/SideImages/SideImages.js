import React from "react";
import { Col, Image } from "react-bootstrap";
import duck from "../../assets/images/Duck-in-pond.jpg";
import sea from "../../assets/images/sea.jpg";
import car from "../../assets/images/car.jpeg";
import wale from "../../assets/images/wale.jpg";
import wood from "../../assets/images/wood.jpeg";
//style file
import "../../assets/styles/sideimage.scss";

const SideImages = () => {
  return (
    <div className="d-flex flex-wrap ">
      <div className="imageWrapper1 d-none d-xl-block">
        <Image className="mainImage1" fluid src={wood} />
      </div>

      <div className="imageWrapper2 d-none d-lg-block">
        <Image className="mainImage2" fluid src={sea} />
      </div>
      <div className="imageWrapper3 ">
        <Image className="mainImage3" fluid src={car} />
      </div>
      <div className="imageWrapper4 d-md-flex d-xs-none ">
        <Image className="mainImage4" fluid src={wale} />
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
