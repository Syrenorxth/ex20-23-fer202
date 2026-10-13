import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import { fetchUsers } from './api';
import PageHeader from './PageHeader';

// component User chi duoc tai khi can render
const User = lazy(() => import('./User'));

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch(() => setError('Không tải được danh sách users'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <PageHeader title="Users" />
      {loading && <div className="text-center my-3"><Spinner /> Loading users...</div>}
      {error && <div className="text-center text-danger my-3">{error}</div>}

      <Suspense fallback={<div className="text-center my-3">Loading component...</div>}>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </Suspense>
    </div>
  );
};

export default UserList;
