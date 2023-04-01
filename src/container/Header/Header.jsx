import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="From Bowl to Soul" />
      <h1 className="app__header-h1">Made with Love to Get our Clients satisfied & rejuvenated</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>we began in a bloomsbury basement with a few benches & one big table now we’re bigger but our philosophy remains the same</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
