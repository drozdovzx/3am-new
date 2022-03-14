import React from 'react';
import Pechenje from "../images/pechenje-pechenje.jpg";
import Testo from "../images/pechenje-testo.jpg";

const TwoWays = () => {
    return (
        <section className="threeSections size mob-el" id="sec-four">

            <div className="threeSectionsSub">
                <div className="containerInSection">
                    <img alt={Testo} src={Testo} />
                    <div className="containerInContainer">
                        <span>
                            Bake at home
                        </span>
                    </div>
                    <div className="btnInContainer">
                        <span>
                            More
                        </span>
                    </div>
                </div>
            </div>
            <div className="threeSectionsSub">
                <div className="containerInSection">
                    <img alt={Pechenje} src={Pechenje} />
                    <div className="containerInContainer">
                        <span>
                            Create Own
                        </span>
                    </div>
                    <div className="btnInContainer">
                        <span>
                            More
                        </span>
                    </div>
                </div>
            </div>
            <div className="threeSectionsSub">
                <div className="containerInSection">
                    <img alt={Testo} src={Testo} />
                    <div className="containerInContainer">
                        <span>
                            Corporate Gifts
                        </span>
                    </div>
                    <div className="btnInContainer">
                        <span>
                            More
                        </span>
                    </div>
                </div>
            </div>
            <div className="twoWaysLogo">
                <span>Our options</span>
            </div>
        </section>
    )
}
export default TwoWays;