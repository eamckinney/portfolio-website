import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import ReactGA from 'react-ga';
import 'aos/dist/aos.css';
import './App.css';



class App extends Component {
    
    componentDidMount() {
        AOS.init();
        ReactGA.initialize('G-6TC5ZMTK1L');
    }

    render() {
        return (
          <BrowserRouter>
            <div className="App">
                <Main />
            </div>
        </BrowserRouter>
        );
    }
}

export default App;