import {Routes, Route} from 'react-router-dom'
import Catglass from './components/products/Catglass'
import Glass2 from './components/products/Glass2'
import Header from './components/Header'
import Landing from './components/Landing'
import Glass3 from './components/products/Glass3'
import Glass4 from './components/products/Glass4'
import Glass5 from './components/products/Glass5'
import Glass6 from './components/products/Glass6'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='catglass' element={<Catglass/>}/>
        <Route path='glass2' element={<Glass2/>}/>
        <Route path='glass3' element={<Glass3/>}/>
        <Route path='glass4' element={<Glass4/>}/>
        <Route path='glass5' element={<Glass5/>}/>
        <Route path='glass6' element={<Glass6/>}/>
      </Routes>
    </>
  )
}

export default App
