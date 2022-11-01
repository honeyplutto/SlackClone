import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Channel from './Components/Channel/Channel';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import WorkSpace from './Components/Workspace/WorkSpace';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/registration' element={<Registration />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/workspace' element={<WorkSpace />} />
        <Route path='/workspace:id' element={<Channel />} />
      </Routes>
    </Router>
  );
}

export default App;
