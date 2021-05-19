import React from 'react';
import NavBar from './NavBar/NavBar';
import './App.css';
import SocialMedia from './SocialMedia/SocialMedia';
import MainBody from './MainBody/MainBody';

function App() {
    return (
        <div className="App">
            <header className="body-header">
                <NavBar/>
                <SocialMedia/>
            </header>
            <MainBody/>
        </div>
    );
}

export default App;
