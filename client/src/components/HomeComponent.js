import React from 'react';

function Home(props) {
    return(
        <div className="row row-content justify-content-center lead">
            <div className="col-lg-3 text-center centered-links">
                <span className="icons">
                    <i className="fa fa-home"aria-hidden="true"></i>
                </span>
                <h1 className="display-4">Buy</h1>
                <p>Click Here For A List Of Homes To Buy</p>
                <a href="#" className="btn btn-lg button-content" role="button">Purchase</a>
            </div>

            <hr className="clearfix w-100 d-lg-none" />

            <div className="col-lg-3 text-center centered-links">
                <span className="icons">
                    <i className="fa fa-money"aria-hidden="true"></i>        
                </span>
                <h1 className="display-4">Rent</h1>
                <p>Click Here For A List Of Homes To Rent</p>
                <a href="#" className="btn btn-lg button-content" role="button">Rent</a>    
            </div>

            <hr className="clearfix w-100 d-lg-none" />

            <div className="col-lg-3 text-center centered-links">
                <span className="icons">
                    <i className="fa fa-search-plus"aria-hidden="true"></i>            
                </span>
                <h1 className="display-4">Find Agent</h1>
                <p>Click Here To Find an Agent</p>
                <a href="#" className="btn btn-lg button-content" role="button">Agent</a>        
            </div>
      </div>
    );
}

export default Home;   