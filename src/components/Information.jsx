import React from "react";
import Icon from '@material-ui/icons/ShopTwo';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import "../styles/information.css";
import {Container} from "react-bootstrap";


function Information() {
    return (<Container fluid><section class="information-section" id="features">
    <div><h1 className="feature-box">Website Information</h1></div>
        <div className="container-fluid">
            <div className="row">
                <div className="feature-box col-lg-4">
                    <Icon fontSize="large"
                    />
                    <h3 className="feature-title"> Buy</h3>

                    <p>Buy properties Fast</p>
                </div>

                <div className="feature-box col-lg-4">
                    <RadioButtonCheckedIcon fontSize="large" />
                    <h3 className="feature-title"> Update</h3>
                    <p>Latest property Greatest value </p>
                </div>

                <div className="feature-box col-lg-4">
                    <LocalMallIcon fontSize="large" />
                    <h3 className="feature-title">Sell</h3>
                    <p>Sell properties fast</p>
                </div>
            </div>
        </div>

    </section></Container>

    );
}

export default Information;