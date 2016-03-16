/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Explore from './Explore';
// import fetch from '../../core/fetch';

export const path = '/explore';
export const action = async (state) => {
  // const response = await fetch('/graphql?query={news{title,link,contentSnippet}}');
  // const { data } = await response.json();
  const data = {
    restaurants: [
      {
        name: 'Pizza Vira',
        rating: 8.9,
        cousine: 'italian',
        price: {
          tier: 1,
        },
        distance: 80,
      },
      {
        name: 'Pizza Vira',
        rating: 8.9,
        cousine: 'italian',
        price: {
          tier: 2,
        },
        distance: 80,
      },
      {
        name: 'Pizza Vira',
        rating: 8.9,
        cousine: 'italian',
        price: {
          tier: 1,
        },
        distance: 80,
      },
    ],
  };
  state.context.onSetTitle('Explore the best restaurants around you');
  return <Explore restaurants={data.restaurants} />;
};
