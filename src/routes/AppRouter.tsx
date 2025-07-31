import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthUser } from '../pages/AuthUser';
import { Game } from '../pages/Game';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthUser />} />
        <Route
          path="/game"
          element={
            <ProtectedRoute>
              <Game />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};
