import React from 'react';
//estilos
import './styles/App.css';
//react router import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//component import
import Menu from './components/Menu';


class App extends React.Component{

  render(){
    return(
      <>
        <Router>
          <Routes>
            <Route path='/' element={<><Menu /></>}/>
          </Routes>
        </Router>
      </>
    );
  }

}

export default App;
