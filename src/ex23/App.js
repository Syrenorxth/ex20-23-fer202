import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, Spinner } from 'reactstrap';

// gia lap mang cham de thay ro fallback cua Suspense (chi de demo)
const delay = (promise, ms = 800) =>
  Promise.all([promise, new Promise((resolve) => setTimeout(resolve, ms))]).then(([module]) => module);

// lazy loading: code cua moi trang chi duoc tai khi vao route do
const UserList = lazy(() => delay(import('./UserList')));
const PostList = lazy(() => delay(import('./PostList')));

const App = () => {
  return (
    <Router basename="/ex23">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">Logo</NavbarBrand>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/posts">Posts</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <Suspense fallback={<div className="text-center my-5"><Spinner color="primary" /> Loading...</div>}>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/posts" element={<PostList />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
