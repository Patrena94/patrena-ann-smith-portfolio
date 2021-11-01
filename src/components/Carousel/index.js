import React from "react";
import budget from "./../../assets/carousel/budget.png";
import noteTaker from "./../../assets/carousel/noteTaker.png";
import observer from "./../../assets/carousel/observer.png";
import stack_underflo from "./../../assets/carousel/stack_underflo.png";
import Scheduler from "./../../assets/carousel/Scheduler.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import portfoliohtmlcss from "./../../assets/carousel/portfoliohtmlcss.png";
import SalonXperience from "./../../assets/carousel/SalonXperience.png";

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
                    <h3
                      className="title"
                      style={{
                        color: "gold",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        text: "font-weight-italic",
                        fontSize: "36px",
                      }}
                    >
                      P3S Corp Budget Tracker
                    </h3>
                    <p
                      className="overview"
                      style={{
                        color: "#C49E93",
                        textAlign: "center",
                        text: "bold",
                        fontSize: "24px",
                      }}
                    >
                      PS Corp’s back end for your e-commerce site. The
                      application will provide owners with vital statistic on
                      stock. This will allow for owners to determine revenue
                      flow; popularity of item; as well as make adjustment in
                      terms of marketing based on sales. The application tracks
                      product, stock, and by Category. The application also
                      allows for owners to easily updates Tag, categories, and
                      products. You may review the
                      <a href="https://p3s-corp-budget-tracker.herokuapp.com/">
                        deployed link
                      </a>{" "}
                      and
                      <a href="https://github.com/Patrena94/PS-Corp-Budget-Tracker">
                        github respository
                      </a>
                      .
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
                    <h3
                      className="title"
                      style={{
                        color: "gold",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        text: "font-weight-italic",
                        fontSize: "36px",
                      }}
                    >
                      The Casual Oberver
                    </h3>
                    <p
                      className="overview"
                      style={{
                        color: "#914875",
                        textAlign: "center",
                        text: "bold",
                        fontSize: "24px",
                      }}
                    >
                      {" "}
                      The Casual Observer is a blog site that enable the
                      knowledge thirsty individual to publish articles blog,
                      posts, thoughts and opinions; as well as review the
                      aforementioned by other members. You may review the
                      <a href="https://the-casual-observer.herokuapp.com/">
                        deployed link
                      </a>{" "}
                      and
                      <a href="https://github.com/Patrena94/the-casual-observer">
                        github respository
                      </a>
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
                    <h3
                      className="title"
                      style={{
                        color: "gold",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        text: "font-weight-italic",
                        fontSize: "36px",
                      }}
                    >
                      {" "}
                      Note Taker Express
                    </h3>
                    <p
                      className="overview"
                      style={{
                        color: "#C49E93",
                        textAlign: "center",
                        text: "bold",
                        fontSize: "24px",
                      }}
                    >
                      The note taker express allows for user to take effective
                      notes and organize their schedule in a few simple steps.
                      The user has the ability to create, review, update, and
                      delete notes. You may review the
                      <a href="https://shrouded-brook-35525.herokuapp.com/notes">
                        deployed link
                      </a>{" "}
                      and
                      <a href="https://github.com/Patrena94/Note-Taker-Express">
                        github respository
                      </a>
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
                    <h3
                      className="title"
                      style={{
                        color: "gold",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        text: "font-weight-italic",
                        fontSize: "36px",
                      }}
                    >
                      Stack_Underflo
                    </h3>
                    <p
                      className="overview"
                      style={{
                        color: "#914875",
                        textAlign: "center",
                        text: "bold",
                        fontSize: "24px",
                      }}
                    >
                      The Stack-Underflow app is a diversified resource center
                      where fledgling coders go to expand their knowledge to the
                      next level. It provides coders with resources to ignite
                      their light about a subject matter. The application
                      provides references to websites, books, coding puzzles,
                      and answer to questions submitted. You may review the{" "}
                      <a href="https://stack-underflo.herokuapp.com/">
                        deployed link
                      </a>{" "}
                      and
                      <a href="https://github.com/Patrena94/stack-underflow">
                        github respository
                      </a>
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
                    <h3
                      className="title"
                      style={{
                        color: "gold",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        text: "font-weight-italic",
                        fontSize: "36px",
                      }}
                    >
                      Smith Corporation Work Day Scheduler
                    </h3>
                    <p
                      className="overview"
                      style={{
                        color: "#C49E93",
                        textAlign: "center",
                        text: "bold",
                        fontSize: "24px",
                      }}
                    >
                      The work day schedule allows employees to maintain
                      organization by scheduling their day in advance. The
                      schedule will allow for employees to determine, if, their
                      tasks are being met on time. It is a great way to measure
                      employee productivity. You may review the{" "}
                      <a href="https://patrena94.github.io/Smith-Corporation-Work-Scheduler/">
                        deployed link
                      </a>{" "}
                      and
                      <a href="https://github.com/Patrena94/Smith-Corporation-Work-Scheduler">
                        github respository
                      </a>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item Interval={2000}>
                  <img
                    className="d-block w-100"
                    src={portfoliohtmlcss}
                    width="800"
                    height="800"
                    text="Stack_Underflo"
                    alt="Stack_Underflo"
                  />
                  <Carousel.Caption>
                    <h3
                      className="title"
                      style={{
                        color: "gold",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        text: "bold",
                        fontSize: "36px",
                      }}
                    >
                      Patrena A. D. Smith Portfolio
                    </h3>
                    <p
                      className="overview"
                      style={{
                        color: "#C49E93",
                        textAlign: "center",
                        text: "bold",
                        fontSize: "24px",
                      }}
                    >
                      The Portfolio provides an employer with an high level
                      overview of my professional work experience and body of
                      work as a Coding student. You may review the{" "}
                      <a href="https://patrena94.github.io/Patrena-A.-D.-Smith/">
                        deployed link
                      </a>{" "}
                      and
                      <a href="https://github.com/Patrena94/Patrena-A.-D.-Smith">
                        github respository
                      </a>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item Interval={2000}>
                  <img
                    className="d-block w-100"
                    src={SalonXperience}
                    width="800"
                    height="800"
                    text="Stack_Underflo"
                    alt="Stack_Underflo"
                  />
                  <Carousel.Caption>
                    <h3
                      className="title"
                      style={{
                        color: "gold",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        text: "bold",
                        fontSize: "36px",
                      }}
                    >
                      Salon Xperience
                    </h3>
                    <p
                      className="overview"
                      style={{
                        color: "#C49E93",
                        textAlign: "center",
                        text: "bold",
                        fontSize: "24px",
                      }}
                    >
                      Salon-Xperience  is a Single Page Web Application which supports 3 different types of users: Client, Stylist  & Admin. 
Users can create a profile, book/view their appointments, purchase services for a future date and manage their hair experience. 
The application was built using the MERN stack and  performs CRUD operations supported by GRAPHQL.You may review the{" "}
                      <a href="https://salon-xperience.herokuapp.com/">
                        deployed link
                      </a>{" "}
                      and
                      <a href="https://github.com/Patrena94/salon-xperience">
                        github respository
                      </a>
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
