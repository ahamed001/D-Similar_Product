import {Routes,Route} from 'react-router-dom'
import { Landing } from './components/Landing'
import { Catglass } from './components/products/Catglass'
import { Scific } from './components/products/Scific'
function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='catglass' element={<Catglass/>}/>
          <Route path='scific' element={<Scific/>}/>
      </Routes>
    </>
  )
}

export default App
