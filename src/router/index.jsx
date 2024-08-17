import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home/Home';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}/>
      </Route>
      </Routes>
  </Router>
);

export default AppRouter;
