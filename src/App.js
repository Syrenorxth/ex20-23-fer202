import React from 'react';
import App20 from './ex20/App';
import App21 from './ex21/App';
import App22 from './ex22/App';
import App23 from './ex23/App';

// moi bai co Router rieng voi basename = /ex20, /ex21, ...
// nen code ben trong moi bai van dung duong dan "/about", "/users/2" giong de bai
const exercises = [
  { id: 20, title: 'Decoupling Route', App: App20 },
  { id: 21, title: 'Resource IDs', App: App21 },
  { id: 22, title: 'Optional params & Link', App: App22 },
  { id: 23, title: 'Lazy loading', App: App23 },
];

function App() {
  // lay bai dang chon tu URL, vi du /ex21/users/2 -> 21
  const match = window.location.pathname.match(/^\/ex(\d+)/);
  const current = exercises.find((ex) => match && ex.id === Number(match[1])) || exercises[0];
  const CurrentApp = current.App;

  return (
    <React.StrictMode>
      <div className="menu">
        {exercises.map((ex) => (
          <a key={ex.id} href={`/ex${ex.id}`} className={ex.id === current.id ? 'active' : ''}>
            Bài {ex.id}: {ex.title}
          </a>
        ))}
      </div>

      <CurrentApp />
    </React.StrictMode>
  );
}

export default App;
