/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Explore.scss';

function Explore({ restaurants }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        {restaurants.map((item, index) => (
          <div className={index === 0 ? s.card : s.placeholder}>
            <h2>{item.name}</h2>
            <div className={s.properties}>
              <span>{item.rating}</span>
              <span>{item.cousine}</span>
              <span>{item.price.tier}</span>
              <span>{item.distance}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Explore.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    cousine: PropTypes.string.isRequired,
    price: {
      tier: PropTypes.number.isRequired,
      message: PropTypes.string,
    },
    distance: PropTypes.number.isRequired,
  })).isRequired,
};

export default withStyles(Explore, s);
