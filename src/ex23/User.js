import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

const User = ({ user }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5" className="fw-bold">{user.name}</CardTitle>
        <CardText>{user.email}</CardText>
      </CardBody>
    </Card>
  );
};

export default User;
