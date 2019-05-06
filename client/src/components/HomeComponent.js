import React from 'react';

function Home(props) {
    return(
        <div className="row row-content justify-content-center lead">
            <div class="col-lg-3 text-center centered-links">
                <span className="icons">
                    <i class="fa fa-home"aria-hidden="true"></i>
                </span>
                <h1 class="display-4">Buy</h1>
                <p>Click Here For A List Of Homes To Buy</p>
                <a href="#" class="btn btn-lg button-content" role="button">Purchase</a>
            </div>

            <hr class="clearfix w-100 d-lg-none" />

            <div class="col-lg-3 text-center centered-links">
                <span className="icons">
                    <i class="fa fa-money"aria-hidden="true"></i>        
                </span>
                <h1 class="display-4">Rent</h1>
                <p>Click Here For A List Of Homes To Rent</p>
                <a href="#" class="btn btn-lg button-content" role="button">Rent</a>    
            </div>

            <hr class="clearfix w-100 d-lg-none" />

            <div class="col-lg-3 text-center centered-links">
                <span className="icons">
                    <i class="fa fa-search-plus"aria-hidden="true"></i>            
                </span>
                <h1 class="display-4">Find Agent</h1>
                <p>Click Here To Find an Agent</p>
                <a href="#" class="btn btn-lg button-content" role="button">Agent</a>        
            </div>
      </div>
    );
}

export default Home;   