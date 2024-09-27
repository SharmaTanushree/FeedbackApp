import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import Summary from './components/Summary';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutLink from './components/AboutLink';
import { FeedbackProvider } from './contexts/FeedbackProvider';

function App() {


  return (
    <FeedbackProvider>
    <Router>
      <Header text="Feedback UI" bgColor="rgba(0 0 0)" textColor="#ff6a95"></Header>
      <div className='container'>
        <Routes>
          <Route path='/' element={
            <>
            <FeedbackForm ></FeedbackForm>
            <Summary></Summary>
            <FeedbackList></FeedbackList>
            <AboutLink></AboutLink>
            </>
          }></Route>
          <Route path='/about' element={<About></About>}></Route>
        
        </Routes>
     </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
