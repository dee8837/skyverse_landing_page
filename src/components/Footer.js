import React from 'react'
import './Footer.css';


 const Footer = () => {
  return (
    <>
    <div className='footerbg'>
          <div className="row w-100 m-0 pt-4">
            <div className="col-4  ">
              {/* <img src="https://skyverse.estate/images/logo-horizontal.png" alt='skyverseLogo' /> */}
              <h5>Skyverse</h5>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                accusamus, ipsa aliquid quas ducimus commodi iusto quam,
                Explicabo accusamus corrupti facere in sint dolorum dol!
              </p>
              <div className="icon ">
                <span id="fb" >
                 <l className="fa-brands fa-facebook-f"></l>
                </span>
                <span id="tw">
                  <i className="fa-brands fa-twitter "></i>
                </span>
                <span id="youtube">
                  <i className="fa-brands fa-square-youtube "></i>
                </span>
                <span id="ln">
                  <i className="fa-brands fa-linkedin-in "></i>
                </span>
              </div>
            </div>
            <div className="col-2">
              <h3 className="tag">Useful Links</h3>
              <ul className="list">
                <li>Contacts us</li>
                <li>How it works</li>
                <li>Crareer</li>
                <li>Explore</li>
                <li>Terms & Services</li>
              </ul>
            </div>
            <div className="col-2">
              <h3 className="tag">Our Policy</h3>
              <ul className="list">
                <li>Help Center</li>
                <li>Partners</li>
                <li>Blog</li>
                <li>Suggestions</li>
                <li>Email</li>
              </ul>
            </div>
            <div className="col-4">
              <h3 className="tag">Stay Informed By Mail</h3>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, veniam, rerum accusantium facilis adipisci quaerat
                provident autem?
              </p>
              <div className="search1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Mail"
                />

                <button className="sent">
                  <i className="fa-sharp fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </div>
          <div className='col-md-12 p-0'>
          <p id="bottom-style" className='mb-0'>
            @ This Project is own by Better Media and Tech
          </p>
          </div>
          </div>
          </div>
      
    </>
  );
};

export default Footer;