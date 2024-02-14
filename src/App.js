import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './components/Main'
import No from './components/No'
import './App.css';
import Cry from './components/Cry';
import Eat from './components/Eat';
import Typ from './components/Typ';
import We from './components/We';
import Valentine from './components/Valentine';
import Last from './components/Last';



function App(){
    return (
        <div className='app_page'>
            <Router>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/whyno' element={<No/>}/>
                    <Route path='/cry' element={<Cry/>}/>
                    <Route path='/eat' element={<Eat/>}/>
                    <Route path='/typ' element={<Typ/>}/>
                    <Route path='/we' element={<We/>}/>
                    <Route path='/valentine' element={<Valentine/>}/>
                    <Route path='/last' element={<Last/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App