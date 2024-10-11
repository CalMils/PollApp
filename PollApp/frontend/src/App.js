import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import './Scrollbar.scss'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Home from './components/Home'
import NotFound from './components/NotFound'
import CreatePoll from './components/CreatePoll';
import Polls from './components/Polls';
import Votes from './components/Votes';

function App() {
  return (    
    <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/CreatePoll' element={<CreatePoll />} />
              <Route path='/Polls' element={<Polls />} />
              <Route path='/ActivePoll' element={<Polls activePoll={true}/>} />
              <Route path='/Votes' element={<Votes />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
      </Router>
  );
}

export default App;
