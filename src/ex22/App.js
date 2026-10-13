import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useParams } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

const Home = () => (
  <div align="center">
    Home Component
    <p className="mt-3">
      Thử tham số tuỳ chọn:{' '}
      <Link to="/profile">/profile</Link> |{' '}
      <Link to="/profile/john">/profile/john</Link> |{' '}
      <Link to="/profile/mary">/profile/mary</Link>
    </p>
  </div>
);
const About = () => <div align="center">About Component</div>;
const Contact = () => <div align="center">Contact Component</div>;

// name la tham so tuy chon: co hoac khong deu vao duoc component nay
const Profile = () => {
  const { name } = useParams();
  return (
    <div align="center">
      Profile Component
      <p>{name ? `Xin chào, ${name}!` : 'Chưa có tên (Guest)'}</p>
    </div>
  );
};

const CustomNavbar = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/">Logo</NavbarBrand>
      {/* bootstrap 5: ms-auto day menu sang phai (mr-auto la cua bootstrap 4) */}
      <Nav className="ms-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

const App = () => {
  return (
    <Router basename="/ex22">
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* dau ? => :name la optional, khop ca /profile va /profile/john */}
        <Route path="/profile/:name?" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
