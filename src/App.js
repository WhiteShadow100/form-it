// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormCreater from './component/form_creater/FormCreater';
import TestPage from './component/TestPage/TestPage';
import TestPage2 from './component/TestPage/TestPage2';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  // registering service worker if it is supported
  // if('serviceWorker' in navigator){
  //   navigator.serviceWorker
  //   .register('/sw.js');
  // }else{
  //   alert("Service Worker cannot be registered.")
  // }


  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/page1">Page</Link>
        <Link to="/page2">Page 2</Link>

        <Routes>
          <Route path="/page1" element={<FormCreater />} exact />
          <Route path="/page2" element={<TestPage2 />} exact />
          <Route path="*" element={<TestPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
