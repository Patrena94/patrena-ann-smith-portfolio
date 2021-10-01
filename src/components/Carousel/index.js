import React from 'react';
import budget from './../../assets/carousel/budget.png';
import noteTaker from './../../assets/carousel/noteTaker.png';
import observer from './../../assets/carousel/observer.png';
import stack_underflo from './../../assets/carousel/stack_underflo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Carousel} from "react-bootstrap"
// import useState from 'react';
// import render from 'react';
// import React from "react";

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class BootstrapCarouselComponent extends React.Component {

    render() {
        return (
            <div>
                <div className='container-fluid' >
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Ventures in Web Development</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-800"
                                        src={budget}
                                        width="800"
                                        height="400"
                                        text="P3S Corp budget Tracker"
                                        alt="Budget Tracker"
                                    />
                                    <Carousel.Caption>
                                        <h3>P3S Corp Budget Tracker</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-800"
                                        src={observer}
                                        width="800"
                                        height ="400"
                                        text="The Casual Observer"
                                        alt="Tech Blog"
                                    />

                                    <Carousel.Caption>
                                        <h3>The Casual Oberver</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-800"
                                        src={noteTaker}
                                        width="800"
                                        height="400"
                                        text = "Note Taker Express"
                                        alt="Note Taker Express"
                                    />
                                    <Carousel.Caption>
                                        <h3>Note Taker Express</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default BootstrapCarouselComponent;
