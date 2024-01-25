import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="img-text">
        <img src="./assets/page-banner-bg.jpg" alt="responsive img"></img>
        <div className="text1">
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-4 ">
            <div className="card1">
              <h2 style={{ textAlign: "center" }}>Contact Info</h2>
              <br />
              <p style={{ paddingLeft: "50px" }}>
                Address:
                <br />
                <br />
                Email:
                <br />
                <br />
                Phone:
                <br />
                <br />
                Time:
                <br />
                <br />
              </p>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card2">
              <img src="./assets/journey-bg_1280.jpg" alt="background-img" />
            </div>
          </div>
        </div>
      </div>

      {/* Input section start from down */}
      <div className="header-tag">
        <h6 style={{ color: "#cc5a62" }}>CONTACT US </h6>
        <br />
        <span>
          <h1>Get In Touch</h1>
        </span>
        <br />
      </div>

      <div className="container  all-input-Tag ">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-4 ">
            <span className="d-block py-2">Full Name</span>
            <input
              id="all-place-holder"
              type="text"
              placeholder="Name*"
              required
              style={{
                borderRadius: "7px",
                width: "100%",
                height: "50px",
                backgroundColor: "transparent",
                border: "1px solid white",
              }}
            ></input>
          </div>

          <div className="col-md-4 ">
            <span className="d-block py-2">Email</span>
            <input
              id="all-place-holder"
              type="text"
              placeholder="Email*"
              required
              style={{
                borderRadius: "7px",
                width: "100%",
                height: "50px",
                backgroundColor: "transparent",
                border: "1px solid white",
              }}
            ></input>
          </div>
          </div>
          <div className="row d-flex justify-content-center ">
          <div className="col-md-4 ">
            <span className="d-block py-2">Phone</span>
            <input
              id="all-place-holder"
              type="text"
              placeholder="Number*"
              required
              style={{
                borderRadius: "7px",
                width: "100%",
                height: "50px",
                backgroundColor: "transparent",
                border: "1px solid white",
              }}
            ></input>
          </div>
          <div className="col-md-4  ">
            <span className="d-block py-2">Subject</span>

            <input
              id="all-place-holder"
              type="text"
              placeholder="Subject*"
              required
              style={{
                borderRadius: "7px",
                width: "100%",
                height: "50px",
                backgroundColor: "transparent",
                border: "1px solid white",
              }}
            ></input>
          </div>
          
          <div className="col-md-8 py-2">
            <span className="d-block py-2">Your Message</span>
            <textarea
              id="all-place-holder"
              placeholder="Your Message "
              
            
              style={{
                width:"100%",
                height:"200px",
                borderRadius: "7px",
                backgroundColor: "transparent",
              }}
            />
            <br />
            <br />
            <input type="checkbox" id="myCheckbox" /> Accept Terms Of Service
            and Privacy Policy.
            <br />
            <br />
            <button
              type="button"
              style={{
                width: "150px",
                height: "50px",
                borderRadius: "10px",
                color: "white",
                backgroundColor: "#bb28df",
              }}
            >
              Send Message
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
};
export default Contact;
