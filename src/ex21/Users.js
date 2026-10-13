import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { users } from './data';

// danh sach user, bam vao ten -> /users/:id
export const UserList = () => {
  return (
    <div className="page">
      {users.map((user, index) => (
        <h2 key={index} className="fw-light">
          <Link to={`/users/${index}`}>
            {user.firstName} {user.lastName}
          </Link>
        </h2>
      ))}
    </div>
  );
};

// chi tiet user, lay id tu URL
export const UserDetail = () => {
  const { id } = useParams();
  const user = users[id];

  if (!user) {
    return <h2 className="page">Không tìm thấy user có id = {id}</h2>;
  }

  return (
    <div className="page">
      <h1 className="fw-light">
        {user.firstName} {user.lastName} : {user.age}
      </h1>
      <Link to="/users">← Back</Link>
    </div>
  );
};
