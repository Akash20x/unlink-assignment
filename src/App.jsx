import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Rockets from './pages/Rockets';
import MainContainer from './components/MainContainer';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={ 
            <MainContainer>
              <Dashboard />
            </MainContainer>
             } 
          />
          <Route exact path='/rockets' element={ 
            <MainContainer>
              <Rockets />
            </MainContainer>
             } 
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
