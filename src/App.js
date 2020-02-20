import React from 'react';
import './App.css';
import Header from "./components/AHeader/Header";
import Main from "./components/BMain/Main";
import Skills from "./components/CSkills/Skills";
import Projects from "./components/DProject/Projects";
import Slogan from "./components/ESlogan/Slogan";
import Contacts from "./components/FContacts/Contacts";
import Footer from "./components/GFooter/Footer";


function App() {
    return (

        <div className='App'>
           <div >
             <Header/>
             <Main/>
             <Skills/>
             <Projects/>
             <Slogan/>
             <Contacts/>
             <Footer/>
           </div>
        </div>
    )
        ;
}



export default App;
