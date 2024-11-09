// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import ProfileFormPage from './pages/ProfileFormPage';
// import ProfilePage from './pages/ProfilePage';
// import NotFoundPage from './pages/NotFoundPage';

// const AppRoutes: React.FC = () => (
//   <Routes>
//     <Route path="/profile-form" element={<ProfileFormPage />} />
//     <Route path="/profile" element={<ProfilePage />} />
//     <Route path="*" element={<NotFoundPage />} />
//   </Routes>
// );

// export default AppRoutes;


// AppRoutes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileFormPage from './pages/ProfileFormPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/profile-form" element={<ProfileFormPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/profile-form/:id" element={<ProfileFormPage />} />  {/* Edit route */}
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
