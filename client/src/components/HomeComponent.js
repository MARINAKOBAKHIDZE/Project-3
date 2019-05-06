import React from 'react';

function Home(props) {
    return(
        <div className="row row-content justify-content-center lead">
            <div class="col-lg-3 text-center centered-links">
                <span className="icons">
                    <i class="fa fa-home"></i>
                </span>
                <h1 class="display-4">Properties</h1>
                <p>View our available properties around Tacoma. We have something to fit your needs.</p>
                <a href="#" class="btn btn-lg button-content" role="button">View</a>
            </div>

            <hr class="clearfix w-100 d-lg-none" />

            <div class="col-lg-3 text-center centered-links">
                <span className="icons">
                    <i class="fa fa-file"></i>        
                </span>
                <h1 class="display-4">Apply</h1>
                <p>Check out our requirements and download the documents you will need to apply with us.</p>
                <a href="#" class="btn btn-lg button-content" role="button">Apply</a>    
            </div>

            <hr class="clearfix w-100 d-lg-none" />

            <div class="col-lg-3 text-center centered-links">
                <span className="icons">
                    <i class="fa fa-wrench"></i>            
                </span>
                <h1 class="display-4">Maintenance</h1>
                <p>Fill out this form to send a maintenance request. We will get back to you promptly.</p>
                <a href="#" class="btn btn-lg button-content" role="button">Request</a>        
            </div>
      </div>
    );
}

export default Home;   