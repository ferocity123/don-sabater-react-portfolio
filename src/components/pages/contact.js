import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import contactPagePicture from "../../../static/assets/image/get-back-to-code-km.jpg"

export default function() {
  return (
  <div className="content-page-wrapper">
    <did className="left-column" 
      style={{
        background: "url(" +contactPagePicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    />
       <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>

            <div className="text">555-555-5555</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>

            <div className="text">wassapdon2000@yahoo.com></div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>

            <div className="text">Los Angeles, CA</div>
          </div>
        </div>
      </div>
    </div>
  );
}
