import React from 'react';

import './AboutUs.css';

const AboutUs = ()=> (
 <section id="about-us">
  <hr />
      <div className="container">
        <h1 className="title">About Us</h1>
        <div className="row">
          <div className="col-md-8 about-us">
            <p>This is a large platform for users who wants guidances for choosing their carreer options. They can apply for the menties and also work with the team on the project handle by any professional.</p>
          </div>
          <div className="col-md-4">
            <button type="button" className="btn btn-primary">Read more</button>
          </div>
        </div>
      </div>
    </section>
)

export default AboutUs;