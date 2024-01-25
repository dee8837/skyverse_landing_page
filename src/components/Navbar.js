import "./Navbar.css";
import { Link,Outlet} from "react-router-dom";
import React from "react";


const Navbar = () => {
  window.addEventListener("load", function(){
      var header = document.getElementById("navBar")
    var sticky = header.offsetTop;
    document.body.onscroll = function() {
      console.log('called');
      if(window.pageYOffset>=sticky){
         header.classList.add('first-active')
         
      }else{
         header.classList.remove('first-active')
      }
    }
  });

  return (
    <>
      <div className="first" id="navBar">
        <nav className="navbar navbar-expand-lg  py-2">
          <div className="container">
            <div className="row w-100">
              <div className="col-3 py-2">
              {/* <img src="https://skyverse.estate/images/logo-horizontal.png" alt='skyverseLogo' /> */}
              <h5>Skyverse</h5>
              </div>

              <div className="col-6">
                <div className="text-link">
                  <ul className="navbar-nav d-flex justify-content-around">
                    <li className="nav-item hover-underline-animation">
                      <Link to="/About" style={{color:"white",textDecoration:"none"}} >
                        About
                      </Link>
                    </li>
                    <li className="nav-item hover-underline-animation">
                      <Link to="/Project"style={{color:"white",textDecoration:"none"}} >
                        Project
                      </Link>
                    </li>
                    <li className="nav-item hover-underline-animation">
                      <Link to="/Team" style={{color:"white",textDecoration:"none"}} >
                        Team
                      </Link>
                    </li>
                    <li className="nav-item hover-underline-animation">
                      <Link to="/Contact" style={{color:"white",textDecoration:"none"}}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <Outlet />
                </div>
              </div>

              <div className="col-3">
                <div className="btn-1">
                  <div className="d-flex justify-content-end" role="search">
                    <button className="btn " type="submit">
                      Let's Talk
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      <script src="main.js"></script>
      </div>

    
    </>
  );
};

export default Navbar;
