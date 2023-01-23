import './App.css';

import React from "react"
import {
  Routes,
  Route,
  useSearchParams,
  BrowserRouter
} from "react-router-dom"
import {StlViewer} from "react-stl-viewer";

const default_url = "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl"
// const default_url = "https://storage.googleapis.com/ucloud-v3/02e14529f9df9a8ebbe03533.stl"
// const default_url = "https://storage.googleapis.com/ucloud-v3/1aebf6577c7f3c61905583ab.stl"
const style = {
  height: '80vh',
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  const [queryParameters] = useSearchParams()
  let url_param = queryParameters.get("target_url")
  let url = default_url

  if (url_param != null) {
    url = url_param
  }

  return (
    <div className='App'>
      <div className="App-header">
        <h3 id="test_head">
          STL viewer simple
        </h3>

        <form>
          <label>
            <pre>Target URL: </pre>
            <input id="url_input" type="text" name="target_url" onChange={() => {}} />
            <input id="url_submit" type="submit" value="Submit"/>
          </label>
          
        </form>
      </div>

      <StlViewer
        className='.stl_view'
        style={style}
        shadows
        url={url} />

      <p>
        model loaded from: <a href='{ur}'> {url} </a>
      </p>
    </div>
  )
}

export default App;
