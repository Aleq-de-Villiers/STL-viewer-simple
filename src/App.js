import './App.css';

import React, { useEffect, useState } from "react"
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

// const rot = [rotation, setRotation] = useState(1);

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  const [queryParameters] = useSearchParams() //grab URL variables
  const [tick, setTime] = useState(0); // animation tick
  const [rot, setRot] = useState(0); // model rotation
  
  setInterval(() => {
    setTime(tick + 1)
  }, 100);

  useEffect(() => {
    setRot(rot + .005)    
  }, [tick])

  let url_param = queryParameters.get("target_url")
  let url = default_url

  if (url_param != null) {
    url = url_param
  }

  return (
    <div className='App' onLoad={() => {
      // setRot(25)
    }}>
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
        // id="stl-view"
        style={{height: '80vh'}}
        shadows
        url={url} 
        modelProps={{"rotationZ": rot}}/>

      <p>
        model loaded from: <a href='{ur}'> {url} </a>
      </p>
    </div>
  )
}

export default App;
