import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./Project.css";
const Project = () => {
  return (
    <>
      <div className="img-text">
        <img src="./assets/page-banner-bg.jpg" alt="responsive img"></img>
        <div className="text1">
          <span>
            <h1>Projects</h1>
          </span>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 py-4">
            <span>
              <h1>PRESSIONS [ART GALLERY]</h1>
            </span>
            <p class="text-md-left">
              Since the beginning of the pandemic, people across the globe have
              found unique ways to cope with the inevitable isolation that comes
              with social distancing. A lot of them have found solace in art.
              While art galleries and other cultural institutions have been
              unable to hold exhibitions in these current times; nonetheless,
              many have been doing their bit for disseminating and promoting art
              by going digital. Gallery Ark is one such example. Founded in 2017
              by Seema and Atul Dalmia, it was first conceptualised as a medium
              to support and promote young artists, and to create an accessible
              space in Vadodara to experience art.
            </p>

            <p>
            
              While art galleries and other cultural institutions have been
              unable to hold exhibitions in these current times; nonetheless,
              many have been doing their bit for disseminating and promoting art
              by going digital. Gallery Ark is one such example. Founded in 2017
              by Seema and Atul Dalmia, it was first conceptualised as a medium
              to support and promote young artists, and to create an accessible
              space in Vadodara to experience art.
            </p>
          </div>
          <div className="col-md-6 py-5">
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
              <Masonry gutter="20px">
                <div
                  class="flip-container"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div class="flipper">
                    <div class="front">
                      <img
                        src="./assets/africanWomen.2.jpg"
                        alt="responsive img"
                      ></img>
                    </div>
                    <div class="back">
                      <img
                        src="./assets/ArtGalary.jpg"
                        alt="responsive img"
                      ></img>
                    </div>
                  </div>
                </div>

                <div
                  class="flip-container"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div class="flipper">
                    <div class="front">
                      <img
                        src="./assets/dirty_mythological.png"
                        alt="responsive img"
                      ></img>
                    </div>
                    <div class="back">
                      <img
                        src="./assets/ArtGalary.2.png"
                        alt="responsive img"
                      ></img>
                    </div>
                  </div>
                </div>

                { <div
                  class="flip-container"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div class="flipper">
                    <div class="front">
                      <img
                        src="./assets/africanWomen.png"
                        alt="responsive img"
                      ></img>
                    </div>
                    <div class="back">
                      <img
                        src="./assets/ArtGalary.3.png"
                        alt="responsive img"
                      ></img>
                    </div>
                  </div>
                </div> }

                { <div
                  class="flip-container"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div class="flipper">
                    <div class="front">
                      <img
                        src="./assets/africanWomen.1.jpg"
                        alt="responsive img"
                      ></img>
                    </div>
                    <div class="back">
                      <img
                        src="./assets/artGalary.1.jpg"
                        alt="responsive img"
                      ></img>
                    </div>
                  </div>
                </div> }
              </Masonry>
            </ResponsiveMasonry>
          </div>

          {/*-------- mall img from here shopping ======>*/}

          <div className="col-md-6 py-5 ">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
              <Masonry gutter="20px">
                <div
                  class="flip-container"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div class="flipper">
                    <div class="front">
                      <img
                        src="./assets/ShoppingMall.1.jpg"
                        alt="responsive img"
                      ></img>
                    </div>
                    <div class="back">
                      <img
                        src="./assets/ShoppingMall.jpg"
                        
                        alt="responsive img"
                      ></img>
                    </div>
                  </div>
                </div>

                <div
                  class="flip-container"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div class="flipper">
                    <div class="front">
                      <img
                        src="./assets/ShoppingMall.2.jpg"
                        alt="responsive img"
                      ></img>
                    </div>
                    <div class="back">
                      <img
                        src="./assets/ShoppingMall.3.jpg"
                        alt="responsive img"
                      ></img>
                    </div>
                  </div>
                </div>

                { <div
                  class="flip-container"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div class="flipper">
                    <div class="front">
                      <img
                        src="./assets/ShoppingMall.4.jpg"
                        alt="responsive img"
                      ></img>
                    </div>
                    <div class="back">
                      <img
                        src="./assets/ShoppingMall.5.jpg"
                        alt="responsive img"
                      ></img>
                    </div>
                  </div>
                </div> }

                { <div
                  class="flip-container"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div class="flipper">
                    <div class="front">
                      <img
                        src="./assets/ShoppingMall.6.jpg"
                        alt="responsive img"
                      ></img>
                    </div>
                    <div class="back">
                      <img
                        src="./assets/ShoppingMall.7.jpg"
                        alt="responsive img"
                      ></img>
                    </div>
                  </div>
                </div> }
              </Masonry>
            </ResponsiveMasonry>
          
          </div>

          <div className="col-md-6 py-4">
            <span>
              <h1>SKYVERSE (Shopping mall)</h1>
            </span>
            Skyverse, offers businesses with one of the largest profit-making
            opportunities, in the form of Virtual Retail Market and Industry.
            This space, with more designers and creators building things in the
            virtual world will be much, much larger than the physical world.
            From an avatar shopping for a new virtual outfit, or individuals
            buying and selling non-fungible tokens (NFTs), the buzz around
            virtual retail, as experts anticipate, is only going to get bigger
            in the coming decade. Businesses, across verticals, from luxury
            fashion to Consumer-Packaged Goods, will join hands with us and will
            be building and creating digital assets that they can sell either
            alongside physical products or in addition to them.
          </div>


          {/* <<<<------Event List-----=====>>>>> */}

          <div className="col-md-6 py-4">
            <h1>SKYVERSE EVENT ARENA (Concerts and other Events)</h1>
            <p>
              The film starts with Radhika (Sonali Bendre) being introduced to
              an Army Major Ranvir (Parmeet Sethi) by her father, Raja Saab
              (Shakti Kapoor), an erstwhile king and current politician. Raja
              Saab tells her that the Major will be a good husband for her. On
              the day of the engagement, news breaks of a terrorist attack in a
              nearby village led by the terrorist, Shaka (Ajay Devgn). The Major
              and Raja Saab leave with a large force to that village. But that
              turns out to be a ruse as Shaka comes to the place of the
              engagement and burns the marriage Mandap (hall). Then he gives a
              long look to Radhika, who looks at him with hatred, and leaves.
              Shaka reaches his lair, where he meets his leader, Dara (Amrish
              Puri) and Shabnam (Madhoo) and the rest of his gang. Dara welcomes
              him and proclaims him to be Diljale. Shabnam (Madhoo), who loves
              him, tries to hug him, but Shaka rebuffs it.
            </p>
          </div>
          <div className="col-md-6 py-5">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
              <Masonry gutter="20px">
                <div
                  class="flip-container"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div class="flipper">
                    <div class="front">
                      <img
                        src="./assets/Event.jpg"
                        alt="responsive img"
                      ></img>
                    </div>
                    <div class="back">
                      <img
                        src="./assets/Event.1.jpg"
                        
                        alt="responsive img"
                      ></img>
                    </div>
                  </div>
                </div>

                <div
                  class="flip-container"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div class="flipper">
                    <div class="front">
                      <img
                        src="./assets/Concerts.jpg"
                        alt="responsive img"
                      ></img>
                    </div>
                    <div class="back">
                      <img
                        src="./assets/Concerts.1.jpg"
                        alt="responsive img"
                      ></img>
                    </div>
                  </div>
                </div>

                { <div
                  class="flip-container"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div class="flipper">
                    <div class="front">
                      <img
                        src="./assets/Concerts.3.jpg"
                        alt="responsive img"
                      ></img>
                    </div>
                    <div class="back">
                      <img
                        src="./assets/Concerts.2.jpg"
                        alt="responsive img"
                      ></img>
                    </div>
                  </div>
                </div> }

                { <div
                  class="flip-container"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div class="flipper">
                    <div class="front">
                      <img
                        src="./assets/Event.4.jpg"
                        alt="responsive img"
                      ></img>
                    </div>
                    <div class="back">
                      <img
                        src="./assets/Event.7.jpg"
                        alt="responsive img"
                      ></img>
                    </div>
                  </div>
                </div> }
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
