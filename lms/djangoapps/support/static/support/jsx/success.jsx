/* global gettext */
/* eslint one-var: ["error", "always"] */

import React from 'react';
import PropTypes from 'prop-types';

function Success({ platformName, homepageUrl, dashboardUrl, isLoggedIn }) {
  let btnText,
    btnUrl;
  if (isLoggedIn) {
    btnText = gettext('Go to my Dashboard');
    btnUrl = dashboardUrl;
  } else {
    btnText = gettext(`Go to ${platformName} Home`);
    btnUrl = homepageUrl;
  }
  return (<div className="contact-us-wrapper">
    <div className="row">
      <div className="col-sm-12">
        <h2>{gettext('Contact Us')}</h2>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <p>{gettext('Thank you for submitting a request! We will contact you within 24 hours.')}</p>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <a
          href={btnUrl}
          className="btn btn-secondary help-button"
        >{btnText}
        </a>
      </div>
    </div>
  </div>);
}

Success.propTypes = {
  platformName: PropTypes.string.isRequired,
  dashboardUrl: PropTypes.string.isRequired,
  homepageUrl: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Success;
