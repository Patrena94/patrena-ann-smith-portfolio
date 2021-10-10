import React from "react";
import budget from "./../../assets/carousel/budget.png";
import noteTaker from "./../../assets/carousel/noteTaker.png";
import observer from "./../../assets/carousel/observer.png";
import stack_underflo from "./../../assets/carousel/stack_underflo.png";
import Scheduler from "./../../assets/carousel/Scheduler.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class BootstrapCarouselComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid mx-auto">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="justify-content-center py-5">
                Ventures in Web Development
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel className="justify-content-center py5">
                <Carousel.Item Interval={2000}>
                  <img
                    className="d-block w-100"
                    src={budget}
                    width="800"
                    height="800"
                    text="P3S Corp budget Tracker"
                    alt="Budget Tracker"
                  />
                  <Carousel.Caption>
                    <h3 className="title"
                      style={{
                        color: "gold",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        text: "font-weight-italic",
                        fontSize: "36px",
                      }}
                      >
                    P3S Corp Budget Tracker</h3>
                    <p  className="overview"
                      style={{
                        color: "#C49E93",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        text: "font-weight-italic",
                        fontSize: "24px",
                      }}
                    >
                     PS Corp’s back end for your e-commerce site. The application will provide owners with vital statistic on stock.  This will allow for owners to determine revenue flow; popularity of item; as well as make adjustment in terms of marketing based on sales.  The application tracks product, stock, and by Category. The application also allows for owners to easily updates Tag, categories, and products.  
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item Interval={3000}>
                  <img
                    className="d-block w-100"
                    src={observer}
                    width="800"
                    height="800"
                    text="The Casual Observer"
                    alt="Tech Blog"
                  />

                  <Carousel.Caption>
                    <h3 className="title"
                      style={{
                        color: "gold",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        text: "font-weight-italic",
                        fontSize: "36px",
                      }}
                    >The Casual Oberver</h3>
                    <p
                      className="overview"
                      style={{
                        color: "#914875",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        text: "font-weight-italic",
                        fontSize: "24px",
                      }}
                    >
                      {" "}
                      The Casual Observer is a blog site that enable the
                      knowledge thirsty individual to publish articles blog,
                      posts, thoughts and opinions; as well as review the
                      aforementioned by other members.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item Interval={2000}>
                  <img
                    className="d-block w-100"
                    src={noteTaker}
                    width="800"
                    height="800"
                    text="Note Taker Express"
                    alt="Note Taker Express"
                  />
                  <Carousel.Caption>
                    <h3 className="title"
                      style={{
                        color: "gold",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        text: "font-weight-italic",
                        fontSize: "36px",
                      }}
                      > Note Taker Express</h3>
                    <p  className="overview"
                      style={{
                        color: "#C49E93",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        text: "font-weight-italic",
                        fontSize: "24px",
                      }}
                    >
                     The note taker express allows for user to take effective notes and organize their schedule in a few simple steps.  The user has the ability to create, review, update, and delete notes.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item Interval={2000}>
                  <img
                    className="d-block w-100"
                    src={stack_underflo}
                    width="800"
                    height="800"
                    text="Stack_Underflo"
                    alt="Stack_Underflo"
                  />
                  <Carousel.Caption>
                    <h3 className="title"
                      style={{
                        color: "gold",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        text: "font-weight-italic",
                        fontSize: "36px",
                      }}
                      >Stack_Underflo</h3>
                    <p  className="overview"
                      style={{
                        color: "#914875",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        text: "font-weight-italic",
                        fontSize: "24px",
                      }}
                    >
                      The Stack-Underflow app is a diversified resource center where fledgling coders go to expand their knowledge to the next level. It provides coders with resources to ignite their light about a subject matter.  The application provides references to websites, books, coding puzzles, and answer to questions submitted.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item Interval={2000}>
                  <img
                    className="d-block w-100"
                    src={Scheduler}
                    width="800"
                    height="800"
                    text="Stack_Underflo"
                    alt="Stack_Underflo"
                  />
                  <Carousel.Caption>
                    <h3 className="title"
                      style={{
                        color: "gold",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        text: "font-weight-italic",
                        fontSize: "36px",
                      }}
                      >Smith Corporation Work Day Scheduler</h3>
                    <p  className="overview"
                      style={{
                        color: "#C49E93",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        text: "font-weight-italic",
                        fontSize: "24px",
                      }}
                    >
                      The Stack-Underflow app is a diversified resource center where fledgling coders go to expand their knowledge to the next level. It provides coders with resources to ignite their light about a subject matter.  The application provides references to websites, books, coding puzzles, and answer to questions submitted.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BootstrapCarouselComponent;
