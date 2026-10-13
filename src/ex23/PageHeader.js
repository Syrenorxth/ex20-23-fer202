import React from 'react';

// icon "users" ve bang svg
const UsersIcon = () => (
  <svg viewBox="0 0 24 20" fill="currentColor" aria-hidden="true">
    <circle cx="12" cy="4.5" r="4" />
    <circle cx="4.5" cy="7" r="2.8" />
    <circle cx="19.5" cy="7" r="2.8" />
    <path d="M5 19c0-4.4 3.1-7.5 7-7.5s7 3.1 7 7.5z" />
    <path d="M0 17.5c0-3 1.9-5.3 4.5-5.3 1 0 1.9.3 2.6.8C5.2 14.4 4 16.6 4 19H0z" />
    <path d="M24 17.5c0-3-1.9-5.3-4.5-5.3-1 0-1.9.3-2.6.8 1.9 1.4 3.1 3.6 3.1 6H24z" />
  </svg>
);

const PageHeader = ({ title }) => (
  <div className="page-header">
    <h1>
      <UsersIcon />
      {title}
    </h1>
  </div>
);

export default PageHeader;
