import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'reactstrap';
import { fetchPosts } from './api';
import PageHeader from './PageHeader';

// component Post chi duoc tai khi can render
const Post = lazy(() => import('./Post'));

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts()
      .then((data) => setPosts(data))
      .catch(() => setError('Không tải được danh sách posts'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <PageHeader title="Posts" />
      {loading && <div className="text-center my-3"><Spinner /> Loading posts...</div>}
      {error && <div className="text-center text-danger my-3">{error}</div>}

      <Container className="mt-3">
        <Suspense fallback={<div className="text-center my-3">Loading component...</div>}>
          <Row>
            {posts.map((post) => (
              <Col md={6} key={post.id}>
                <Post post={post} />
              </Col>
            ))}
          </Row>
        </Suspense>
      </Container>
    </div>
  );
};

export default PostList;
