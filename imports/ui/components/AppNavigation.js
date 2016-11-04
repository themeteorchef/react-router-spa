import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';

const renderNavigation = (hasUser, currentPage, setCurrentPage) => (
  hasUser ? <AuthenticatedNavigation
    currentPage={ currentPage }
    setCurrentPage={ setCurrentPage }
  /> : <PublicNavigation />
);

const AppNavigation = ({ hasUser, currentPage, setCurrentPage }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link href="#" onClick={(event) => {
          setCurrentPage(event, { page: 'index' });
        }}>Application Name</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      { renderNavigation(hasUser, currentPage, setCurrentPage) }
    </Navbar.Collapse>
  </Navbar>
);

AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
  setCurrentPage: React.PropTypes.func,
};

export default AppNavigation;
