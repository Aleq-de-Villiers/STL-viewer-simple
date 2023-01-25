import './App.css';
import {Home} from "./pages/Home"
import {AppHead} from './pages/AppHead';

import {
  Routes,
  Route,
  BrowserRouter,
  useSearchParams
} from "react-router-dom"



function App() {
  return (
    <div className='App'>
      <AppHead />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomeTab />} />
          <Route path="/test" element={<TestTab />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function HomeTab() {
  const [sp] = useSearchParams()

  return (
    <Home url={sp.get("target_url")} />
  )
}

function TestTab() {
  return (
      <div>
        <h1>
          Secret Test Page
        </h1>
        for cool people only UwU ✨
      </div>
  )
}

export default App;
