import { Route, Routes } from 'react-router-dom';

import App from './app/App';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  )
}

export default Router;
