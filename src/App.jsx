import {Routes,Route} from 'react-router-dom'
// import { ProductRoute } from './components/PoductRoute'
import  Catglass  from './components/products/Catglass'
import { Scific } from './components/products/Scific'
import Header from './components/Header'
import Landing from './components/Landing'

function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='catglass' element={<Catglass/>}/>
          <Route path='scific' element={<Scific/>}/>
        </Routes>
    </>
  )
}

export default App
