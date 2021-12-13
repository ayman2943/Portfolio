import React from "react";
import {
  FaFacebookSquare,
  FaGooglePlusG,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaChevronUp,
 
} from "react-icons/fa";

function Footer() {
    var style = { color:"white", fontSize: "2.5em",backgroundColor:"black"}
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">
              Some Where in India
              <br />
              FDFFSC SDFS
            </p>
          </div>
          <hr className="visible-xs" />
          <div className="col-md-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <button
                  className="btn btn-outline-light btn-social text-center rounded-circle"
                  
                >
                  <FaFacebookSquare style={style}/>
                </button>
              </li>
              <li className="list-inline-item">
                <button
                  className="btn btn-outline-light btn-social text-center rounded-circle"
                
                >
                <FaGooglePlusG style={style}/>
                </button>
              </li>
              <li className="list-inline-item">
                <button
                  className="btn btn-outline-light btn-social text-center rounded-circle"
                  
                >
                  <FaTwitter style={style}/>
                </button>
              </li>
              <li className="list-inline-item">
                <button
                  className="btn btn-outline-light btn-social text-center rounded-circle"
                  
                >
                 <FaInstagram style={style}/>
                </button>
              </li>
              <li className="list-inline-item">
                <button
                  className="btn btn-outline-light btn-social text-center rounded-circle"
                  
                >
                 <FaDribbble style={style}/>
                </button>
              </li>
            </ul>
          </div>
          <hr className="visible-xs" />
          <div className="col-md-4">
            <h4 className="text-uppercase mb-4">About</h4>
            <p className="lead mb-0">
              This is button sample page created to demonstrate Converting Bootstrap
              Theme to WordPress (<button href="http://5balloons.info">5balloons</button>)
            </p>
          </div>
        </div>
      </div>
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; </small>
        </div>
      </div>

      <div className="scroll-to-top d-lg-none position-fixed ">
        <button
          className="js-scroll-trigger d-block text-center text-white rounded"
          href="#page-top"
        >
          <FaChevronUp/>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
