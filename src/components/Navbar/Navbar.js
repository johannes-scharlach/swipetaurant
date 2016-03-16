/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navbar.scss';
import Link from '../Link';

function Navbar({ className }) {
  return (
    <div className={cx(s.root, className)} role="Navbar">
      <Link className={s.link} to="/">Home</Link>
      <Link className={s.link} to="/explore">Explore</Link>
      <Link className={s.link} to="/account">Account</Link>
      <Link className={s.link} to="/navigation">Navigate</Link>
    </div>
  );
}

Navbar.propTypes = {
  className: PropTypes.string,
};

export default withStyles(Navbar, s);
