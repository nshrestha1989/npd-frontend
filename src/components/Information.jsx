import React from "react";
import Icon from '@material-ui/icons/ShopTwo';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import LocalMallIcon from '@material-ui/icons/LocalMall';


function Information() {
    return (<section class="information-section" id="features">
    <div><h1>Website Information</h1></div>
        <div class="container-fluid">
            <div class="row">
                <div class="feature-box col-lg-4">
                    <Icon fontSize="large"
                    />
                    <h3 class="feature-title"> Buy</h3>

                    <p>Buy properties Fast</p>
                </div>

                <div class="feature-box col-lg-4">
                    <RadioButtonCheckedIcon fontSize="large" />
                    <h3 class="feature-title"> Update</h3>
                    <p>Latest property Greatest value </p>
                </div>

                <div class="feature-box col-lg-4">
                    <LocalMallIcon fontSize="large" />
                    <h3 class="feature-title">Sell</h3>
                    <p>Sell properties fast</p>
                </div>
            </div>
        </div>

    </section>

    );
}

export default Information;