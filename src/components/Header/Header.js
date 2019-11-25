import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
const Header = ({ cartLength }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Shop-Kart
        </NavLink>
        <div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to={'/cart'}>
                <FontAwesomeIcon icon="shopping-cart" className="mr-2" />
                {/* <i className="fas fa-shopping-cart mr-2" aria-hidden="true" /> */}
                Cart {cartLength ? `(${cartLength})` : ''}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  cartLength: state.shop.cart.length
});

export default connect(mapStateToProps, null)(Header);
