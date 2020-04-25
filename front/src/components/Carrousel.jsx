import React, { Fragment } from "react"
import { Link } from "react-router-dom";
// import "../../../back/public/style.css"

const carrousel = () => {

    return (
        <Fragment>

            <div id="carouselExampleControls" className="div1Principal carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{ height: "82vh" }} className="d-block w-100" src="https://blog.borderio.com/wp-content/uploads/2017/11/vinos-oxidados-y-picados.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img style={{ height: "82vh" }} className="d-block w-100" src="http://www.indesignclub.com/images/blueprint/articles/Interior-design-of-a-wine-cellar-in-the-private-residence-02.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img style={{ height: "82vh" }} className="d-block w-100" src="http://www.indesignclub.com/images/blueprint/articles/Interior-design-of-a-wine-cellar-in-the-private-residence-04.jpg" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>


        </Fragment>
    )
}

export default carrousel