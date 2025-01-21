import {BrowserRouter, Route, Routes} from 'react-router'
import Home from './pages/home/home'

import {setupAxiosConfiguration} from './shared/utils/axios-config';

import './App.scss';

setupAxiosConfiguration();

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
    </Routes>
  </BrowserRouter>
)

export default App
