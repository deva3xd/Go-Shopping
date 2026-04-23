import "./App.css"
import { routes } from './router/routes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const renderRoute = (route: (typeof routes)[number], index: number) => {
    const Component = route.component;

    return <Route key={index} path={route.path} element={<Component />} />;
  }
  
  return (
    <Router>
      <Routes>{routes.map(renderRoute)}</Routes>
    </Router>
  )
}

export default App
