import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { DishDetail, DishList } from './Dishes';
import { UserDetail, UserList } from './Users';

const About = () => <div align="center">About</div>;
const Contact = () => <div align="center">Contact</div>;

const App = () => {
  return (
    <Router basename="/ex21">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">Logo</NavbarBrand>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/users">Users</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/contact">Contact</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <Routes>
        <Route path="/" element={<DishList />} />
        {/* :id la resource id, doc trong component bang useParams() */}
        <Route path="/dish/:id" element={<DishDetail />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
