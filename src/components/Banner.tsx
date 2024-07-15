import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ backgroundImage, overlayColor, overlayOpacity, heading, children }) => {
  return (
    <div
      className="relative banner bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white text-center">
          {heading}
        </h1>
        {children && <div className="text-white text-center mt-4">{children}</div>}
      </div>
    </div>
  );
};

Banner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  overlayColor: PropTypes.string,
  overlayOpacity: PropTypes.number,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Banner.defaultProps = {
  overlayColor: 'gray',
  overlayOpacity: 0.5,
  children: null,
};

export default Banner;
