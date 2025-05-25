import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import AdminHome from './AdminHome';
import UserHome from './UserHome';
import { PrivateRoute, RoleRoute } from './PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/admin" element={
          <RoleRoute role="Administrateur">
            <AdminHome />
          </RoleRoute>
        }/>

        <Route path="/user" element={
          <RoleRoute role="Utilisateur">
            <UserHome />
          </RoleRoute>
        }/>
      </Routes>
    </Router>
  );
  
}

export default App;
