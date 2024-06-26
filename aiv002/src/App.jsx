import './App.css'

import {Routes, Route} from 'react-router-dom'
import Navbar from './comp/navbar/Navbar'
import Hero from './pages/hero/Hero'
import AiTools from './pages/aiTools/AiTools'
import AiAssistant from './pages/aiAssistant/AiAssistant'
import News from './pages/News/News'
import About from './pages/about/About'
import Account from './pages/account/Account'

function App() {
  return (
    <main>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/aiTools' element={<AiTools/>}/>
        <Route path='/aiAssistant' element={<AiAssistant/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
      
    </main>
  )
}

export default App
