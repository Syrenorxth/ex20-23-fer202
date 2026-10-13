import React from 'react';
import { Route, useParams } from 'react-router-dom';

// v6 khong truyen params qua props nua -> dung hook useParams
const UserProfile = () => {
  const params = useParams();
  return <h1>User Profile: {params.userId || '(chưa chọn user)'}</h1>;
};

// khai bao tat ca route o mot noi, tach khoi App
export const routes = [
  {
    path: '/',
    component: () => <h1>Home Page</h1>,
    exact: true,
  },
  {
    path: '/products',
    component: () => <h1>Products Page</h1>,
  },
  {
    path: '/about',
    component: () => <h1>About Page</h1>,
  },
  {
    path: '/contact',
    component: () => <h1>Contact Page</h1>,
  },
  {
    // dau ? => userId la tham so tuy chon
    path: '/users/:userId?',
    component: UserProfile,
  },
];

// tao <Route> tu mang routes
// v6: element phai la JSX (<Component />), khong con prop exact (mac dinh match chinh xac)
export const renderRoutes = () => {
  return routes.map((route, index) => (
    <Route key={index} path={route.path} element={<route.component />} />
  ));
};
